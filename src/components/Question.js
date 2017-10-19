import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {

  let ill = "./" + props.illustration;

   return (
     <div>
       <img src={ill} alt="illustration" />
     <h2 className="question">{props.content}</h2>
    </div>
   );
 }

 Question.propTypes = {
   content: PropTypes.string.isRequired,
   illustration: PropTypes.string
 };

export default Question;
