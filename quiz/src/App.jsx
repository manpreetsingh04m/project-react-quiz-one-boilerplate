
import React, { Component } from "react";
import HomeComponent from "./Component/HomeComponent";
import QuizComponent from "./Component/QuizComponent";
import ResultPage from "./Component/ResultPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "home",
    };
  }

  navigateToQuiz = () => {
    this.setState({ currentPage: "quiz" });
  };

  navigateToHome = () => {
    this.setState({ currentPage: "home" });
  };

  navigateToScore = () => {
    this.setState({ currentPage: "score" });
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        {currentPage === "home" && (
          <HomeComponent onPlayClick={this.navigateToQuiz} />
        )}
        {currentPage === "quiz" && (
          <QuizComponent onQuitClick={this.navigateToScore} />
        )}
        {currentPage === "score" && (
          <ResultPage
            onPlayAgainClick={this.navigateToQuiz}
            onBackToHomeClick={this.navigateToHome}
          />
        )}
      </div>
    );
  }
}

export default App;
