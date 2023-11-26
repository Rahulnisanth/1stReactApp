import "./card.style.css";

const Card = ({ monster }) => {
  const { id, name, email } = monster;
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
};

export default Card;
