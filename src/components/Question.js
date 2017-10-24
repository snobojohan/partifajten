import React from 'react';
import PropTypes from 'prop-types';
import Swipeable from 'react-swipeable';

class Question extends React.Component {

  swipedLeft(e, xDistance, isFlick) {
    // console.log("You Swiped Left...", e, xDistance, isFlick);

  }

  swipedRight(e, xDistance, isFlick) {
    // console.log("You Swiped RIGHT...", e, xDistance, isFlick);

  }

  render() {

    let ill = "./" + this.props.illustration;


    return (
      <Swipeable style={{touchAction: 'none'}} data-down={this.props.answerOptions[0].type} data-up={this.props.answerOptions[2].type}
        onSwipedLeft={this.props.onAnswerSelected}
        onSwipedRight={this.props.onAnswerSelected} >
        <img src={ill} alt="illustration" />
        <h2 className="question">{this.props.content}</h2>
      </Swipeable>
    )
  }
}

/*
function Question(props) {

  let ill = "./" + props.illustration;

   return (
     <div>

    </div>
   );
 }
*/

 Question.propTypes = {
   content: PropTypes.string.isRequired,
   illustration: PropTypes.string,
   onAnswerSelected: PropTypes.func.isRequired,
   answerOptions: PropTypes.array.isRequired
 };

export default Question;
