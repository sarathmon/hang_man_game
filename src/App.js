import React, { Component } from 'react';
import './App.css';
import GameBoard from './GameBoard';
import gameData from './Data';

let wordData;

class App extends Component {
    constructor() {
        super();
        wordData=[...gameData];
        this.state = {categories: wordData, chosenCategory: "", chosenWords : [], numOfChosenWords: 5, lives: 10}
    }

    chooseWordsForGame = (words) => {
        let wordsForGame = [];
        for (let i = 0; i < this.state.numOfChosenWords; i++) {
            let randomNum = Math.floor(Math.random() * (words.length));
            wordsForGame.push(words.splice(randomNum, 1)[0]);
        }
        return wordsForGame;
    }
    
    startGame = () => {
        let words = this.state.categories[0].words;
        let chosenWords = this.chooseWordsForGame(words);
        this.setState({chosenCategory: "Deck", chosenWords: chosenWords});
    }

    restartGame = () => {
        window.location.reload();
    }

    render() {
        return (
            <div className="App">
                <h1 className="App-header">RETAIL HANGMAN</h1>
                <button type="button" onClick={this.startGame}>START GAME</button>
                <button type="button" className="button1" onClick={this.restartGame}>RESTART GAME</button>
                {(this.state.chosenWords && this.state.chosenCategory === "") ?
                (<div>
                    <div className="Category">GUESS {this.state.numOfChosenWords} WORDS
                        IN {this.state.lives} ATTEMPTS<br/>SHOP YOUR PRIZE HOME. <br/>Have fun !!!</div>
                </div>) :
                (<div>
                    <GameBoard words={this.state.chosenWords} lives={this.state.lives} restartGame={this.restartGame}/>
                </div>)}
            </div>
        );
    }
}

export default App;
