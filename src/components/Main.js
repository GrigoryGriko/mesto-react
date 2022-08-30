import React, { useState } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import Footer from './Footer.js';
import api from '../utils/Api.js';

import Card from './Card.js';


function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api.getInitCards()
      .then((cardsData) => {
        setCards(cardsData);
      })
      .catch(err => console.log(err));

  }, [])

  return (
    <main className="content section">
      <section className="profile section-size-full">
        <button className="profile__button-avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }} type="button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__info-name">{currentUser.name}</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
          </div>

          <p className="profile__info-descript">{currentUser.about}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements-grid section-size-full" aria-label="Карточки мест">
        <ul className="elements-grid__list">
          {cards.map((card, i) => (
            <Card key={i} card={card} onCardClick={props.onCardClick} />
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  )
}

export default Main;