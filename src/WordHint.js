import React, { Component } from 'react';

class WordHint extends Component {
    render() {
        return(
            <div className="word-hint">
                <div className="word-hint-title">Hint:</div>
                <br />
                <div className="word-hint-text">{this.props.hint}</div>
            </div>
        );
    }
}

export default WordHint;
