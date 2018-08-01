import React, { Component } from 'react'

import './style.css'

export default class Message extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }

    }

    render() {
        const { user, post } = this.props;

        return (
            <div className="message__container">
                <div className="message__image" style={{backgroundImage: `url(imgs/${user.username}.jpg)`}}>
                </div>
                <div className="message__info">
                    <div className="message__username">
                    </div>
                <div className="message__realname">
                </div>
                <div className="message__timestamp">
                </div>
            </div>
        </div>
    )}
}
