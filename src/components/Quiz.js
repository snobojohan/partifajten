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
     transitionLeaveTimeout: 1400,
     transitionAppearTimeout: 1600
   };

    return (
   <ReactCSSTransitionGroup {...transProps}>
     <div key={props.questionId}>
       <QuestionCount
         counter={props.questionId}
         total={props.questionTotal}
       />
       <div className="cardWrapper">
         <div className="card">
           <Question answerOptions={props.answerOptions} content={props.question} illustration={props.illustration} onAnswerSelected={props.onAnswerSelected} />
         </div>
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
    counter: PropTypes.number,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };

  export default Quiz;
