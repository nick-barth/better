import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Chat from './chat'
import NoMatch from '../components/NoMatch'

export default class App extends Component {
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Chat}/>
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
