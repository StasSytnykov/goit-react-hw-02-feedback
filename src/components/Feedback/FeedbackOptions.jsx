import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  onLeaveGoodFeedback = () => {
    const { onLeaveFeedback, options } = this.props;
    return onLeaveFeedback(options.find(option => option === 'good'));
  };

  onLeaveNeutralFeedback = () => {
    const { onLeaveFeedback, options } = this.props;
    return onLeaveFeedback(options.find(option => option === 'neutral'));
  };

  onLeaveBadFeedback = () => {
    const { onLeaveFeedback, options } = this.props;
    return onLeaveFeedback(options.find(option => option === 'bad'));
  };

  render() {
    return (
      <div className={style.feedbackThumb}>
        <button
          className={style.feedbackButton}
          type="button"
          onClick={this.onLeaveGoodFeedback}
        >
          Good
        </button>
        <button
          className={style.feedbackButton}
          type="button"
          onClick={this.onLeaveNeutralFeedback}
        >
          Neutral
        </button>
        <button
          className={style.feedbackButton}
          type="button"
          onClick={this.onLeaveBadFeedback}
        >
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
