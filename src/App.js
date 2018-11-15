import React, { Component } from 'react';
import './App.css';
import NestorTerminal from './lib/NestorTerminal';

import Icon from '@mdi/react';
import { mdiEmail, mdiFileDocument, mdiGithubCircle, mdiLinkedinBox } from '@mdi/js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Bienvenue</h1>
          <div className="social">
            <a href="mailto:bertrand.daure@laposte.net">
              <Icon className="social-icon" path={mdiEmail}
                size={1.5}
                color="white" />
            </a>
            <a href="https://cv.bertranddaure.fr" target="_blank" rel="noopener noreferrer">
              <Icon className="social-icon" path={mdiFileDocument}
                size={1.5}
                color="white" />
            </a>
            <a href="https://github.com/bertrandda" target="_blank" rel="noopener noreferrer">
              <Icon className="social-icon" path={mdiGithubCircle}
                size={1.5}
                color="white" />
            </a>
            <a href="https://www.linkedin.com/in/bertrand-d-aure-0386a0138" target="_blank" rel="noopener noreferrer">
              <Icon className="social-icon" path={mdiLinkedinBox}
                size={1.5}
                color="white" />
            </a>
          </div>
        </header>

        <div className="nestor-terminal" >
          <NestorTerminal />
        </div>

        <footer>
          <div>© 2018 - Bertrand d'Aure</div>
        </footer>
      </div>
    );
  }
}

export default App;
