import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './Message';
import './MessageContainer.css';

class MessagesContainer extends Component {

    componentDidUpdate() {
        const messagesContainer = document.querySelector('.messages-container');
        messagesContainer.scrollTo(0, messagesContainer.scrollHeight);
    }

    render() {
        const { messages } = this.props;
        return (
            <>
                <div className="messages-container scroll-style">
                    {messages.concat(this.props.localMessages).map((message, index) => (
                        <Message
                            key={message.id + index}
                            messageItem={message}
                            name={this.props.name}
                        />
                    ))}
                </div>
            </>

        );
    }
}

MessagesContainer.propTypes = {
    messages: PropTypes.array.isRequired,
    localMessages: PropTypes.array.isRequired,
    message: PropTypes.string,
    name: PropTypes.string,
};

export default MessagesContainer;
