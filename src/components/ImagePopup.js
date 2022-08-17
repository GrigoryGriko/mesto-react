function ImagePopup() {
  return (
    <div className="popup popup_background_black popup_show_image">
      <div className="popup__wrapper">
        <img className="popup__full-image" src="/" alt="место" />
        <button className="popup__button-close" type="button"></button>

        <blockquote className="popup__caption"></blockquote>
      </div>
    </div>
  )
}


export default ImagePopup;