import React from 'react'
import BEMHelper from 'react-bem-helper'

import { urlencode } from '../utils'

const bem = BEMHelper('post-tags')

const PostTags = ({ id }) => {
  !!tags && tags.length > 0 &&
    <div {...bem('')}>
      <ul>
        {tags.map(tag => <li><Link to={`/search/?q=%5B${urlencode(tag)}%5D&target_type=posts`} rel="tag">{tag}</Link></li>)}
      </ul>
    </div>
}

export default PostTags
