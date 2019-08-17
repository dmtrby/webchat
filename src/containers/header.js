import { connect } from 'react-redux';

import * as actions from '../actions/messages';
import Header from '../components/Header/Header';

const mapStateSocketsToProps = (state) => {
    const { loaded, message, connected, name } = state.messages;
    return {
        loaded: loaded,
        message: message,
        connected: connected,
        name: name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        connectAction: () => dispatch(actions.connectAction()),
        disconnectAction: () => dispatch(actions.disconnectAction()),
        setNameAction: (name) => dispatch(actions.setNameAction(name)),
        setNameFromLocalStorageAction: (name) => dispatch(actions.setNameFromLocalStorageAction(name)),
    };
};

const HeaderContainer = connect(
    mapStateSocketsToProps,
    mapDispatchToProps
)(Header);


export default HeaderContainer;
