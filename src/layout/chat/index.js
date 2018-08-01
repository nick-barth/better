// Vendor
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Components
import Message from '../../components/message';
import Reply from '../../components/reply';

// Actions
import * as userActions from '../../store/actions/user'

// CSS
import './style.css'

class Chat extends Component {

  render() {
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
          {formattedPosts.map(post => {
            return (
              <Message key={post.post.id} user={post.user} post={post.post} />
            )
          })}
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

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
