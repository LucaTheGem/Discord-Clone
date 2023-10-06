import React from "react";
import FriendsList from "../main_app_parts/friends";
import UserLink from "../main_app_parts/user_link";

class MainApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id='main-app'>
                <FriendsList />
                <UserLink /> 
            </div>
        )
    }
}

export default MainApp;