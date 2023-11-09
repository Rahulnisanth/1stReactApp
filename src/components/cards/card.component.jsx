import { Component } from "react";
import "./card.style.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://robohash.org/${id}?set=set1&size100`}
          alt="Card image"
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{email}</p>
        </div>
      </div>
    );
  }
}

export default Card;
