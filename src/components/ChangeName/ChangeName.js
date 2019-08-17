import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ChangeName.css';

export default class ChangeName extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        this.props.setName(this.state.name);
        localStorage.setItem('name', this.state.name);
        this.setState({ name: '' });
    }
    onChange(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <>
                <div className="chat-nickname">
                    <span>Welcome to chat, <strong>{this.props.authorName}</strong>!</span>
                </div>
                <div className="change-name">
                    <span>Change name: </span>
                    <div>
                        <input
                            className="effect-1"
                            type="text"
                            value={this.state.name}
                            placeholder='Print name...'
                            maxLength='10'
                            onChange={this.onChange}
                        />
                        <span className="focus-border"></span>
                    </div>
                    <button onClick={this.onSubmit} className="button">set</button>
                </div>

            </>
        );
    }
}

ChangeName.propTypes = {
    setName: PropTypes.func.isRequired,
    authorName: PropTypes.string,
}
