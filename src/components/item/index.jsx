import React from 'react';
import './style.css';
import henkel from '../../assets/img/foto.jpg';

export default class Item extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className='list-goods__item'>
          <div className='list-goods__item__img'>
            <img src={henkel} width='332px' height='200px' alt='foto' />
          </div>
          <button
            data-name={this.props.id}
            onClick={this.props.onClick}
            className='list-goods__item-del'
          ></button>
          <h3 className='list-goods__item__title'>{this.props.title}</h3>
          <p className='list-goods__item__description'>{this.props.description}</p>
          <span className='list-goods__item__price'>{this.props.price} руб.</span>
        </div>
      </React.Fragment>
    );
  }
}
