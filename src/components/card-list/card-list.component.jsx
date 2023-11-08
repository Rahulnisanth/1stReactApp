import { Component } from "react";
import "./card-list.style.css";
class CardList extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <div key={monster.id} className="card">
            <img
              className="card-img-top"
              src={`https://robohash.org/${monster.id}?set=set1&size100`}
              alt="Card image"
            />
            <div className="card-body">
              <h4 className="card-title">{monster.name}</h4>
              <p className="card-text">{monster.email}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
