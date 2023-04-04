import { useEffect } from 'react';

function PopupWithForm({ isOpen, onClose, onCloseEsc, onCloseOverlay, name, title, children, inputValid, submitText }) {
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', onCloseEsc);
    } else {
      document.removeEventListener('keydown', onCloseEsc);
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', onCloseOverlay);
    } else {
      document.removeEventListener('mousedown', onCloseOverlay);
    }
  }, [isOpen])

  return (
    <div className={`popup popup_type_${name} ${isOpen ? `popup_opened` : ""}`}>
      <div className="popup__content">
        <button onClick={onClose} className="popup__close-button" type="button"></button>
        <h2 className="popup__header">{title}</h2>
        <form name={`edit-${name}-form`} className="form" noValidate >
          <fieldset className="form__set">
            {children}
            <button className={`form__submit ${!inputValid ? "form__submit_disabled" : ""}`} type="submit" disabled={!inputValid}>{submitText}</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;

