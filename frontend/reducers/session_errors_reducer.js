import { 
    RECEIVE_SESSION_ERRORS
} from '../actions/sessions_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        default:
            return state;
    }
};

