function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? `popup_opened` : ""}`}>
      <div className="popup__content">
      <button onClick={props.onClose} className="popup__close-button" type="button"></button>
      <h2 className="popup__header">{props.title}</h2>
      <form name={`edit-${props.name}-form`} className="form" noValidate>
        <fieldset className="form__set">
          {props.children}
        </fieldset>
      </form>
      </div>
    </div>
  );
};

export default PopupWithForm;

