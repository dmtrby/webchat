import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ChangeName from '../ChangeName/ChangeName';
import './Header.css';

class Header extends Component {

    componentDidMount() {
        this.props.connectAction();
        if (localStorage.getItem('name')) {
            this.props.setNameFromLocalStorageAction(localStorage.getItem('name'));
        } else {
            this.props.setNameFromLocalStorageAction('anonymous');
        }
    }

    render() {
        const { message, connected, name } = this.props;
        let classForChatHEader = 'chat-status';
        if (message === 'connected') classForChatHEader += ' connected';
        if (message === 'disconnected') classForChatHEader += ' disconnected';
        if (message === 'reconnection') classForChatHEader += ' reconnection';
        return (
            <>
                <div className="header-top">
                    <h1>Public chat</h1>
                    <div className="header-buttons">
                        <button
                            onClick={this.props.disconnectAction}
                            disabled={connected ? '' : 'disabled'}
                            className="button"
                        >disconnect</button>
                        <button
                            onClick={this.props.connectAction}
                            disabled={connected ? 'disabled' : ''}
                            className="button"
                        >connect</button>
                    </div>

                </div>
                <div className={classForChatHEader}>
                    <div className="header-bottom">
                        <ChangeName authorName={name} setName={this.props.setNameAction} />
                    </div>
                    <div className="connection-status">
                        <div className={message === 'reconnection' ? 'connection-status-message pulse' : 'connection-status-message'}>
                            <span>{message}</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

Header.propTypes = {
    connectAction: PropTypes.func.isRequired,
    disconnectAction: PropTypes.func.isRequired,
    setNameAction: PropTypes.func.isRequired,
    setNameFromLocalStorageAction: PropTypes.func.isRequired,
    message: PropTypes.string,
    connected: PropTypes.bool,
    name: PropTypes.string,
};

export default Header;
