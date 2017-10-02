import React, { Component } from 'react';
import './App.css';
import initialState from './initState';

class App extends Component {
  constructor() {
    super();
    this.listFromLanguage = this.listFromLanguage.bind(this);
    this.handleFromLanguage = this.handleFromLanguage.bind(this);
    this.handleToLanguage = this.handleToLanguage.bind(this);
    this.handleTranslation = this.handleTranslation.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleNextWord = this.handleNextWord.bind(this);
    this.handleReset = this.handleReset.bind(this);
    initialState.wordCount = initialState.words.length;
    const initState = Object.assign({},initialState);
    this.state = initState;
  }

  listFromLanguage() {
    const languages = Object.keys(this.state.languages);
    const optionTags = languages.map(function(lang, i) {
      return this.state.fromLanguage === lang ? (
        <option key={i} value={lang} selected="selected">{this.state.languages[lang]}</option>
      ) : (
        <option key={i} value={lang}>{this.state.languages[lang]}</option>
      );
    }, this);
    return optionTags;
  }

  listToLanguage() {
    let languages = Object.keys(this.state.languages);
    // filter out from language
    languages = languages.filter(function(lang){
      return lang !== this.state.fromLanguage;
    }, this);
    const optionTags = languages.map(function(lang, i) {
      console.log(this.state.fromLanguage, lang);
      return this.state.fromLanguage === lang ? (
        <option key={i} value={lang} selected="selected">{this.state.languages[lang]}</option>
      ) : (
        <option key={i} value={lang}>{this.state.languages[lang]}</option>
      );
    }, this);
    return optionTags;
  }

  handleFromLanguage(event) {
    this.setState({
      fromLanguage: event.target.value
    });
  }

  handleToLanguage(event) {
    this.setState({
      toLanguage: event.target.value
    });
  }

  handleTranslation(event) {
    this.setState({
      translation: event.target.value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const attempt = this.state.translation.trim().toLowerCase();
    const translation = this.state.words[this.state.currentWordIndex][this.state.toLanguage].trim().toLowerCase();
    console.log(attempt, translation);
    let isCorrect = attempt === translation ? true : false;
    let numberCorrect = this.state.numberCorrect;
    if(isCorrect) {
      numberCorrect++;
    }

    let showAnswer = true;
    let learnedAll = false;
    if(numberCorrect === this.state.wordCount) {
      showAnswer = false;
      learnedAll = true;
    }

    this.setState({
      isCorrect,
      showAnswer,
      numberCorrect,
      learnedAll
    });
  }

  handleNextWord() {

    let thisWord = ++this.state.currentWordIndex;
    const maxLoops = this.state.wordCount;
    let loopCount = 0;
    while(this.state.words[thisWord].correct) {
      thisWord++;
      loopCount++;
      if(loopCount >= maxLoops) {
        break;
      }
    }


    this.setState({
      currentWordIndex: thisWord,
      showAnswer: false,
      translation: ''
    });
  }

  handleReset() {
    const initState = Object.assign({},initialState);
    this.state = initState;
  }

  render() {
    return (
      <div id="container">
        <h1>Translation Flash Cards</h1>
        <section className="setup">
          <div>
            <label htmlFor="fromlanguage">What language would you like to translate from?
              <select name="fromlanguage" onChange={this.handleFromLanguage}>
                <option value="">Select</option>
                { this.listFromLanguage() }
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="tolanguage">What language would you like to translate to?
              <select name="tolanguage" onChange={this.handleToLanguage}>
                <option value="">Select</option>
                { this.listToLanguage() }
              </select>
            </label>
          </div>
        </section>
        { this.state.fromLanguage !== '' && this.state.toLanguage !== '' &&
        ( <div id="gameboard">
          <section className="gamestatus">
            <p>You are currently translating from <b>{this.state.languages[this.state.fromLanguage]}</b> to <b>{this.state.languages[this.state.toLanguage]}</b>.</p>
            <p>So far, you have gotten {this.state.numberCorrect} of {this.state.wordCount} translations correct.</p>
            <p>You may <button onClick={this.handleReset}>reset</button> the flash cards at any time.</p>
          </section>
          <section className="translationbox">
            <p>Translate from {this.state.languages[this.state.fromLanguage]}: <i>{this.state.words[this.state.currentWordIndex][this.state.fromLanguage]}</i></p>
            <form action="#" method="get" onSubmit={this.handleFormSubmit}>
              <label htmlFor="translation">{this.state.languages[this.state.toLanguage]} Translation:</label>
              <input
                type="text"
                name="translation"
                id="translation"
                value={this.state.translation}
                onChange={this.handleTranslation}
              />
              <input type="submit" name="submit" value="submit" />
            </form>
            { this.state.showAnswer === true && this.state.isCorrect === true && (
              <section className="feedback">
                <p><span className="correct">Correct!</span> The correct translation is <i>{this.state.words[this.state.currentWordIndex][this.state.toLanguage]}</i>. <button onClick={this.handleNextWord}>Next</button></p>
              </section>
              )
            }
            { this.state.showAnswer === true && this.state.isCorrect === false && (
              <section className="feedback">
                <p><span className="incorrect">Incorrect:</span> the correct translation is <i>{this.state.words[this.state.currentWordIndex][this.state.toLanguage]}</i>. <button onClick={this.handleNextWord}>Next</button></p>
              </section>
              )
            }
            { this.state.learnedAll && (
              <section className="feedback">
                <p><span className="learned">Congratulations!</span> You have learned all of the translations. <button onClick={this.handleReset}>Reset</button></p>
              </section>
              )
            }

            </section>
        </div> )
      }
      </div>
    );
  }
}

export default App;
