import React, { Component } from 'react';
import { startNestor } from './api';
import './NestorTerminal.css';

export default class NestorTerminal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            input: '',
            inputTmp: '',
            requestBot: startNestor(replies => this.addMessage(replies))
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.initInput = this.initInput.bind(this);
    }

    componentDidMount() {
        this.userInput.focus();
    }
    
    componentDidUpdate() {
        this.scrollToBottom();
    }
    
    addMessage(replies) {
        replies.forEach(reply => {
            this.setState(prevState => ({
                messages: [...prevState.messages, reply]
            }))
        });
    }

    handleInputChange(event) {
        this.setState({ inputTmp: event.currentTarget.textContent });
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.addMessage([{ type: 'command', content: this.state.inputTmp }])
            this.state.requestBot(this.state.inputTmp);
            this.setState({ input: ' ' });
            this.initInput();
        }
    }

    initInput() {
        if (this.state.input.length === 0 || this.state.input === ' ')
            this.setState({ input: '\u0000' });
    }

    scrollToBottom = () => {
        this.userInput.scrollIntoView({ behavior: "smooth" });
    }

    render() {
        let oldMessages = this.state.messages.map((message, i) => {
            if (message.type === 'command') {
                return <p className="command" key={i}>{message.content}</p>;
            } else if (message.type === 'text') {
                return <p className="response" key={i}>{message.content}</p>;
            } else if (message.type === 'picture') {
                return <div className="response-image" key={i}><img alt="" src={message.content} /></div>;
            } else {
                return '';
            }
        })

        return (
            <div id="terminal">
                <div id="history">{oldMessages}</div>
                <p id="input" contentEditable="true" suppressContentEditableWarning
                    onInput={this.handleInputChange} onKeyPress={this.handleKeyPress}
                    onFocus={this.initInput} ref={(userInput) => { this.userInput = userInput; }}>
                    {this.state.input}
                </p>
            </div>
        );
    }
}

