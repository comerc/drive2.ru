import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import BEMHelper from 'react-bem-helper'

import { pure } from '../utils'

import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostTags from './PostTags'
// import PostInfoPanel from './PostInfoPanel'

const bem = BEMHelper('post')

const Post = ({ id, published, flow, hubs, title, author, company, tags, content, viewsCount, favoritesCount }) => (
  <div {...bem('', 'total')}>
    <PostHeader {...{ id, published, flow, hubs, title }} />
    <PostBody {...{ content }}>
      <PostTags {...{ tags }} />
    </PostBody>
    <div {...bem('footer')}>
      {/* <PostInfoPanel isTeaser={false} {...{ id, author, viewsCount, favoritesCount }} /> */}
    </div>
  </div>
)

const getPostId = (state, props) =>
  parseInt(props.params.postId, 10)

const getPosts = (state) =>
  state.posts

const getPost = createSelector(
  [getPosts, getPostId],
  (posts, postId) =>
    posts.find(element =>
      element.id === postId)
)

const mapStateToProps = (state, ownProps) => {
  const post = getPost(state, ownProps)
  return {...post}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(pure(Post))
