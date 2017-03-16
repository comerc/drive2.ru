import React from 'react'
import BEMHelper from 'react-bem-helper'

import { pure } from '../utils'

const bem = BEMHelper('post-form')

const PostFormFlow = ({ flow, input, error }) => (
  <div {...bem('flow')}>
    <label>
      <div>Поток:</div>
    </label>
  </div>
)

export default pure(PostFormFlow)
