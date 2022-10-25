import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', e => {
      console.log(e);
      if (e.code === 'Escape') {
        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {}

  render() {
    return createPortal(
      <div className={css.modalBackdrop}>
        <div className={css.modalContent}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
export default Modal;

// if (e.code === 'Escape') {
//   this.props.onClose();
// }
