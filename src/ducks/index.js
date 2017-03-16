import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import app from './app'
import flows from './flows'
import posts from './posts'
import postForm from './postForm'

export default combineReducers({
  routing: routerReducer,
  form,
  app,
  flows,
  posts,
  postForm
})
