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
            isActiveUser: props.user.active_user ? true : false,
            fadeIn: false
        };

        props.transition ? setTimeout(() => this.fireTransition(), 150) : null;

    }

    fireTransition() {
        this.setState({
            fadeIn:true
        });
    }

    render() {
        const { isActiveUser, fadeIn } = this.state;
        const { user, post, transition } = this.props;

        const portrait = <div className="message__image" style={{backgroundImage: `url(imgs/${user.username}.jpg)`}} />;

        return (
            <div className={`message__container ${!transition ? 'message__container--old' : null } ${(transition && fadeIn) ? 'message__container--fadeIn' : null}`}>
                {!isActiveUser ? portrait : null}
                <div className={`message__message-container message__message-container--${isActiveUser ? 'activeUser' : 'other'}`}>
                    <div className={`message__info message__info--${isActiveUser ? 'activeUser' : 'other'}`}>
                        {!isActiveUser ? (
                            <div style={{display: 'inline-block' }}>
                                <div className="message__realname">
                                    {user.real_name}
                                </div>
                                -
                                <div className="message__username">
                                    @{user.username}
                                </div> 
                            </div>
                        ) : null}
                        <div className={`message__timestamp message__timestamp--${isActiveUser ? 'activeUser' : 'other'}`}>
                            {convertToMessageTimestamp(post.ts)}
                        </div>
                    </div>
                    <div className="message__card">
                        <div className={`message__card-front message__card-front--${isActiveUser ? 'activeUser' : 'other'}`}>
                            {post.message}
                        </div>
                        <div className={`message__card-back message__message--${isActiveUser ? 'activeUser' : 'other'}`}>
                            <img className="message__calender-icon" src="icons/calendar-icon.svg" alt="calender icon"/>
                            Active since {convertToMessageTimestamp(post.ts)}
                        </div>
                    </div>
                </div>
                {isActiveUser ? portrait : null}
            </div>
    )}
}
