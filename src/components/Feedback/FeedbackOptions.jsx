import PropTypes from 'prop-types';
import { Component } from 'react';

export class FeedbackOptions extends Component {
  onCount = () => {
    console.log(this.props);
  };

  onLeaveGoodFeedback = () => this.props.onLeaveFeedback(this.props.options[0]);

  onLeaveNeutralFeedback = () =>
    this.props.onLeaveFeedback(this.props.options[1]);

  onLeaveBadFeedback = () => this.props.onLeaveFeedback(this.props.options[2]);

  render() {
    return (
      <div>
        <button type="button" onClick={this.onLeaveGoodFeedback}>
          Good
        </button>
        <button type="button" onClick={this.onLeaveNeutralFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.onLeaveBadFeedback}>
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
