import React from 'react'
import memoize from 'lodash.memoize'

export const doInput = (input) => (event) => {
  input({ field: event.target.name, value: event.target.value })
}

export const doSubmit = (isLoading, submit, push) => (event) => {
  event.preventDefault()
  if (!isLoading) {
    submit(push)
  }
}

export const ga = (eventCategory, eventAction, eventLabel) => memoize(() => {
  if (typeof window.ga === 'function') {
    window.ga('send', 'event', eventCategory, eventAction, eventLabel)
  }
})

export const plural = (value, form1, form2, form3) => {
  // TODO реализовать plural
  return value
}

export const urlencode = (s) => {
  // TODO реализовать urlencode
  return s
}

export const formatDateTime = (dateTime) => {
  // TODO реализовать formatDateTime
  return dateTime + ''
}

export const pure = (func) => {
  class PureComponentWrap extends React.PureComponent {
    render() {
      return func(this.props, this.context)
    }
  }
  return PureComponentWrap
}
