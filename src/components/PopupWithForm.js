import { useEffect } from 'react';

function PopupWithForm({ isOpen, onClose, onCloseEsc, onCloseOverlay, name, title, children, inputValid, submitText }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('page_type_hidden');
      document.addEventListener('keydown', onCloseEsc);
      document.addEventListener('mousedown', onCloseOverlay);
    } else {
      document.body.classList.remove('page_type_hidden');
      document.removeEventListener('keydown', onCloseEsc);
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

