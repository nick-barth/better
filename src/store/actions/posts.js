import { ADD_REPLY } from '../types/posts'

export function addReply(reply){
  return {
    type: ADD_REPLY
  , payload: reply
  }
}

