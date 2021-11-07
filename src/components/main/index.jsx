import React from 'react';
import Form from '../form';
import Item from '../item';
import { adverts } from '../../data';
import './style.css';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: adverts,
    });
  }

  changeCard = (name, text, price) => {
    const newArray = this.state.data.concat({
      title: name,
      description: text,
      price: price,
    });

    this.setState({
      data: newArray,
    });
  };

  handleClick = (e) => {
    const copyData = [...this.state.data];

    const characterName = e.target.dataset.name;

    const index = copyData.findIndex((item) => item.id === characterName);

    copyData.splice(index, 1);
    console.log(copyData);
    this.setState({
      data: copyData,
    });
  };

  render() {
    return (
      <main>
        <h1 class='visually-hidden'>Тестовое задание</h1>
        <div className='table'>
          <section className='add'>
            <h2 className='add__title'>Добавление товара</h2>
            <Form onChange={this.changeCard} />
          </section>
          <section className='table__list'>
            <h2 class='visually-hidden'>Список товаров</h2>
            <label class='label filter'>
              <select class='select filter__select' name='' id=''>
                <option value='' selected='selected'>
                  По умолчанию
                </option>
                <option value=''>Сортировка</option>
              </select>
            </label>
            <ul className='list-goods'>
              {this.state.data.map(
                (element, index) =>
                  (element = (
                    <Item key={index} {...element} onClick={this.handleClick} />
                  ))
              )}
            </ul>
          </section>
        </div>
      </main>
    );
  }
}
