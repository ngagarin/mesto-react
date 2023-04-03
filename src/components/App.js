import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useInput } from './FormValidator.js';

import React from "react";

function App() {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  const handleUserInfoChange = (name, about) => {
    setUserName(name);
    setUserDescription(about);
  }

  function resetValidations(...inputs) {
    inputs.forEach((input) => {
      input.resetValidation();
    });
  }

  function handleClosePopups() {
    resetValidations(title, about, login, picture, avatar);
    closeAllPopups();
  }

  const title = useInput('', { isEmpty: true, minLength: 2 })
  const about = useInput('', { isEmpty: true, minLength: 2 })
  const login = useInput('', { isEmpty: true, minLength: 2 })
  const picture = useInput('', { isEmpty: true, isUrl: true });
  const avatar = useInput('', { isEmpty: true, isUrl: true });

  return (
    <div className="page">
      <Header />

      <Main
        onUserInfoChange={handleUserInfoChange}
        userName={userName}
        userDescription={userDescription}

        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={handleClosePopups}
        name="edit-avatar"
        title="Обновить аватар"
        children={(
          <>
            <label className="form__item">
              <input
                onChange={e => avatar.onChange(e)}
                onFocus={e => avatar.onFocus(e)}
                value={avatar.value}
                type="text"
                className={`form__input ${avatar.isDirty && (avatar.isEmpty || avatar.urlError) ? "form__input_type_error" : ""}`}
                placeholder="Ссылка на аватар"
                name="avatar"
                id="avatar-input"
                required
              />
              {avatar.isDirty &&
                (avatar.isEmpty
                  ? <span className="form__input-error">Это обязательное поле</span>
                  : (avatar.urlError && <span className="form__input-error">Здесь должна быть ссылка</span>)
                )
              }
            </label>

            {(!avatar.inputValid) ?
              <button className="form__submit form__submit_disabled" type="submit" disabled>Сохранить</button>
              : <button className="form__submit" type="submit">Сохранить</button>}
          </>
        )}
      />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={handleClosePopups}
        name='edit-profile'
        title='Редактировать профиль'
        children={
          <>
            <label className="form__item">
              <input
                onChange={e => login.onChange(e)}
                onFocus={e => login.onFocus(e)}
                value={login.value}
                type="text"
                className={`form__input ${login.isDirty && (login.isEmpty || login.minLengthError || login.maxLengthError) ? "form__input_type_error" : ""}`}
                placeholder={userName}
                name="login"
                id="name-input"
                minLength="2"
                maxLength="40"
                required
              />
              {login.isDirty &&
                (login.isEmpty
                  ? <span className="form__input-error">Это обязательное поле</span>
                  : ((login.minLengthError || login.maxLengthError) && <span className="form__input-error">Должно быть от 2 до 40 символов</span>)
                )
              }
            </label>
            <label className="form__item">
              <input
                onChange={e => about.onChange(e)}
                onFocus={e => about.onFocus(e)}
                value={about.value}
                type="text"
                className={`form__input ${about.isDirty && (about.isEmpty || about.minLengthError || about.maxLengthError) ? "form__input_type_error" : ""}`}
                placeholder={userDescription}
                name="about"
                id="about-input"
                minLength="2"
                maxLength="200"
                required
              />
              {about.isDirty &&
                (about.isEmpty
                  ? <span className="form__input-error">Это обязательное поле</span>
                  : ((about.minLengthError || about.maxLengthError) && <span className="form__input-error">Должно быть от 2 до 200 символов</span>)
                )
              }
            </label>

            {(!about.inputValid || !login.inputValid) ?
              <button className="form__submit form__submit_disabled" type="submit" disabled>Сохранить</button>
              : <button className="form__submit" type="submit">Сохранить</button>}
          </>
        }
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={handleClosePopups}
        name={'add-card'}
        title={'Новое место'}
        children={(
          <>
            <label className="form__item">
              <input
                type="text"
                className={`form__input ${title.isDirty && (title.isEmpty || title.minLengthError || title.maxLengthError) ? "form__input_type_error" : ""}`}
                placeholder="Название места"
                name="title"
                id="title-input"
                minLength="2"
                maxLength="30"
                required
                onChange={(e) => title.onChange(e)}
                onFocus={(e) => title.onFocus(e)}
                value={title.value}
              />
              {title.isDirty &&
                (title.isEmpty
                  ? <span className="form__input-error">Это обязательное поле</span>
                  : ((title.minLengthError || title.maxLengthError) && <span className="form__input-error">Должно быть от 2 до 30 символов</span>)
                )
              }
            </label>
            <label className="form__item">
              <input
                type="text"
                className={`form__input ${picture.isDirty && (picture.isEmpty || picture.urlError) ? "form__input_type_error" : ""}`}
                placeholder="Ссылка на картинку"
                name="picture"
                id="picture-input"
                required
                onChange={(e) => picture.onChange(e)}
                onFocus={(e) => picture.onFocus(e)}
                value={picture.value}
              />
              {picture.isDirty &&
                (picture.isEmpty
                  ? <span className="form__input-error">Это обязательное поле</span>
                  : (picture.urlError && <span className="form__input-error">Здесь должна быть ссылка</span>)
                )
              }
            </label>

            {(!title.inputValid || !picture.inputValid) ?
              <button className="form__submit form__submit_disabled" type="submit" disabled>Сохранить</button>
              : <button className="form__submit" type="submit">Сохранить</button>}
          </>
        )}
      />

      <PopupWithForm
        name={'delete-card'}
        title={'Вы уверены?'}
        children={(
          <>
            <button className="form__submit" type="submit" aria-label="Удалить карточку">Да</button>
          </>
        )}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div>
  );
}

export default App;