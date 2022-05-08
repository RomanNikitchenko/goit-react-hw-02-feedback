import React from "react";

class Statistics extends React.Component {

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
  }

  good = () => {
    this.setState(state => ({ good: state.good + 1 }));
  };
    
  neutral = () => {
    this.setState(state => ({ neutral: state.neutral + 1 }));
  };
    
  bad = () => {
    this.setState(state => ({ bad: state.bad + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <button onClick={this.good}>Good</button>
        <button onClick={this.neutral}>Neutral</button>
        <button onClick={this.bad}>Bad</button>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback(this.state)}</p>
        <p>PositiveFeedback: {this.countPositiveFeedbackPercentage(this.state)}%</p>
      </div>
    );
  }
};

export default Statistics;