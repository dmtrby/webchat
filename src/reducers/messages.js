import {
    CONNECTION_ACTION,
    DISCONNECTION_ACTION,
    MESSAGE_SENDING,
    MESSAGE_RECEIVED,
    MESSAGE_SENDING_SUCCESS,
    RECONNECTION_ACTION,
    SETNAME_ACTION,
    SETNAME_FROMLOCALSTORAGE_ACTION,
} from '../actions/messages';

const initialState = {
    messages: [],
    localMessages: [],
    message: 'Just created',
    connected: false,
    name: '',
};

export function messages(state = initialState, action) {
    switch (action.type) {

        case CONNECTION_ACTION: {
            return {
                ...state,
                message: 'connected',
                connected: true,
            }
        }

        case RECONNECTION_ACTION: {
            return {
                ...state,
                message: 'reconnection',
                connected: false,
            }
        }

        case SETNAME_ACTION: {
            return {
                ...state,
                name: action.name,
                messages: [...state.messages.slice()],
            }
        }

        case SETNAME_FROMLOCALSTORAGE_ACTION: {
            return {
                ...state,
                name: action.name,
            }
        }

        case DISCONNECTION_ACTION:
            return {
                ...state,
                message: 'disconnected',
                connected: false,
            }

        case MESSAGE_RECEIVED: {
            let arr = [];
            action.msg.forEach((v) => {
                arr.unshift(v);
            });
            arr = state.messages.concat(arr);
            return {
                ...state,
                messages: [...arr],
            };
        }

        case MESSAGE_SENDING: {
            const index = new Date().getTime() + Math.random() * 10000;
            const newObj = {
                id: index,
                from: action.name,
                message: action.text,
                time: 0,
            }
            return {
                ...state,
                localMessages: [...state.localMessages, newObj],
                messages: [...state.messages],
            };
        }

        case MESSAGE_SENDING_SUCCESS: {
            const element = state.localMessages.find((v) => v.id === action.id);
            state.localMessages.splice(state.localMessages.indexOf(element), 1);
            return {
                ...state,
                localMessages: [...state.localMessages],
            };
        }

        default:
            return state;
    }
}
