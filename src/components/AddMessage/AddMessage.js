import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './AddMessage.css';


class AddMessage extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.messageSending(this.state.text, this.props.name);
        this.setState({ text: '' });
    }

    onChange(e) {
        this.setState({ text: e.target.value });
    }

    onKeyUp(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.props.messageSending(this.state.text, this.props.name);
            this.setState({ text: '' });
        }
    }

    render() {
        return (
            <form className="chat-form" onSubmit={this.onSubmit}>
                <textarea
                    className="chat-textarea scroll-style"
                    value={this.state.text}
                    onChange={this.onChange}
                    autoComplete="off"
                    onKeyUp={this.onKeyUp}
                />
                <div className="chat-buttons">
                    <button
                        type="submit"
                        value="Send"
                        className="chat-button chat-button--submit"
                        onClick={this.onSubmit}>
                        Send
                        </button>
                </div>
            </form>
        )
    }
}

AddMessage.propTypes = {
    messageSending: PropTypes.func.isRequired,
    name: PropTypes.string,
}

export default AddMessage;
