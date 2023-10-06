import React from "react";

class LoginUser extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    update(title) {
        return e => this.setState({[title]: e.currentTarget.value});
    }

    render(){
        return (
            <div id="login-form">
                <form onSubmit={this.handleSubmit} id="login-actual-form">
                    <h1>Welcome Back!</h1>
                    <p>We're so excited to see you again!</p>
                    <label>EMAIL OR USERNAME
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </label>   
                    <label>PASSWORD
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <input type="submit" value='Login' />   
                    <div id='demo-link'>Click here for a demo login!</div>            
                </form> 
            </div>
        );
    }
}


export default LoginUser;