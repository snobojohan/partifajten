import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

  function AnswerOption(props) {

    var lblClass = classNames({
      'radioCustomLabel': true,
      'radioCustomLabel-up': props.direction === 'up',
      'radioCustomLabel-skip': props.direction === 'skip',
      'radioCustomLabel-down': props.direction === 'down',
    });



    return (
      <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          data-direction={props.direction}
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className={lblClass} htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    );
  }

  AnswerOption.propTypes = {
    answerType: PropTypes.string.isRequired,
    answerContent: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default AnswerOption;
