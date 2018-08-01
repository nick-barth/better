// Vendor
import React, { Component } from 'react';

// CSS
import './style.css';

export default class Reply extends Component {

    constructor(props) {
        super(props);

        this.state = {
            reply: '',
            charactersLeft: 140
        };

    }

    handleChange(newReply){
        if (newReply.length >= 141) {
            return;
        }

        const charsRemaining = 140 - newReply.length;
        this.setState({
            charactersLeft: charsRemaining,
            reply: newReply
        });

    }


    render() {
        const { charactersLeft, reply } = this.state;
        return (
            <div className="reply"> 
                <label className="reply__label">
                    <div className={`reply__characters-left reply__characters-left--${charactersLeft < 25 ? "danger" : "valid"}`}>
                        {charactersLeft}
                    </div>
                    <input type="text" className="reply__input" placeholder="what's going on" value={reply} onChange={(e) => this.handleChange(e.target.value)} />
                    <div className="reply__submit">
                        <img alt="send-icon" className="reply__submit-image" src="icons/send.svg" />
                    </div>
                </label>
            </div>
    )}
}
