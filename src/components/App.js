import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      //Popups

      // Popup edit profile info
      <div className="popup popup_type_edit-profile">
        <div className="popup__content">
          <button className="popup__close-button popup__close-button_type_profile" type="button"
            aria-label="Закрыть окно"></button>
          <h2 className="popup__header">Редактировать профиль</h2>
          <form className="form form_type_profile" id="editProfileForm" name="editProfileForm" novalidate>
            <fieldset className="form__set">
              <label className="form__item">
                <input type="text" className="form__input form__input_type_name" placeholder="Имя" name="name" id="name-input"
                  minlength="2" maxlength="40" required />
                  <span className="form__input-error name-input-error"></span>
              </label>
              <label className="form__item">
                <input type="text" className="form__input form__input_type_about" placeholder="Сфера деятельности" name="about"
                  id="about-input" minlength="2" maxlength="200" required />
                  <span className="form__input-error about-input-error"></span>
              </label>
              <button className="form__submit" type="submit" aria-label="Изменить информацию профайла">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      //Popup add a card
      <div className="popup popup_type_add-card">
        <div className="popup__content">
          <button className="popup__close-button popup__close-button_type_cards" type="button"
            aria-label="Закрыть окно"></button>
          <h2 className="popup__header">Новое место</h2>
          <form className="form" id="editCardsForm" name="editCardsForm" novalidate>
            <fieldset className="form__set">
              <label className="form__item">
                <input type="text" className="form__input form__input_type_title" placeholder="Название места" name="title"
                  id="title-input" minlength="2" maxlength="30" required />
                  <span className="form__input-error title-input-error"></span>
              </label>
              <label className="form__item">
                <input type="url" className="form__input form__input_type_picture" placeholder="Ссылка на картинку"
                  name="picture" id="picture-input" required />
                  <span className="form__input-error picture-input-error"></span>
              </label>
              <button className="form__submit" type="submit" aria-label="Добавить карточку">Создать</button>
            </fieldset>
          </form>
        </div>
      </div>

      //Popup show pic
      <div className="popup popup_type_image">
        <figure className="popup__image-conteiner">
          <button className="popup__close-button popup__close-button_type_image" type="button"
            aria-label="Закрыть окно"></button>
          <img src="#" alt="#" className="popup__image" />
            <figcaption className="popup__image-caption">#</figcaption>
        </figure>
      </div>

      //Popup update avatar
      <div className="popup popup_type_edit-avatar">
        <div className="popup__content">
          <button className="popup__close-button popup__close-button_type_profile" type="button"
            aria-label="Закрыть окно"></button>
          <h2 className="popup__header">Обновить аватар</h2>
          <form className="form form_type_avatar" id="editAvatar" name="editAvatar" novalidate>
            <fieldset className="form__set">
              <label className="form__item">
                <input type="url" className="form__input form__input_type_avatar" placeholder="Ссылка на аватар" name="avatar"
                  id="avatar-input" required />
                  <span className="form__input-error avatar-input-error"></span>
              </label>
              <button className="form__submit" type="submit" aria-label="Изменить аватар">Сохранить</button>
            </fieldset>
          </form>
        </div>
      </div>

      //Popup delete card
      <div className="popup popup_type_delete-card">
        <div className="popup__content">
          <button className="popup__close-button popup__close-button_type_profile" type="button"
            aria-label="Закрыть окно"></button>
          <h2 className="popup__header">Вы уверены?</h2>
          <form className="form form_type_delete-card" id="deleteCard" name="deleteCard" novalidate>
            <button className="form__submit" type="submit" aria-label="Удалить карточку">Да</button>
          </form>
        </div>
      </div>

      // Card item
      <template id="card">
        <li className="card">
          <img src="#" className="card__picture" alt="#" />
            <div className="card__info">
              <h2 className="card__title">#</h2>
              <div>
                <button className="card__like-button" type="button" aria-label="Поставить лайк">
                </button>
                <p className="card__likes-counter">#</p>
              </div>
            </div>
            <button className="card__delete" type="button" aria-label="Удалить карточку"></button>
        </li>
      </template>
    </>
  );
}

export default App;
