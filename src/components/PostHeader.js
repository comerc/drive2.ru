import React from 'react'
import BEMHelper from 'react-bem-helper'

import PostTitle from './PostTitle'
import PostHubs from './PostHubs'

import { formatDateTime } from '../utils'

// TODO кнопка редактирования для собственных статей

const bem = BEMHelper('post-header')

const PostHeader = ({ isTeaser, published, flow, id, title, hubs }) => (
  <div {...bem('')}>
    <span {...bem('published')}>{formatDateTime(published)}</span>
    <PostTitle {...{ isTeaser, flow, id, title }} />
    <PostHubs {...{ hubs }} />
  </div>
)

export default PostHeader
