import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="container">
        <h1>Translation Flash Cards</h1>
        <section className="setup">
          <div>
            <label htmlFor="fromlanguage">What language would you like to translate from?
              <select name="fromlanguage">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="sp">Spanish</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="tolanguage">What language would you like to translate to?
              <select name="tolanguage">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="sp">Spanish</option>
              </select>
            </label>
          </div>
        </section>
        <section className="gamestatus">
          <p>You are currently translating from <b>English</b> to <b>French</b>.</p>
          <p>So far, you have gotten 0 of 10 translations correct.</p>
          <p>You may <button>reset</button> the flash cards at any time.</p>
        </section>
        <section className="translationbox">
          <p>Translate from English: <i>cat</i></p>
          <form action="#" method="get">
            <label htmlFor="translation">French Translation:</label>
            <input type="text" name="translation" id="translation" />
            <input type="submit" name="submit" value="submit" />
          </form>
          <section className="feedback">
            <p><span className="incorrect">Incorrect:</span> the correct translation is <i>chat</i>. <button>Next</button></p>
          </section>
        </section>

      </div>
    );
  }
}

export default App;
