import React from "react";

class CreateUser extends React.Component {
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
        console.log(this.props)
        return (
            <div id="login-form">
                <form onSubmit={this.handleSubmit} id='actual-register-form'>
                    <h1>Create an account</h1>
                    <h5>USERNAME
                        <input type="text" value={this.state.username} onChange={this.update('username')} />
                    </h5>
                    <h5>TAG (maximum 4 characters)
                        <input type="text" value={this.state.tag} onChange={this.update('tag')} />
                    </h5>
                    <h5>EMAIL                 
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </h5>    
                    <h5>PASSWORD
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </h5>
                    <h5>DATE OF BIRTH
                        <input type="date" value={this.state.birth_date} onChange={this.update('birth_date')}/>
                    </h5>
                    <div id='terms-container'>
                        <input type="checkbox" id='terms-checkbox' value={this.state.terms_of_service} onChange={this.update('terms_of_service')} />
                        I have read and agreed to Tiscord's Terms of Services and Privacy Policy by Benny Lim
                    </div>
                    <input type="submit" value='Continue'/>
                    <div id='demo-link'>Click here for a demo login!</div>        
                </form>
            </div>
        );
    }
}
//after successful signup and redirect to home page, add login dispatch action so that state has access to current_user

export default CreateUser;