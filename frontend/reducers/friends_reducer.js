import { RECIEVE_FRIENDS } from "../actions/friends_actions";

const _nullfriends = Object.freeze({
    1: null
})

const friendsReducer = (state = _nullfriends, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECIEVE_FRIENDS:
            return {friends: action.friends};
        default:
            return state;
    }
};

export default friendsReducer;