import React from 'react'
import BEMHelper from 'react-bem-helper'

import { pure } from '../utils'

const bem = BEMHelper('post-form')

const PostFormHubs = ({ hubs, input, error }) => (
  <div {...bem('hubs')}>
    <label>
      <div>Хабы:</div>
    </label>
  </div>
)

export default pure(PostFormHubs)
