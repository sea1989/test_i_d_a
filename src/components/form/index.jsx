import React from 'react';
import './style.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      textValue: '',
      priceValue: '',
      linkValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.linkChange = this.linkChange.bind(this);
  }

  handleChange(event) {
    this.setState({ nameValue: event.target.value });
  }

  descriptionChange(event) {
    this.setState({ textValue: event.target.value });
  }

  priceChange(event) {
    this.setState({ priceValue: event.target.value });
  }

  linkChange(event) {
    this.setState({ linkValue: event.target.value });
  }

  handleClick() {
    this.props.onChange(
      this.state.nameValue,
      this.state.textValue,
      this.state.priceValue,
      this.state.linkValue
    );
  }

  render() {
    return (
      <form onSubmit={this.handleClick} className='form' action='#'>
        <label className='label form__label'>
          <span className='label__required'>Наименование товара</span>
          <input
            value={this.state.nameValue}
            onChange={this.handleChange}
            className='input form__input required'
            type='text'
            placeholder='Введите наименование товара'
            required
          />
        </label>
        <label className='label form__label'>
          <span>Описание товара</span>
          <textarea
            value={this.state.textValue}
            onChange={this.descriptionChange}
            className='input textarea form__input form__textarea'
            placeholder='Введите описание товара'
          ></textarea>
        </label>
        <label className='label form__label'>
          <span className='label__required'>Ссылка на изображение товара</span>
          <input
            value={this.state.linkValue}
            onChange={this.linkChange}
            className='input form__input required'
            type='text'
            placeholder='Введите ссылку'
            required
          />
        </label>
        <label className='label form__label'>
          <span className='label__required'>Цена товара</span>
          <input
            value={this.state.priceValue}
            onChange={this.priceChange}
            className='input form__input required'
            type='text'
            placeholder='Введите цену'
            required
          />
        </label>
        <button
          className={
            this.state.nameValue &&
            this.state.priceValue &&
            this.state.linkValue
              ? 'button form__button'
              : 'form__button-disabled'
          }
          type='submit'
        >
          Добавить товар
        </button>
      </form>
    );
  }
}
