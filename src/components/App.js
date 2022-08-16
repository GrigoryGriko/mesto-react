//import logo from '../logo.svg';
//import './App.css';

import Header from './Header.js';
import Main from './Main.js';

import {PopupEditData, PopupAddCard, PopupUpdateAvatar, PopupDeleteCard} from './PopupWithForm.js';


function App() {
  return (
    <div className="App">
      <div className="page">
          <Header />
          <Main />
          
          <PopupEditData />
          <PopupAddCard />
          <PopupUpdateAvatar />
          <PopupDeleteCard />

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
