//import logo from '../logo.svg';
//import './App.css';

import Header from './Header.js';
import Main from './Main.js';

import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function handleEditAvatarClick() {
  document.querySelector('.popup_update_avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_edit_data').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_add_card').classList.add('popup_opened');
}


function App() {
  return (
    <div className="App">
      <div className="page">
          <Header />
          <Main onEditProfile={handleEditAvatarClick} onAddPlace={handleEditProfileClick} 
            onEditAvatar={handleAddPlaceClick}/>
          
          <PopupWithForm title="Редактировать профиль" name="edit_data" textSubmit="Сохранить" 
            children= {
              <>
                <label className="popup__field">
                  <input className="popup__name-input input-general-properties" id="nameInput" name="your-name" placeholder="Ваше имя" type="text" defaultValue="" minLength="2" maxLength="40" required />

                  <span className="popup__input-error nameInput-error">
                    Ошибка валидации имени
                  </span>
                </label>

                <label className="popup__field">
                  <input className="popup__job-input input-general-properties" id="jobInput" name="your-job" placeholder="Ваш род деятельности" type="text" defaultValue="" minLength="2" maxLength="200" required />

                  <span className="popup__input-error jobInput-error">
                    Ошибка валидации рода деятельности
                  </span>
                </label>
              </>
            }
          />

          <PopupWithForm title="Новое место" name="add_card" textSubmit="Создать" 
            children= {
              <>
                <label className="popup__field">
                  <input className="popup__name-input input-general-properties" id="nameInputCard" name="card-name" placeholder="Название" type="text" defaultValue="" minLength="2" maxLength="30" required />

                  <span className="popup__input-error nameInputCard-error">
                    Ошибка валидации названия
                  </span>
                </label>

                <label className="popup__field">
                  <input className="popup__job-input input-general-properties" id="linkInput" name="image-link" placeholder="Ссылка на картинку" type="url" defaultValue="" required />

                  <span className="popup__input-error linkInput-error">
                    Ошибка валидации ссылки на картинку
                  </span>
                </label>
              </>
            }
          />

          <PopupWithForm title="Обновить аватар" name="update_avatar" textSubmit="Сохранить" 
            children= {
              <>
                <label className="popup__field">
                  <input className="popup__name-input input-general-properties" id="linkAvatarInput" name="avatar-link" placeholder="Ссылка на аватар" type="url" defaultValue="" required />

                  <span className="popup__input-error linkAvatarInput-error">
                    Ошибка валидации ссылки на аватар
                  </span>
                </label>
              </>
            }
          />

          <PopupWithForm title="Вы уверены?" name="delete_card" textSubmit="Да" children= {<></>} />

          <ImagePopup />
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