import React from 'react';


class Modal extends Component {
    render() {
      const { isOpen, onClose, children } = this.props;
  
      if (!isOpen) {
        return null;
      }
  
      return (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            You are wrong!
          </div>
        </div>
      );
    }
  }
  
  export default Modal;