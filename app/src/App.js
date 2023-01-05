import React from "react";
import "./App.css";
import Header from "./components/Header";
import AppContainer from "./pages/AppContainer";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "Weight Manager",
    };
  }

  render() {
    return (
      <div className="container">
        <Header title={this.state.title}></Header>
        <AppContainer></AppContainer>
      </div>
    );
  }
}

export default App;
