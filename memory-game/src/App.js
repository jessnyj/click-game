import React, { Component } from "react";
import Footer from "./components/Footer/index";
import Jumbotron from "./components/Jumbotron/index";
import Navbar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper/wrapper";
// import simpsons from "./simpsons.json";

class App extends Component {
  state = {

  }


  render() {
    return (
      <Wrapper>
        <Navbar></Navbar>
      </Wrapper>
    );
  }

}


export default App;
