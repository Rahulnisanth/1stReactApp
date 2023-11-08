import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
class AppOut extends Component {
  constructor() {
    super();
    //State-declaration:
    this.state = {
      monsters: [],
      searchString: "",
    };
  }
  //Lifecycle-component + API fetch:
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  //Function optimization:
  onSearchFunction = (e) => {
    const searchString = e.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchString };
    });
  };
  render() {
    //Storing all the elements in a value foe accessible play:
    const { monsters, searchString } = this.state;
    const { onSearchFunction } = this;
    //Filtering using the search values dynamically :
    const FilterString = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchString);
    });

    return (
      <div>
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchFunction}
          placeholder="Search monsters"
        />
        <CardList monsters={FilterString} />
      </div>
    );
  }
}
export default AppOut;
