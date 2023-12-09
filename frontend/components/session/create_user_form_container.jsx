import { connect } from 'react-redux';
import { signup } from '../../actions/sessions_actions';
import CreateUser from './create_user_form';

const mapStatetoProps = (state) => ({
    user: {
        username: '',
        email: '',
        password: '',
        tag: '',
        terms_of_service: '',
        birth_date: ''
    },
    errors: state.errors
});

// There will be two options to move on from here, we can either create a function to auto generate TAGS for users
// or have users input their own tags, with a error returning that the tag and username is taken if it's already in the server.
// letting users create their own tags will save us from creating a function that has to loop and search database
// offering higher customizability with less code, all I need to do alter error to return User/Tag is taken instead 
// of just User be taken

const mapDispatchtoProps = (dispatch) => ({
    signUp: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    removeErrors: () => dispatch(removeErrors())
});
export default connect(mapStatetoProps, mapDispatchtoProps)(CreateUser);

