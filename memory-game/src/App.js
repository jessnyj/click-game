import React, { Component } from "react";
import Footer from "./components/Footer/index";
import Jumbotron from "./components/Jumbotron/index";
import Navbar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper/wrapper";
import ActorCard from "./components/ActorCard/index";
import simpsons from "./simpsons.json";

class App extends Component {
  state = {
    simpsons: simpsons
  };


  render() {
    return (
      <Wrapper>
        <Navbar />
        {this.state.simpsons.map(simpson => (
          <ActorCard
          id={simpson.id}
          image={simpson.image}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
