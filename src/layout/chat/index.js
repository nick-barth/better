// Vendor
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Components
import Message from '../../components/message';
import Reply from '../../components/reply';

// CSS
import './style.css'

class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      transitionIn:false
    };
  }

    componentWillReceiveProps(nextProps) {
        if (this.props.posts.length !== nextProps.posts.length) {
            this.setState({transitionIn: true});
            this.fixedWindow.scrollIntoView({ behavior: 'smooth' });
        }
    }

  render() {
    const { transitionIn } = this.state;
    const { posts, users } = this.props;
    const messagesByTime = posts.sort((a, b) => a.ts - b.ts);
    const formattedPosts = messagesByTime.map((post) => {
      return {
        user: users.find(user => user.id === post.user),
        post
      }
    });
    

    return (
      <div className="app__container">
        <div className="chat__container">
          {formattedPosts.map((post,i) => {
            return (
              <Message key={i} user={post.user} post={post.post} transition={(i === posts.length-1 && transitionIn === true)} />
            )
          })}
          <div className="chat__scroll-dummy" ref={(el) => { this.fixedWindow = el; }} />
        </div>
        <div className="reply__container">
          <Reply />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  users: state.users
})

export default connect(
  mapStateToProps
)(Chat)
