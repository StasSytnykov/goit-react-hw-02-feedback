import PropTypes from 'prop-types';
import { Component } from 'react';
import style from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;
    return (
      <div className={style.feedbackThumb}>
        <button
          className={style.feedbackButton}
          type="button"
          onClick={() =>
            onLeaveFeedback(options.find(option => option === 'good'))
          }
        >
          Good
        </button>
        <button
          className={style.feedbackButton}
          type="button"
          onClick={() =>
            onLeaveFeedback(options.find(option => option === 'neutral'))
          }
        >
          Neutral
        </button>
        <button
          className={style.feedbackButton}
          type="button"
          onClick={() =>
            onLeaveFeedback(options.find(option => option === 'bad'))
          }
        >
          Bad
        </button>
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
