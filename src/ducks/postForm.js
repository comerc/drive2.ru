import { createAction, createReducer } from 'redux-act'
// import { actions as appActions } from './app'

const NS = '@@post-form/'

export const actions = {
  input: createAction(`${NS}INPUT`),
  setErrors: createAction(`${NS}SET_ERRORS`),
  startLoading: createAction(`${NS}START_LOADING`),
  finishLoading: createAction(`${NS}FINISH_LOADING`),
  resetForm: createAction(`${NS}RESET_FORM`),
  fillForm: createAction(`${NS}FILL_FORM`),
  read: id => dispatch => {
    dispatch(actions.startLoading())
    // dispatch(actions.fillForm({data}))
    dispatch(actions.finishLoading())
  },
  submit: (push) => dispatch => {
    dispatch(actions.startLoading())
    setTimeout(() => {
      // dispatch(appActions.test(Math.random()))
      dispatch(actions.finishLoading('ошибка'))
      push('/')
    }, 1000)
  },
}

const initialState = {
  data: {
    id: '',
    flow: '',
    title: '',
    content: '',
    hubs: []
  },
  errors: {},
  isLoading: false,
  loadingError: ''
}

const reducer = createReducer({
  [actions.resetForm]: () => ({...initialState}),
  [actions.fillForm]: (state, data) => ({...state, data}),
  [actions.input]: (state, { field, value }) =>
    ({...state, data: {...state.data, [field]: value}}),
  [actions.setErrors]: (state, errors) => ({...state, errors}),
  [actions.startLoading]: (state) =>
    ({...state, isLoading: true}),
  [actions.finishLoading]: (state, loadingError = '') =>
    ({...state, isLoading: false, loadingError})
}, initialState)

export default reducer
