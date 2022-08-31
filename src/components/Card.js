import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.isOwn = this.props.card.owner._id === this.props.currentUser._id;
    this.cardDeleteButtonClassName = (
      `elements-grid__delete ${this.isOwn ? '' : 'elements-grid__delete_hidden'}`
    );
    
    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    this.isLiked = this.props.card.likes.some(i => i._id === this.props.currentUser._id);

// Создаём переменную, которую после зададим в `className` для кнопки лайка
    this.cardLikeButtonClassName = (
      `elements-grid__like ${this.isLiked ? '' : 'elements-grid__like_active'}`
    ); 
    
  }

  handleClick = () => {
    this.props.onCardClick(this.props.card);
  }


  render() {
    return (
      <li className="elements-grid__item">
        <img className="elements-grid__image" src={this.props.card.link} alt={this.props.card.name} 
          onClick={this.handleClick}/>
        <button className={this.cardDeleteButtonClassName} type="button"></button>

        <div className="elements-grid__text-like-wrapper">
          <h2 className="elements-grid__place-name">{this.props.card.name}</h2>
          <div className="elements-grid__like-container">
            <button className={this.cardLikeButtonClassName} type="button"></button>
            <span className="elements-grid__like-counter">{this.props.card.likes.length}</span>
          </div>
        </div>
      </li>
    );
  }
}