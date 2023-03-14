import React, { Component } from "react";
import importedNames from "../names";

export class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: importedNames,
    };
  }

  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase();
    console.log(inputText);
    const filterNames = importedNames.filter((name) => {
      return name.toLocaleLowerCase().includes(inputText);
    });
    this.setState({
      names: filterNames,
    });
  };

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>matching names found:{this.state.names.length}</p>
        <form>
          <input
            id="name"
            type="text"
            placeholder="search names.."
            onChange={(event) => this.handleChange(event)}
          ></input>
        </form>
        <div style={{ margin: "auto" }}>
          {this.state.names.map((name) => {
            return <p key={name}>{name}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default SearchBar;
