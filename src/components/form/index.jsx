import React from 'react';
import './style.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nameValue: '', textValue: '', priceValue: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
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

  handleClick() {
    this.props.onChange(
      this.state.nameValue,
      this.state.textValue,
      this.state.priceValue
    );
  }

  render() {
    return (
      <form onSubmit={this.handleClick} class='form' action='#'>
        <label class='label form__label'>
          <span class='label__required'>Наименование товара</span>
          <input
            value={this.state.nameValue}
            onChange={this.handleChange}
            class='input form__input required'
            type='text'
            placeholder='Введите наименование товара'
            required
          />
        </label>
        <label class='label form__label'>
          <span>Описание товара</span>
          <textarea
            value={this.state.textValue}
            onChange={this.descriptionChange}
            class='input textarea form__input form__textarea'
            placeholder='Введите описание товара'
          ></textarea>
        </label>
        <label class='label form__label'>
          <span class='label__required'>Ссылка на изображение товара</span>
          <input
            class='input form__input required'
            type='text'
            placeholder='Введите ссылку'
            required
          />
        </label>
        <label class='label form__label'>
          <span class='label__required'>Цена товара</span>
          <input
            value={this.state.priceValue}
            onChange={this.priceChange}
            class='input form__input required'
            type='text'
            placeholder='Введите цену'
            required
          />
        </label>
        <button class='button form__button' type='submit'>
          Добавить товар
        </button>
      </form>
    );
  }
}
