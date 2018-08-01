// Vendor
import React, { Component } from 'react';

// Utils
import { convertToMessageTimestamp } from '../../utils/datetime.js';

// CSS
import './style.css';

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
                <div className="message__image" style={{backgroundImage: `url(imgs/${user.username}.jpg)`}} />
                <div className="message__message-container">
                    <div className="message__info">
                        <div className="message__realname">
                            {user.real_name}
                        </div>
                        -
                        <div className="message__username">
                            @{user.username}
                        </div>
                        <div className="message__timestamp">
                            {convertToMessageTimestamp(post.ts)}
                        </div>
                    </div>
                    <div className="message__message">
                        {post.message}
                    </div>
                </div>
            </div>
    )}
}
