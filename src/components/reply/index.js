// Vendor
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Actions
import * as postsActions from '../../store/actions/posts.js';


// CSS
import './style.css';

class Reply extends Component {

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

    handleSubmit(e) {
        e.preventDefault();
        const { reply } = this.state;

        if (reply.length === 0){
            return;
        }

        fetch('http://localhost:3001/api/reply', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                reply: reply
            })
        }).catch(res => {
            this.props.postsActions.addReply(reply);
            this.setState({reply: '', charactersLeft: 140});
        });
    }


    render() {
        const { charactersLeft, reply } = this.state;
        return (
            <form className="reply" onSubmit={(e) => this.handleSubmit(e)}> 
                <label className="reply__label">
                    <div className={`reply__characters-left reply__characters-left--${charactersLeft < 25 ? "danger" : "valid"}`}>
                        {charactersLeft}
                    </div>
                    <input type="text" className="reply__input" placeholder="what's going on" value={reply} onChange={(e) => this.handleChange(e.target.value)} />
                    <button className="reply__submit" type="submit">
                        <img alt="send-icon" className="reply__submit-image" src="icons/send.svg" />
                    </button>
                </label>
            </form>
    )}
}


const mapDispatchToProps = dispatch => ({
  postsActions: bindActionCreators(postsActions, dispatch)
})

export default connect(
    null,
    mapDispatchToProps
)(Reply)