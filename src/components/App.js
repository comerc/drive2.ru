import React from 'react'
import Helmet from 'react-helmet'
import BEMHelper from 'react-bem-helper'

import AppFooter from './AppFooter'

const bem = BEMHelper('app')

// App - stateless component и не подключен к Redux через connect(),
// тогда изменения в store не приведут к перерисовке,
// и вложенный (в роутинге) компонент не нужно объявлять, как PureComponent

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
      <AppFooter />
    </div>
  )
}

export default App
