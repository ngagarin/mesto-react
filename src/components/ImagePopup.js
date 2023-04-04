function ImagePopup({ card, onClose }) {
  return (
    <section className={`popup popup_type_image ${card ? 'popup_opened' : ""}`} >
      <figure className="popup__image-conteiner">
        <button onClick={onClose} className="popup__close-button popup__close-button_type_image" type="button"></button>
        <img src={card ? card.link : ''} alt={card ? `Фотография. ${card.name}` : ''} className="popup__image" />
        <figcaption className="popup__image-caption">{card ? card.name : ''}</figcaption>
      </figure>
    </section>
  );
};

export default ImagePopup;

