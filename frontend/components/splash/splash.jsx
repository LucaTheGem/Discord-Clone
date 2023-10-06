import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

        
    render() {
        let splashbutton; //by creating a JS object we can choose what renders depending on conditions we set
        let registerbutton;
        
        if(!this.props.loggedIn) {
            splashbutton = <Link id="landingbutton" to='/login'>Login</Link>
            registerbutton = <Link id='registerbutton' to='/register'>Sign Up</Link> 
        } else {
            splashbutton = <Link id="logged-in-landing-button" to='/app'>Open App</Link>
        }

        return(
            <div id='splash'>
                    <div id='splash-head'>
                            <div id='logo'>
                                {/* <img id='logopic' src='' alt="logo" /> */}
                                <Link id="logo-link" to='/'> 
                                    <i className="test"></i>
                                    <h2>Tiscord</h2>
                                </Link>
                            </div>
                        <ul id='nav'>
                            <li><a href="/">About the Dev</a></li>
                            <li><a href="/">Safety</a></li>
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">my Portfolio</a></li>
                        </ul>
                        <div id='button-container'>
                            {splashbutton}
                            {registerbutton}
                        </div>
                    </div>
                    <div id='hero-container' >
                        <h1 id='splash-body-header' className='bg' > Imagine a place...</h1>
                        <div id='splash-body-body' className='bg'> ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often. </div>
                        <button id='contact-button'>Contact Me</button>
                        <button id='open-in-browser-button'>Open Tiscord</button>
                    </div>
                    <div id='footer'>
                        <div id='bye'>A Clone War Designed and built by Benny Lim</div>
                    </div>
            </div>
        )
    }
}


export default Splash;

// style={{ backgroundImage:`url(${world})`, backgroundSize:'fill', height: '100vh'}}