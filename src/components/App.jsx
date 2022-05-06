import { Component } from 'react';
import { FeedbackOptions } from './Feedback';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = stateKey => {
    if (stateKey === 'good') {
      this.setState(prevState => {
        return {
          good: prevState.good + 1,
        };
      });
      return;
    }

    if (stateKey === 'neutral') {
      this.setState(prevState => {
        return {
          neutral: prevState.neutral + 1,
        };
      });
      return;
    }

    if (stateKey === 'bad') {
      this.setState(prevState => {
        return {
          bad: prevState.bad + 1,
        };
      });
      return;
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + bad + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      (this.state.good * 100) / this.countTotalFeedback();
    return positiveFeedback;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
