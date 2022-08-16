function PopupEditData() {
  return (
    <div className="popup popup_edit_data">
      <form className="popup__container" name="form-edit-info" action="/" method="post" noValidate>
        <button className="popup__button-close" type="button"></button>

        <div className="popup__content">
          <h2 className="popup__header">Редактировать профиль</h2>
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
            <button className="popup__button-save popup__button-save_disabled" id="button-save-data" type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  )
}

function PopupAddCard() {
  return (
    <div className="popup popup_add_card">
      <form className="popup__container" name="form-add-card" action="/" method="post" noValidate>
        <button className="popup__button-close" type="button"></button>

        <div className="popup__content">
          <h2 className="popup__header">Новое место</h2>
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
          <button className="popup__button-save popup__button-save_disabled" id="button-add-card" type="submit">Создать</button>
        </div>
      </form>
    </div>
  )
}

function PopupUpdateAvatar() {
  return (
    <div className="popup popup_update_avatar">
      <form className="popup__container" name="form-update-avatar" action="/" method="post" noValidate>
        <button className="popup__button-close" type="button"></button>

        <div className="popup__content">
          <h2 className="popup__header">Обновить аватар</h2>

          <label className="popup__field">
            <input className="popup__name-input input-general-properties" id="linkAvatarInput" name="avatar-link" placeholder="Ссылка на аватар" type="url" defaultValue="" required />

            <span className="popup__input-error linkAvatarInput-error">
              Ошибка валидации ссылки на аватар
            </span>
          </label>
          <button className="popup__button-save popup__button-save_disabled" id="button-update-avatar" type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  )
}

function PopupDeleteCard() {
  return (
    <div className="popup popup_delete_card">
      <form className="popup__container" name="form-delete-card" action="/" method="post" noValidate>
        <button className="popup__button-close" type="button"></button>

        <div className="popup__content">
          <h2 className="popup__header">Вы уверены?</h2>
          <button className="popup__button-save popup__button-save_disabled" id="button-delete-card" type="submit">Да</button>
        </div>
      </form>
    </div>
  )
}


export {PopupEditData, PopupAddCard, PopupUpdateAvatar, PopupDeleteCard};