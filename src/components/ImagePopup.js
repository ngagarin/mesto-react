function ImagePopup(props) {
  return (
    <section className={`popup popup_type_image ${props.card ? 'popup_opened' : ""}`} >
      <figure className="popup__image-conteiner">
        <button onClick={props.onClose} className="popup__close-button popup__close-button_type_image" type="button"></button>
        <img src={props.card ? props.card.link : ''} alt={props.card ? `Фотография. ${props.card.name}` : ''} className="popup__image" />
        <figcaption className="popup__image-caption">{props.card ? props.card.name : ''}</figcaption>
      </figure>
    </section>
  );
};

export default ImagePopup;

