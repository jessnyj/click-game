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

  componentDidMount() {
    this.randomCard();
  } 

  cardSelection = (id) => {
    this.randomCard(id);
  }

  randomCard = () => {
    const randSimp = this.state.simpsons.sort(() => Math.random() - 0.5);
    this.setState({simpsons: randSimp})
    }


  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        <div className="container">
          {this.state.simpsons.map(simpson => (
            <ActorCard
              cardSelection={this.cardSelection}
              id={simpson.id}
              key={simpson.id}
              image={simpson.image}
            />
          ))}
        </div>
        <Footer />
      </Wrapper>
    );
  }
}


export default App;
