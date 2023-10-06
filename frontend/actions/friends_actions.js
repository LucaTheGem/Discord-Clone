import * as FriendUtil from '../util/friend_api_util'
import { receiveSessionErrors } from './sessions_actions';

export const RECIEVE_FRIENDS = 'RECIEVE_FRIENDS'

export const receiveFriends = friends => ({
    type: RECIEVE_FRIENDS,
    friends
});

export const getfriends = user_id => dispatch => (
    FriendUtil.getfriends(user_id)
        .then(friends => dispatch(receiveFriends(friends))),
            err => dispatch(receiveSessionErrors(err.response))
);

export const addfriend = friend => dispatch => (
    FriendUtil.addfriend(friend)
        .then(friend => dispatch(receiveFriends(friend.user_id))),
            err => dispatch(receiveSessionErrors(err.response))
);

export const deletefriend = friend => dispatch => (
    FriendUtil.deletefriend(friend.id)
        .then(friend => dispatch(receiveFriends(friend.user_id))),
            err => dispatch(receiveSessionErrors(err.response))
);

