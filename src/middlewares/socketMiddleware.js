import * as actions from '../actions/messages';

import notification from '../images/notification.png';

const socketMiddleware = (function () {
    let socket = null;
    function sendOneMessageFromArray(store, arr) {
        const oneMessage = arr[0];
        const length = arr.length;
        if (socket != null) {
            socket.send(JSON.stringify({
                from: oneMessage.from,
                message: oneMessage.message,
            }));
            store.dispatch(actions.messageSendingSuccess(oneMessage.id));
            if (length > 1) {
                sendOneMessageFromArray(store, store.getState().messages.localMessages);
            }
        }
    }
    function connect(store) {
        return new Promise(function (resolve, reject) {
            socket = new WebSocket('ws://st-chat.shas.tel');
            store.dispatch(actions.connectionAction());
            socket.onopen = function () {
                resolve(socket);
            };
            socket.onmessage = onMessage(socket, store);
            socket.onclose = onClose(socket, store);
            socket.onerror = function (err) {
                store.dispatch(actions.disconnectionAction());
                reject(err);
            };
        });
    }
    const onClose = (ws, store) => () => {
        socket = null;
        store.dispatch(actions.disconnectionAction());
        function reconnect(status) {
            if (!status) {
                store.dispatch(actions.reconnectionAction());
                setTimeout(function () {
                    if (!store.getState().messages.connected) {
                        store.dispatch(actions.connectAction());
                    }
                }, 5000);
                setTimeout(function () {
                    if (!store.getState().messages.connected) {
                        reconnect(store.getState().messages.connected)
                    }
                }, 5500);
            }
        }
        reconnect(store.getState().messages.connected);
    }
    const onMessage = (ws, store) => e => {
        const msg = JSON.parse(e.data);
        store.dispatch(actions.messageReceived(msg));
        function spawnNotification(text, img, title) {
            const options = {
                body: text,
                icon: img
            };
            const n = new Notification(title, options);
            setTimeout(n.close.bind(n), 3000);
        }
        if (Notification.permission === 'granted' && document.visibilityState === "hidden") {
            msg.forEach(element => {
                spawnNotification(element.from + ': ' + element.message, notification, 'New message on Public chat');
            });
        }
    }

    return store => next => action => {
        switch (action.type) {
            case 'SOCKET_CONNECT_ACTION': {
                if (socket != null) {
                    socket.close();
                }
                socket = null;
                connect(store).then(function () {
                    store.dispatch(actions.sendMessagesAfterConnect());
                });
                break;
            }
            case 'SOCKET_DISCONNECT_ACTION':
                if (socket != null) {
                    socket.close();
                }
                socket = null;
                break;

            case 'SOCKET_MESSAGE_SEND': {
                const localMessages = store.getState().messages.localMessages;
                const lastMessage = localMessages[localMessages.length - 1];
                if (socket != null) {
                    socket.send(JSON.stringify({
                        from: lastMessage.from,
                        message: lastMessage.message,
                    }));
                    store.dispatch(actions.messageSendingSuccess(lastMessage.id));
                }
                break;
            }
            case 'SOCKET_SEND_MESSAGES_AFTER_CONNECT': {
                if (store.getState().messages.localMessages.length > 0) {
                    sendOneMessageFromArray(store, store.getState().messages.localMessages);
                }
                break;
            }
            default:
                return next(action);
        }
    }
})();

export default socketMiddleware;
