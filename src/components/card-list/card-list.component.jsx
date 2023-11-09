import { Component } from "react";
import "./card-list.style.css";
import Card from "../cards/card.component";
class CardList extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
