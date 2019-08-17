import React from 'react';
import PropTypes from 'prop-types';

export const Message = ({ messageItem, name }) => {
    const { message, from, time } = messageItem;
    let currenttime = new Date(messageItem.time);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[currenttime.getDay()];
    let hours = currenttime.getUTCHours() + 3;
    if (hours >= 24) {
        hours = '0' + (hours - 24);
    }
    let min = currenttime.getUTCMinutes();
    if (min < 10) {
        min = '0' + min;
    }
    function OfflineMessage() {
        return (
            <div className='message no-send'>
                <span className={from === name ? 'message-author' : 'message-username'}> {from}</span>
                <span>(<b>not send yet</b>): </span>
                <span className="message-text">{message}</span>
            </div>
        )
    }
    function OnlineMessage() {
        return (
            <div className='message'>
                <span className={from === name ? 'message-author' : 'message-username'}> {from}</span>
                <span className="message-time">({day} {hours}:{min}): </span>
                <span className="message-text">{message}</span>
            </div>
        )
    }
    if (time) {
        return <OnlineMessage />;
    }
    return <OfflineMessage />;
}

Message.propTypes = {
    messageItem: PropTypes.shape({
        message: PropTypes.string,
        from: PropTypes.string,
        time: PropTypes.number,
    }).isRequired,
    name: PropTypes.string,
};

export default Message;
