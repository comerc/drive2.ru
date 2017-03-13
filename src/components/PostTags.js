import React from 'react'
import BEMHelper from 'react-bem-helper'

import { urlencode } from '../utils'

const bem = BEMHelper('post-tags')

const PostTags = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null
  }
  return (
    <div {...bem('')}>
      <ul>
        {tags.map(tag =>
          <li key={tag}>
            <Link
              to={`/search/?q=%5B${urlencode(tag)}%5D&target_type=posts`}
              rel="tag"
            >{tag}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default PostTags
