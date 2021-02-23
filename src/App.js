import React, { Component } from "react";
import Footer from "./components/Footer/index";
import Jumbotron from "./components/Jumbotron/index";
import Navbar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper/wrapper";
import ActorCard from "./components/ActorCard/index";
import simpsons from "./simpsons.json";

class App extends Component {
  state = {
    simpsons: simpsons,
    score: 0,
    topScore: 0,
    simpCards: [],
    shake: "",
    rightWrong: "Click an image to begin!"
  };

  componentDidMount() {
    this.randomCard();
  } 
// Score and top score
  cardSelection = (id) => {
    if (this.state.simpCards.indexOf(id) > -1) {
      this.setState ({
        simpCards: [],
        score: 0,
        shake: "animate__animated animate__shakeX",
        rightWrong: "You guessed incorrectly"
      });
    } else {
      this.setState({
        score: this.state.score + 1,
        shake: "",
        rightWrong: "Click an image to begin!"
      })
      if (this.state.score >= this.state.topScore) {
        this.setState({topScore: this.state.score + 1})
      }
      this.state.simpCards.push(id);
    }
    this.randomCard();
  }
// Shuffling of cards
  randomCard = () => {
    const randSimp = this.state.simpsons.sort(() => Math.random() - 0.5);
    this.setState({simpsons: randSimp})
    }


  render() {
    return (
      <Wrapper>
        <Navbar
        score={this.state.score}
        topScore={this.state.topScore}
        rightWrong={this.state.rightWrong}
        />
        <Jumbotron />
        <div className="container">
          {this.state.simpsons.map(simpson => (
            <ActorCard
              cardSelection={this.cardSelection}
              id={simpson.id}
              key={simpson.id}
              image={simpson.image}
              shake={this.state.shake}
            />
          ))}
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

// Portfolio!
// https://jessny-portfolio.herokuapp.com/

export default App;
