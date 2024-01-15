
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
          <HomeComponent onPlay={this.navigateToQuiz} />
        )}
        {currentPage === "quiz" && (
          <QuizComponent onQuit={this.navigateToScore} />
        )}
        {currentPage === "score" && (
          <ResultPage
            onPlayAgain={this.navigateToQuiz}
            onBackToHome={this.navigateToHome}
          />
        )}
      </div>
    );
  }
}

export default App;
