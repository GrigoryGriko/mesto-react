import React, { useState } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import { CardsContext } from '../contexts/CardsContext.js';

import Header from './Header.js';
import Main from './Main.js';

import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup.js';
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

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

  function handleAddPlaceSubmit(cards) {
    api.addCard(cards)
      .then((cards) => {
        setSelectedCard(cards);
        closeAllPopups();
      })
      .catch(err => console.log(err));
  }

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
                cards={cards}
              />
              
              <EditProfilePopup 
                isOpen={isEditProfilePopupOpen} 
                onClose={closeAllPopups} 
                onUpdateUser={handleUpdateUser}
              ></EditProfilePopup>

              <AddPlacePopup
                onAddPlace={handleAddPlaceSubmit}
                isOpen={isAddPlacePopupOpen} 
                onClose={closeAllPopups} 
                cards={cards}
              ></AddPlacePopup>

              <EditAvatarPopup
                onUpdateAvatar={handleUpdateAvatar}
                isOpen={isEditAvatarPopupOpen} 
                onClose={closeAllPopups} 
              />

              <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </div>
      </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;