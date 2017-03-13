import React from 'react'
import BEMHelper from 'react-bem-helper'

const bem = BEMHelper('post-body')

const PostBody = ({ isTeaser, content, children }) => (
  <div {...bem('', (isTeaser ? 'crop' : ''))}>
    <div {...bem('content', 'html-format')}>{content}</div>
    {children}
  </div>
)

export default PostBody
