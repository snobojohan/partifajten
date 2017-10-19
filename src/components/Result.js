import React from 'react';
import PropTypes from 'prop-types';

  function Logo(props) {

    console.log("S R C ", props.src, props.src === ("Moderaterna" || "Socialdemokraterna") );

    if(props.src === ("Moderaterna" || "Socialdemokraterna")) {

      let imageTag = props.src + ".jpg";

      console.log("imageTag ", imageTag);

      return (
        <img src={imageTag} alt="logo" />
      )
    }

    return <div className="spacer" />;

  }

  function Result(props) {



    return (
      <div className="resultpage">
        <div className="resultLogo">
          <Logo src={props.quizResult} />
        </div>
        <div className="text-large">
          Du tycker som <strong>{props.quizResult}</strong>!
        </div>
      </div>
    );
  }

  Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
  };

  export default Result;
