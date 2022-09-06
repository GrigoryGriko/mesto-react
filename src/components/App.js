import React, { useState } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardsContext } from '../contexts/CardsContext.js';

import Header from './Header.js';
import Main from './Main.js';

import PopupWithForm from './PopupWithForm.js';
import EditProfilePopup from './EditProfilePopup.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/Api.js';


function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getInitUserData()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch(err => console.log(err));

  }, [])

  React.useEffect(() => {
    api.getInitCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch(err => console.log(err));

  }, [])

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardLike(card) {
    console.log(card);

    const isLiked = card.likes.some(i => i._id === currentUser._id);
  
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((card) => {
      setCards( (cards) => cards.map((item) => ((item._id === card._id) ? card: item)) );
    })
    .catch(err => console.log(err));
  }

  function handelCardDelete(card) {
    api.deleteCard(card._id)
    .then((card) => {
      setCards( (cards) => cards.filter((item) => (item._id !== card._id)) );
    })
    .catch(err => console.log(err));
  }

  function handleUpdateUser({name, about}) {
    api.editDataUser({nameInput: name, jobInput: about})
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }
//
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false); 
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CardsContext.Provider value={cards}>
        <div className="App">
          <div className="page">
              <Header />
              <Main 
                onEditProfile={handleEditProfileClick} 
                onAddPlace={handleAddPlaceClick} 
                onEditAvatar={handleEditAvatarClick} 
                onCardClick={handleCardClick} 
                onCardLike={handleCardLike} 
                onCardDelete={handelCardDelete}
              />
              
              <EditProfilePopup 
                isOpen={isEditProfilePopupOpen} 
                onClose={closeAllPopups} 
                onUpdateUser={handleUpdateUser}
              ></EditProfilePopup>

              <PopupWithForm 
                title="Новое место" 
                name="add_card" 
                isOpen={isAddPlacePopupOpen} 
                textSubmit="Создать" 
                onClose={closeAllPopups} 
                children= {
                  <>
                    <label className="popup__field">
                      <input 
                        className="popup__name-input input-general-properties" 
                        id="nameInputCard" 
                        name="card-name" 
                        placeholder="Название" 
                        type="text" 
                        defaultValue="" 
                        minLength="2" 
                        maxLength="30" 
                        required 
                      />

                      <span className="popup__input-error nameInputCard-error">
                        Ошибка валидации названия
                      </span>
                    </label>

                    <label className="popup__field">
                      <input 
                        className="popup__job-input input-general-properties" 
                        id="linkInput" 
                        name="image-link" 
                        placeholder="Ссылка на картинку" 
                        type="url" 
                        defaultValue="" 
                        required 
                      />

                      <span className="popup__input-error linkInput-error">
                        Ошибка валидации ссылки на картинку
                      </span>
                    </label>
                  </>
                }
              />

              <PopupWithForm title="Обновить аватар" name="update_avatar" isOpen={isEditAvatarPopupOpen} textSubmit="Сохранить" onClose={closeAllPopups} 
                children= {
                  <label className="popup__field">
                    <input 
                      className="popup__name-input input-general-properties" 
                      id="linkAvatarInput" 
                      name="avatar-link" 
                      placeholder="Ссылка на аватар" 
                      type="url" 
                      defaultValue="" 
                      required 
                    />

                    <span className="popup__input-error linkAvatarInput-error">
                      Ошибка валидации ссылки на аватар
                    </span>
                  </label>
                }
              />

              <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;