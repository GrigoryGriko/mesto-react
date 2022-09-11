import PopupWithForm from './PopupWithForm.js';
import React, { useState } from 'react';

import { CardsContext } from '../contexts/CardsContext.js';



function AddPlacePopup(props) {
  const cards = React.useContext(CardsContext);

  const [cardName, setCardName] = useState('');
  const [cardLink, setCardLink] = useState('');

  React.useEffect(() => {
    if ( (cards.cardName !== null && cards.cardLink !== null) && 
    (cards.cardName !== undefined && cards.cardLink !== undefined) && 
    (cards.cardName !== '' && cards.cardLink !== '') ) {
      setCardName(cards.cardName);
      setCardLink(cards.cardLink);
    }
  }, [cards]);


  function handleChangeCardName(e) {
    setCardName(e.target.value);
  }

  function handleChangeCardLink(e) {
    setCardLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  
    props.onAddPlace({
      name: cardName,
      link: cardLink
    });
  } 

  return (
    <PopupWithForm 
      title="Новое место" 
      name="add_card" 
      isOpen={props.isOpen} 
      textSubmit="Создать" 
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <label className="popup__field">
            <input 
              className="popup__name-input input-general-properties" 
              id="nameInputCard" 
              onChange={handleChangeCardName}
              name="card-name" 
              value={cardName} 
              placeholder="Название" 
              type="text"
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
              onChange={handleChangeCardLink} 
              name="image-link" 
              value={cardLink}
              placeholder="Ссылка на картинку" 
              type="url"
              required 
            />

            <span className="popup__input-error linkInput-error">
              Ошибка валидации ссылки на картинку
            </span>
          </label>
        </>
      }
    />
  )
}

export default AddPlacePopup;