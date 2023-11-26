import "./search-box.style.css";

const SearchBox = ({ placeholder, onChangeHandler }) => (
  <div className="search-bar">
    <h2 className="heading-2">Monsters Rolodex</h2>
    <input type="search" placeholder={placeholder} onChange={onChangeHandler} />
  </div>
);

export default SearchBox;
