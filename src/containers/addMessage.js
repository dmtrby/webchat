import { connect } from 'react-redux';

import * as actions from '../actions/messages';
import AddMessage from '../components/AddMessage/AddMessage';

const mapDispatchToProps = dispatch => {
    return {
        messageSending: (text, name) => {
            dispatch(actions.messageSending(text, name))
            dispatch(actions.messageSend());
        }
    }
}

const mapStateToProps = (state) => {
    const { name } = state.messages;
    return {
        name: name,
    }
};

const AddMessageUI = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddMessage)


export default AddMessageUI;
