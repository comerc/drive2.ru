import React from 'react'
import BEMHelper from 'react-bem-helper'

import { doInput, pure } from '../utils'

const bem = BEMHelper('post-form')

const TITLE_MAX_LENGTH = 120

const PostFormTitle = ({ title, input, error }) => (
  <div {...bem('title')}>
    <label>
      <div {...bem('label')}>Заголовок: {TITLE_MAX_LENGTH - title.length}</div>
      <input
        onInput={doInput(input)}
        name="title"
        defaultValue={title}
        maxLength={TITLE_MAX_LENGTH}
      />
    </label>
    {!!error && <div {...bem('error')}>{error}</div>}
  </div>
)

export default pure(PostFormTitle)
