import { 
    RECEIVE_SIGNUP_ERRORS
} from '../actions/sessions_actions';

const errorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SIGNUP_ERRORS: 
            debugger
            return action.errors
        default:
            return state;
    }
};

export default errorsReducer


