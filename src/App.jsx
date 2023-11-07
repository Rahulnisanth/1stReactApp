import { Component } from "react";

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
    //Filtering using the search values dynamically :
    const FilterString = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchString);
    });

    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            const searchString = e.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchString };
            });
          }}
        />
        {FilterString.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}
export default AppOut;
