import { Fragment } from 'react';
import ReactDOM from 'react-dom';

let modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'overlays');
document.body.appendChild(modalRoot);

interface IModalProps {
  children: JSX.Element;
  onCloseModalHandler: () => void;
  header: string;
}

const Modal = ({ children, onCloseModalHandler, header }: IModalProps) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="modal micromodal-slide is-open" aria-hidden="false">
          <div className="modal__overlay" data-micromodal-close="">
            <div
              className="modal__container rounded-l shadow-l"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <header className="modal__header">
                <h2 className="modal__title h1 my-0">{header}</h2>
                <button
                  onClick={onCloseModalHandler}
                  className="modal__close"
                  aria-label="Close modal"
                  data-micromodal-close=""
                ></button>
              </header>
              <main className="modal__content fs-l">{children}</main>
              <footer className="modal__footer">
                <button
                  onClick={onCloseModalHandler}
                  className="btn btn--primary btn--m"
                  data-micromodal-close=""
                  aria-label="Close this dialog window"
                >
                  Close
                </button>
              </footer>
            </div>
          </div>
        </div>,
        modalRoot
      )}
    </Fragment>
  );
};

export default Modal;
