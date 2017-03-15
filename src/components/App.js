import React from 'react'
import Helmet from 'react-helmet'
import BEMHelper from 'react-bem-helper'

const bem = BEMHelper('app')

const App = ({ children }) => {
  const title = children.props.route.title
  return (
    <div {...bem('')}>
      <Helmet
        title={title}
        titleTemplate="%s / YOBR"
        defaultTitle="YOBR"
      />
      {children}
      <div {...bem('footer')} />
    </div>
  )
}

export default App
