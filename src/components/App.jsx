import React from "react";

import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notification from "./Notification/Notification"

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
    const { good="кнопка не работает", neutral, bad } = this.state;

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={ this.handleChange }
          onLeaveFeedback={ this.state }
        />

        {this.countTotalFeedback(this.state) > 0
          ?
          (<Statistics
            good={good}
            neutral={ neutral }
            bad={ bad }
            total={ this.countTotalFeedback(this.state) }
            positivePercentage={this.countPositiveFeedbackPercentage(this.state)}
          />)
          : 
          (<Notification message="There is no feedback" />)
        }
      </Section>
    )
  };
};

export default App;
