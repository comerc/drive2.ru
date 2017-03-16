import { createAction, createReducer } from 'redux-act'

const NS = '@@app/'

export const actions = {
  test: createAction(`${NS}TEST`),
}

const initialState = {
  loading: false,
  error: false,
  currentUser: {
    id: 3678,
    nick: 'comerc',
    name: 'comerc',
    avatar: '//habrastorage.org/getpro/habr/avatars/29a/d0a/09c/29ad0a09c3fa9790266c746e43635ca7.jpg',
    specialization: 'Пользователь',
    contacts: [
      { type: 'GitHub', url: 'https://github.com/comerc' }
    ],
    votingCounter: 50,
    karma: 8.0,
    rating: -2.35
  }
}

const reducer = createReducer({
  [actions.test]: (state, loading) => ({...state, loading}),
}, initialState)

export default reducer
