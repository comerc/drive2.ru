import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { actions } from '../ducks/feedback'

const Input = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <label>
      <div>{label}</div>
      <input {...input} {...{placeholder}} type={type}/>
      {touched && error && <span>{error}</span>}
    </label>
  </div>
)

const Textarea = ({ input, label, placeholder, meta: { touched, error } }) => (
  <div>
    <label>
      <div>{label}</div>
      <textarea {...input} {...{placeholder}} />
      {touched && error && <span>{error}</span>}
    </label>
  </div>
)

const Feedback = ({ handleSubmit, error }) => (
  <div>
    <h2>Обратная связь</h2>
    <form onSubmit={handleSubmit}>
      <Field name="email" component={Input} type="email" label="Email" placeholder="Ваш email" />
      <Field name="message" component={Textarea} label="Message" placeholder="Ваше сообщение" />
      <button type="submit">Submit</button>
      {error && <div>{error}</div>}
    </form>
  </div>
)

export default reduxForm({
  form: 'feedback',
  onSubmit: (values, dispatch) => dispatch(actions.submit(values)),
})(Feedback)
