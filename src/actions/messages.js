
export const SOCKET_CONNECT_ACTION = 'SOCKET_CONNECT_ACTION';
export const CONNECTION_ACTION = 'CONNECTION_ACTION';
export const SOCKET_DISCONNECT_ACTION = 'SOCKET_DISCONNECT_ACTION';
export const DISCONNECTION_ACTION = 'DISCONNECTION_ACTION';
export const MESSAGE_SENDING = 'MESSAGE_SENDING';
export const SOCKET_MESSAGE_SEND = 'SOCKET_MESSAGE_SEND';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const MESSAGE_SENDING_SUCCESS = 'MESSAGE_SENDING_SUCCESS';
export const SOCKET_SEND_MESSAGES_AFTER_CONNECT = 'SOCKET_SEND_MESSAGES_AFTER_CONNECT';
export const RECONNECTION_ACTION = 'RECONNECTION_ACTION';
export const SETNAME_ACTION = 'SETNAME_ACTION';
export const SETNAME_FROMLOCALSTORAGE_ACTION = 'SETNAME_FROMLOCALSTORAGE_ACTION';

export function setNameFromLocalStorageAction(name) {
    return { type: SETNAME_FROMLOCALSTORAGE_ACTION, name };
}
export function setNameAction(name) {
    return { type: SETNAME_ACTION, name };
}
export function connectAction() {
    return { type: SOCKET_CONNECT_ACTION };
}
export function connectionAction() {
    return { type: CONNECTION_ACTION };
}
export function reconnectionAction() {
    return { type: RECONNECTION_ACTION };
}
export function disconnectAction() {
    return { type: SOCKET_DISCONNECT_ACTION };
}
export function disconnectionAction() {
    return { type: DISCONNECTION_ACTION };
}
export function messageSending(text, name, status) {
    return { type: MESSAGE_SENDING, text, name, status };
}
export function messageSend() {
    return { type: SOCKET_MESSAGE_SEND };
}
export function messageSendingSuccess(id) {
    return { type: MESSAGE_SENDING_SUCCESS, id };
}
export function messageReceived(msg) {
    return { type: MESSAGE_RECEIVED, msg };
}
export function sendMessagesAfterConnect() {
    return { type: SOCKET_SEND_MESSAGES_AFTER_CONNECT };
}
