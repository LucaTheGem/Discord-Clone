import React from 'react';
import create_user_form_container from '../session/create_user_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }
    
    close(){
        this.props.closeModal()
    }

    render(){
        const { modal } = this.props

        if (!modal) {
            return null;
        }
          
        let form;
        switch (modal) {
            case 'signup':
                form = <create_user_form_container />;
                break;
            default:
                return null;
        }
          
        return (
            <div className="modal-background" onClick={this.close}>
                <div className={`${modal}-modal-child`} onClick={e => e.stopPropagation()}>
                    { form }
                </div>
            </div>
        );
    }
}

export default Modal;