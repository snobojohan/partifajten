import React from 'react';
import PropTypes from 'prop-types';

import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Quiz(props) {

  function renderAnswerOptions(key) {
      return (
        <AnswerOption
          key={key.content}
          answerContent={key.content}
          answerType={key.type}
          direction={key.direction}
          answer={props.answer}
          questionId={props.questionId}
          onAnswerSelected={props.onAnswerSelected}
        />
      );
    }

    console.log(props)

    const transProps = {
      /*
     component: 'div',
     transitionName: `${name}-${this.state.direction}`,
     className: `${name}-transition-group`,
     */
     className: "container",
     component: "div",
     transitionName: "fade", // HERE
     transitionEnterTimeout: 1800,
     transitionLeaveTimeout: 1500,
     transitionAppearTimeout: 1500
   };

    return (
   <ReactCSSTransitionGroup {...transProps}>
     <div key={props.questionId}>
       <QuestionCount
         counter={props.questionId}
         total={props.questionTotal}
       />
       <div className="card">
         <Question content={props.question} />
       </div>
       <ul className="answerOptions">
         {props.answerOptions.map(renderAnswerOptions)}
       </ul>
     </div>
   </ReactCSSTransitionGroup>

    );
  }

  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default Quiz;
