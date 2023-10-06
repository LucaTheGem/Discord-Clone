import { connect } from 'react-redux';
import { login } from '../../actions/sessions_actions';
import LoginUser from './login_user_form';

const mapStatetoProps = (state) => ({
    user: {
        username: '',
        password: ''
    }
});

const mapDispatchtoProps = (dispatch) => ({
    action: (user) => dispatch(login(user))
});

export default connect(mapStatetoProps, mapDispatchtoProps)(LoginUser);