import React, { Component } from 'react';

import Messages from './containers/messages';
import HeaderContainer from './containers/header';
import AddMessageUI from './containers/addMessage';

class App extends Component {

    componentDidMount() {
        Notification.requestPermission();
    }

    render() {
        return (
            <div className="App">
                <div className="chat-container">
                    <div className="chat-header">
                        <HeaderContainer />
                    </div>
                    <Messages />
                    <div className="chat-actions">
                        <AddMessageUI />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
