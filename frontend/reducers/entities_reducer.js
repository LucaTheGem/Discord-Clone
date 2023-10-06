import { combineReducers } from "redux";
import friendsReducer from "./friends_reducer";

const entitiesReducer = combineReducers({
    friendslist: friendsReducer,
});

export default entitiesReducer;