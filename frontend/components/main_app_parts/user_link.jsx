import React from "react";

class UserLink extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div id='user-link'>
                <il>{this.props.username}</il>
            </div>
        )
    }
}

export default UserLink;