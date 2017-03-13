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
        titleTemplate="%s / DRIVE2.RU"
        defaultTitle="DRIVE2.RU"
      />
      {children}
      <div {...bem('footer')} />
    </div>
  )
}

export default App
