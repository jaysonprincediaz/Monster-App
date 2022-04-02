import { Component } from 'react';

import './cardList.css';
import CardContainer from './cardContainer';

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <CardContainer monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
