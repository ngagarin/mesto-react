import React, { useEffect } from 'react';
import api from '../utils/api';
import Card from './Card';
import profileAvatar from '../images/profile/programmist.jpeg';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState(profileAvatar);
  const [cards, setCards] = React.useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([profileInfo, card]) => {
      props.onUserInfoChange(profileInfo.name, profileInfo.about);
      setUserAvatar(profileInfo.avatar);
      setCards(card);
    }).catch((err) => {
      console.error(err);
    })
  }, [])

  return (
    <main>

      <section className="profile content__media">
        <button onClick={props.onEditAvatar} className="profile__avatar-edit-button" type="button">
          <img src={userAvatar} alt="Аватар для профайла" className="profile__avatar" />
        </button>
        <div className="profile__info">
          <div className="profile__name-info">
            <h1 className="profile__name">{props.userName}</h1>
            <button onClick={props.onEditProfile} className="profile__button profile__button_type_edit" type="button"></button>
          </div>
          <p className="profile__about">{props.userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} className="profile__button profile__button_type_add" type="button"></button>
      </section>

      <section className="cards content__media">
        <ul className="cards__element">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              name={card.name}
              link={card.link}
              likes={card.likes.length}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>

    </main>
  )
};

export default Main;
