import { connect } from 'react-redux';

import MessagesContainer from '../components/MessageContainer/MessagesContainer';

const mapStateToProps = (state) => {
    const { messages, message, connected, localMessages, name } = state.messages;
    return {
        messages: messages,
        localMessages: localMessages,
        name: name,
        message: message,
        connected: connected,
    }
};

const Messages = connect(
    mapStateToProps,
    null
)(MessagesContainer);

export default Messages;
