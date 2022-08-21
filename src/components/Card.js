
import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  handleClick = () => {
    this.props.onCardClick(this.props.card);
  }

  render() {
    return (
      <li className="elements-grid__item">
        <img className="elements-grid__image" src={this.props.card.link} alt={this.props.card.name} 
          onClick={this.handleClick}/>
        <button className="elements-grid__delete" type="button"></button>

        <div className="elements-grid__text-like-wrapper">
          <h2 className="elements-grid__place-name">{this.props.card.name}</h2>
          <div className="elements-grid__like-container">
            <button className="elements-grid__like" type="button"></button>
            <span className="elements-grid__like-counter">{this.props.card.likes.length}</span>
          </div>
        </div>
      </li>
    );
  }
}