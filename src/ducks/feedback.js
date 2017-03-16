// import { createAction, createReducer } from 'redux-act'
import { SubmissionError } from 'redux-form'

// const NS = '@@feedback/'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const isEmail = value =>
  value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)

export const actions = {
  submit: (values) => dispatch => {
    return sleep(1000) // simulate server latency
      .then(() => {
        if (!isEmail(values.email)) {
          throw new SubmissionError({ email: 'Invalid email address', _error: 'Submit feedback failed!' })
        } else {
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
        }
      })
  }
}

// const initialState = {}
//
// const reducer = createReducer({}, initialState)
//
// export default reducer
