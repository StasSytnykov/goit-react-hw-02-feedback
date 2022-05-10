import PropTypes from 'prop-types';
import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.props;
    return (
      <div>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {total}</li>
          <li>
            Positive feedback:{' '}
            {positiveFeedback ? positiveFeedback.toFixed(2) : 0}%
          </li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
