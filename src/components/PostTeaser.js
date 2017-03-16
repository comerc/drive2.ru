import React from 'react'
import BEMHelper from 'react-bem-helper'

import { pure } from '../utils'

import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostReadMore from './PostReadMore'
// import PostInfoPanel from './PostInfoPanel'

const bem = BEMHelper('post')

const PostTeaser = ({ id, published, flow, hubs, title, content, author, viewsCount, favoritesCount }) => (
  <div {...bem('', 'teaser')}>
    <PostHeader isTeaser {...{ id, published, flow, hubs, title }} />
    <PostBody isTeaser {...{ content }}>
      <PostReadMore {...{ id }} />
    </PostBody>
    <div {...bem('footer')}>
      {/* <PostInfoPanel isTeaser={true} {...{ id, author, viewsCount, favoritesCount }} /> */}
    </div>
  </div>
)

export default pure(PostTeaser)
