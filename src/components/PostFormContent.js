import React from 'react'
import BEMHelper from 'react-bem-helper'

import { doInput, pure } from '../utils'

const bem = BEMHelper('post-form')

const PostFormContent = ({ content, input, error }) => (
  <div {...bem('content')}>
    <label>
      <div {...bem('label')}>Текст:</div>
      <textarea onInput={doInput(input, 'content')} name="content" defaultValue={content} />
    </label>
    {!!error && <div {...bem('error')}>{error}</div>}
  </div>
)

export default pure(PostFormContent)
