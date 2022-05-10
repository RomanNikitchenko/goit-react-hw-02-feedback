import React from "react";
import Statistics from "./Statistics/Statistics";

class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    const sum = good + neutral + bad;
    return Math.round(sum > 0 ? (good * 100) / sum : 0);
  };

  handleChange = evt => {
    const { name } = evt.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <button name="good" onClick={this.handleChange}>Good</button>
        <button name="neutral" onClick={this.handleChange}>Neutral</button>
        <button name="bad" onClick={this.handleChange}>Bad</button>

        <Statistics
          good={ good }
          neutral={ neutral }
          bad={ bad }
          total={ this.countTotalFeedback(this.state) }
          positivePercentage={ this.countPositiveFeedbackPercentage(this.state) }
        />
      </div>
    )
  };
};

export default App;
