import { Component } from "react";
import "./search-box.style.css";

class SearchBox extends Component {
  render() {
    return (
      <div className="search-bar">
        <h2 className="heading-2" >Monsters Rolodex</h2>
        <input
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
export default SearchBox;
