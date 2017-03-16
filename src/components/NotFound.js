import React from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'
import BEMHelper from 'react-bem-helper'

import logo from 'yobr-resources/logo.svg'

const bem = BEMHelper('not-found')

const NotFound = () => (
  <div {...bem('')}>
    <Helmet
      defaultTitle="YOBR"
    />
    <div {...bem('logo')}>
      <Link to="/" title="На главную страницу"><img alt="logo" src={logo} /></Link>
    </div>
    <h1>Страница не найдена</h1>
    <p>Страница устарела, была удалена или не существовала вовсе</p>
    <div {...bem('back')}>
      <Link to="/">Вернуться на главную</Link>
    </div>
  </div>
)

export default NotFound
