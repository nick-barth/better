import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../../store/actions/user'
import './style.css'

class Chat extends Component {

  render() {
    console.log(this.props);
    return (
      <div className='bold'>
        wow
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat)
