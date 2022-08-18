import React, { useState } from 'react'

import Header from './Header.js';
import Main from './Main.js';

import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true); 
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false); 
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="App">
      <div className="page">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
            onEditAvatar={handleEditAvatarClick}/>
          
          <PopupWithForm title="Редактировать профиль" name="edit_data" isOpen={isEditProfilePopupOpen ? 'popup_opened' : ''} textSubmit="Сохранить" onClose={closeAllPopups}  
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

          <PopupWithForm title="Новое место" name="add_card" isOpen={isAddPlacePopupOpen ? 'popup_opened' : ''} textSubmit="Создать" onClose={closeAllPopups} 
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

          <PopupWithForm title="Обновить аватар" name="update_avatar" isOpen={isEditAvatarPopupOpen ? 'popup_opened' : ''} textSubmit="Сохранить" onClose={closeAllPopups} 
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

          <PopupWithForm title="Вы уверены?" name="delete_card" isOpen='' textSubmit="Да" onClose={closeAllPopups}  children= {<></>} />

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

export default App;/**/