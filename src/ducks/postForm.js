import { createAction, createReducer } from 'redux-act'

const NS = '@@postForm/'

export const actions = {
  input: createAction(`${NS}INPUT`),
  setErrors: createAction(`${NS}SET_ERRORS`),
  startLoading: createAction(`${NS}START_LOADING`),
  finishLoading: createAction(`${NS}FINISH_LOADING`),
  resetForm: createAction(`${NS}RESET_FORM`),
  fillForm: createAction(`${NS}FILL_FORM`),
  read: id => dispatch => {
    dispatch(startLoading())
    // dispatch(actions.fillForm({data}))
    dispatch(finishLoading())
  },
  submit: (event, push) => dispatch => {
    event.preventDefault()
    dispatch(startLoading())
    // dispatch(appActions.notify('Сохранено'))
    // push('/')
    dispatch(finishLoading())
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
