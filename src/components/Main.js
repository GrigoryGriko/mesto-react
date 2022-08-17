import Footer from './Footer.js';


function Main(props) {
  return (
    <main className="content section">
      <section className="profile section-size-full">
        <button className="profile__button-avatar" type="button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__wrapper">
            <h1 className="profile__info-name">Загрузка...</h1>
            <button className="profile__button-edit" type="button" onClick={props.onEditProfile}></button>
          </div>

          <p className="profile__info-descript">Загрузка...</p>
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
