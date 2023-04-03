function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="card">
      <img onClick={handleClick} src={props.link} alt={props.name} className="card__picture" />

      <div className="card__info">
        <h2 className="card__title">{props.name}</h2>
        <div>
          <button className="card__like-button" type="button"></button>
          <p className="card__likes-counter">{props.likes}</p>
        </div>
      </div>
      <button className="card__delete" type="button"></button>
    </li>
  )
}

export default Card;
