import React from "react";
import ToyCard from "../components/ToyCard";
import ToyForm from "../components/ToyForm";
import ToySearch from "../components/ToySearch";


// Class components will always rerender when state or props change
class ToysContainer extends React.Component {
  state = {
    toys: [],
    search: "",
  };

  componentDidMount() {
    fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((data) => this.setState({toys: data}));
  }


  renderToyCards() {

    let displayedToys;
    if (this.state.search) {
      displayedToys = this.state.toys.filter((toy) =>
        toy.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
    } else {
      displayedToys = this.state.toys;
    }

    return displayedToys.map((toy) => {
      return <ToyCard key={toy.id} toy={toy}  />;
    });
  }

  handleSearchChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div id="toy-container">
        <ToyForm />
        <ToySearch
          search={this.state.search}
          handleChange={this.handleSearchChange}
        />
        {this.renderToyCards()}
      </div>
    );
  }
}



export default ToysContainer;
