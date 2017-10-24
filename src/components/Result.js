import React from 'react';
import PropTypes from 'prop-types';

  function Logo(props) {

    if(props.src === "Moderaterna" || props.src === "Socialdemokraterna") {

      let imageTag = props.src + ".jpg";


      return (
        <img src={imageTag} alt="logo" />
      )
    }

    return <div className="spacer" />;

  }

  function ResultBar(props) {



    let numVotes = props.count[props.result]



    if(!Number.isInteger(numVotes) || props.result === "Ingen"){



      return false;
    }

    // console.log(props,props.count[props.result],props.result);



    // TODO maxPoints

    let maxPoints = 4;
    let pct = ( numVotes / maxPoints ) * 100;


    let wrapClasses = "barWrapper barWrapper--block";
    let barClasses = "bar bar--block";
    let percentClasses = "resultPercent";

    let pctStyle = {
      width: '' + pct + '%'
    };

    return (
      <div className="resultGraphics">
        <div className={wrapClasses}>
          <div className={barClasses} style={pctStyle}></div>
        </div>
        <div className={percentClasses}>Matchning {pct}%</div>
      </div>
    );

  }

  function Result(props) {

    return (
      <div className="resultpage">
        <div className="resultLogo">
          <Logo src={props.quizResult} />
        </div>
        <div className="text-large">
          Du tycker som <strong>{props.quizResult}</strong>
        </div>
        <ResultBar count={props.quizResultCount} result={props.quizResult} />
      </div>
    );
  }

  Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
    quizResultCount: PropTypes.object.isRequired
  };

  export default Result;
