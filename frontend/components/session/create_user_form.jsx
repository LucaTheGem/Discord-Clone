import React from "react";

class CreateUser extends React.Component {
    constructor(props){
        super(props);

        this.state = this.props.user;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signUp(this.state).then(this.props.closeModal).then(this.props.removeErrors);
    }

    update(title) {
        return e => this.setState({[title]: e.currentTarget.value});
    }

    render(){ 

        const { errors } = this.props;
        
        let fcolor = '';
        let lcolor = '';
        let ecolor = '';
        let pcolor = ''
        
        const errorHandler = {}

        if (errors.includes("Email can't be blank")) {
            errorHandler['email'] = "Email can't be blank";
            fcolor = 'red'
        }
        if (errors.includes("Birth Date can't be blank")) {
            errorHandler['birthdate'] = "Birth Date can't be blank";
            lcolor = 'red'
        }
        if (errors.includes("Email can't be blank")) {
            errorHandler['email'] = "Email can't be blank";
            ecolor = 'red'
        }
        if (errors.includes("Password is too short (minimum is 6 characters)")) {
            errorHandler['password'] = "Password is too short (minimum is 6 characters)";
            pcolor = 'red'
        }
        if (errors.includes("Tag can't be blank")) {
            errorHandler['tag'] = "Tag can't be blank";
            ecolor = 'red'
        }
        if (errors.includes("Tag is the wrong length (should be 4 characters)")) {
            errorHandler['taglength'] = "Tag is the wrong length (should be 4 characters)";
            pcolor = 'red'
        }

        return (
            <div id="login-form">

                <div id="signup-errors">
                            <ul>
                                {
                                    Object.values(errorHandler).map((error, i) => (
                                        <li key={`${i}`}>{error}</li>
                                    ))
                                }
                            </ul>
                </div>

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