//import logo from '../logo.svg';
//import './App.css';

import './Header';
import './Main';

function App() {
  return (
    <div className="App">
      <div className="page">
          <Header />
          <Main />
          <div className="popup popup_edit_data">
            <form className="popup__container" name="form-edit-info" action="/" method="post" novalidate>
              <button className="popup__button-close" type="button"></button>

              <div className="popup__content">
                <h2 className="popup__header">Редактировать профиль</h2>
                <label className="popup__field">
                  <input className="popup__name-input input-general-properties" id="nameInput" name="your-name" placeholder="Ваше имя" type="text" value="" minlength="2" maxlength="40" required />

                  <span className="popup__input-error nameInput-error">
                    Ошибка валидации имени
                  </span>
                </label>

                <label className="popup__field">
                  <input className="popup__job-input input-general-properties" id="jobInput" name="your-job" placeholder="Ваш род деятельности" type="text" value="" minlength="2" maxlength="200" required />

                  <span className="popup__input-error jobInput-error">
                    Ошибка валидации рода деятельности
                  </span>
                </label>
                  <button className="popup__button-save popup__button-save_disabled" id="button-save-data" type="submit">Сохранить</button>
              </div>
            </form>
          </div>

          <div className="popup popup_add_card">
            <form className="popup__container" name="form-add-card" action="/" method="post" novalidate>
              <button className="popup__button-close" type="button"></button>

              <div className="popup__content">
                <h2 className="popup__header">Новое место</h2>
                <label className="popup__field">
                  <input className="popup__name-input input-general-properties" id="nameInputCard" name="card-name" placeholder="Название" type="text" value="" minlength="2" maxlength="30" required />

                  <span className="popup__input-error nameInputCard-error">
                    Ошибка валидации названия
                  </span>
                </label>

                <label className="popup__field">
                  <input className="popup__job-input input-general-properties" id="linkInput" name="image-link" placeholder="Ссылка на картинку" type="url" value="" required />

                  <span className="popup__input-error linkInput-error">
                    Ошибка валидации ссылки на картинку
                  </span>
                </label>
                <button className="popup__button-save popup__button-save_disabled" id="button-add-card" type="submit">Создать</button>
              </div>
            </form>
          </div>

          <div className="popup popup_update_avatar">
            <form className="popup__container" name="form-update-avatar" action="/" method="post" novalidate>
              <button className="popup__button-close" type="button"></button>

              <div className="popup__content">
                <h2 className="popup__header">Обновить аватар</h2>

                <label className="popup__field">
                  <input className="popup__name-input input-general-properties" id="linkAvatarInput" name="avatar-link" placeholder="Ссылка на аватар" type="url" value="" required />

                  <span className="popup__input-error linkAvatarInput-error">
                    Ошибка валидации ссылки на аватар
                  </span>
                </label>
                <button className="popup__button-save popup__button-save_disabled" id="button-update-avatar" type="submit">Сохранить</button>
              </div>
            </form>
          </div>

          <div className="popup popup_delete_card">
            <form className="popup__container" name="form-delete-card" action="/" method="post" novalidate>
              <button className="popup__button-close" type="button"></button>

              <div className="popup__content">
                <h2 className="popup__header">Вы уверены?</h2>
                <button className="popup__button-save popup__button-save_disabled" id="button-delete-card" type="submit">Да</button>
              </div>
            </form>
          </div>

          <div className="popup popup_background_black popup_show_image">
            <div className="popup__wrapper">
              <img className="popup__full-image" src="/" alt="место" />
              <button className="popup__button-close" type="button"></button>

              <blockquote className="popup__caption"></blockquote>
            </div>
          </div>
        </div>

        <template id="elements-grid__item-template">
          <li className="elements-grid__item">
            <img className="elements-grid__image" src="/" alt="место" />
            <button className="elements-grid__delete" type="button"></button>

            <div className="elements-grid__text-like-wrapper">
              <h2 className="elements-grid__place-name"></h2>
              <div className="elements-grid__like-container">
                <button className="elements-grid__like" type="button"></button>
                <span className="elements-grid__like-counter"></span>
              </div>

            </div>

          </li>
        </template>
    </div>
  );
}

export default App;
