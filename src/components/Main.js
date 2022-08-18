import React, { useState } from 'react'

import Footer from './Footer.js';
import Api from '../utils/Api.js';


function Main(props) {
  const [userName, setUserName] = useState(false);
  const [userDescription, setUserDescription] = useState(false);
  const [userAvatar, setUserAvatar] = useState(false);

  return (
    <main className="content section">
      <section className="profile section-size-full">
        <button className="profile__button-avatar" style={{ backgroundImage: `url(${userAvatar})` }} type="button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__info-name">{userName}</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
          </div>

          <p className="profile__info-descript">{userDescription}</p>
        </div>
        <button className="profile__button-add" type="button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements-grid section-size-full" aria-label="Карточки мест">
        <ul className="elements-grid__list"></ul>
      </section>

      <Footer />
    </main>
  )
}

export default Main;
