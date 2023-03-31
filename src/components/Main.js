import React from 'react';
import profileAvatar from '../images/profile/programmist.jpeg';

function Main() {
  return (
    <main className="content">

      <section className="profile content__media">
        <button className="profile__avatar-edit-button" type="button">
          <img src={profileAvatar} className="profile__avatar"
            alt="Аватар пользователя" />
        </button>
        <div className="profile__info">
          <div className="profile__name-info">
            <h1 className="profile__name">Николай Гагарин</h1>
            <button className="profile__button profile__button_type_edit" type="button"
              aria-label="Редактировать профиль"></button>
          </div>
          <p className="profile__about">Студент Яндекс.Практикум</p>
        </div>
        <button className="profile__button profile__button_type_add" type="button" aria-label="Добавить фотографию"></button>
      </section>

      <section className="cards content__media">
        <ul className="cards__element">

        </ul>
      </section>

    </main>
  );
}

export default Main;