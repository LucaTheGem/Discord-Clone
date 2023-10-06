import * as ServerUtil from '../util/server_api_util';
import { receiveSessionErrors } from './sessions_actions';

export const RECIEVE_SERVERS = 'RECIEVE_SERVERS'
export const CREATE_SERVER = 'CREATE_SERVER'
export const SHOW_SERVER = 'SHOW_SERVER'

export const receiveServers = currentUser => ({
    type: RECIEVE_SERVERS, //how are we going to solve the problem where we need to find servers that you don't own but are a part of?
    currentUser //currently the database is built around channels having members because some channels are exclusive to certain members.
}); // would we go through channels => servers?

export const showServer = server => ({
    type: SHOW_SERVER,
    server
});

export const createServer = server => dispatch => (
    ServerUtil.createserver(server)
        .then(server => dispatch(showServer(server)))
);

export const deleteServer = server_id => dispatch => (
    ServerUtil.deleteserver(server_id)
);


