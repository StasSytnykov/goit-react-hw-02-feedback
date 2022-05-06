import PropTypes from 'prop-types';
import { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positiveFeedback } = this.props;
    return (
      <div>
        <ul>
          <li>
            Good:
            <span>{good}</span>
          </li>
          <li>
            Neutral:
            <span>{neutral}</span>
          </li>
          <li>
            Bad:
            <span>{bad}</span>
          </li>
          <li>
            Total:
            <span>{total}</span>
          </li>
          <li>
            Positive feedback:
            <span>{positiveFeedback ? positiveFeedback.toFixed(2) : 0}%</span>
          </li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
