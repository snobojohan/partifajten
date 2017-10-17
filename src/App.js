import React, { Component } from 'react';

import quizQuestions from './api/quizQuestions';
import update from 'react-addons-update';

import Quiz from './components/Quiz';
import Question from './components/Question';
import Result from './components/Result';

import * as Icon from 'react-feather';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     direction: '',
     answersCount: {
       Socialdemokraterna: 0,
       Moderaterna: 0,
       Ingen: 0
     },
     result: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  componentDidMount() {

    if(window){
      window.addEventListener('touchstart', function onFirstTouch() {

        // we could use a class
        document.body.classList.remove('no-touching');

        // we only need to know once that a human touched the screen, so we can stop listening now
        window.removeEventListener('touchstart', onFirstTouch, false);
      }, false);
    }

  }

  shuffleArray(array) {
    // nosfflleing
    return array;
  };

  setUserAnswer(answer) {

    // console.log("answer",answer);

    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
      const counter = this.state.counter + 1;
      const questionId = this.state.questionId + 1;
      this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
      });
    }

  handleAnswerSelected(event) {

      let dirAttr = event.currentTarget.getAttribute('data-direction');
      // HERE manipulate body class
      if(window){
        // Remove all direction classes
        document.body.classList.remove('skip','up','down');
        document.body.classList.add(dirAttr);
      }

      this.setUserAnswer(event.currentTarget.value);

      if (this.state.questionId < quizQuestions.length) {
          setTimeout(() => this.setNextQuestion(), 300);
        } else {
          setTimeout(() => this.setResults(this.getResults()), 300);
        }
    }

    getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
        const maxAnswerCount = Math.max.apply(null, answersCountValues);

        return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
      }

      setResults (result) {
          if (result.length === 1) {
            this.setState({ result: result[0] });
          } else {
            this.setState({ result: 'Hmm... det går inte att skilja på dem. Rösta med hjärtat.' });
          }
      }

  renderQuiz() {



    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Partifajten h1</h1>
        </header>

        {this.state.result ? this.renderResult() : this.renderQuiz()}
        {/*
        <section>
          <div>
            <a href="#" className="btn btn--red btn--circular"><Icon.ThumbsDown size={40} strokeWidth={1} /></a>
            <a href="#" className="btn btn--circular btn--circular--small"><Icon.CornerUpRight size={18} strokeWidth={1} /></a>
            <a href="#" className="btn btn--circular btn--circular--small"><Icon.Heart size={18} strokeWidth={1} /></a>
            <a href="#" className="btn btn--green btn--circular"><Icon.ThumbsUp size={40} strokeWidth={1} /></a>
          </div>
        </section>
        */}
      </div>
    );
  }
}

export default App;
