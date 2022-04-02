import React from 'react';
import { Component } from 'react';
import CardList from './components/card-list/cardList';
import SearchBox from './components/search-box/searchBox';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <h1 className="title">Wak-Wak Sa Mindanao</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={'search monster'}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
