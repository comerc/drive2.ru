import React from 'react'
import memoize from 'lodash.memoize'

export const doInput = memoize((action, field) => (event) => {
  action({ field, value: event.target.value })
})

export const doSubmit = memoize((submit, push) => (event) => {
  submit(event, push)
})

export const ga = memoize((eventCategory, eventAction, eventLabel) => () => {
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
  return 'dummy'
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
