import Footer from './Footer.js';


function handleEditAvatarClick() {
  document.querySelector('.popup_update_avatar').classList.add('.popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_edit_data').classList.add('.popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_add_card').classList.add('.popup_opened');
}


function Main() {
  return (
    <main className="content section">
      <section className="profile section-size-full">
        <button className="profile__button-avatar" type="button" onClick={handleEditAvatarClick}></button>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__info-name">Загрузка...</h1>
            <button className="profile__button-edit" type="button" onClick={handleEditProfileClick}></button>
          </div>

          <p className="profile__info-descript">Загрузка...</p>
        </div>
        <button className="profile__button-add" type="button" onClick={handleAddPlaceClick}></button>
      </section>

      <section className="elements-grid section-size-full" aria-label="Карточки мест">
        <ul className="elements-grid__list"></ul>
      </section>

      <Footer />
    </main>
  )
}

export default Main;
