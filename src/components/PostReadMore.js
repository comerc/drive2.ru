import React from 'react'
import { Link } from 'react-router'
import BEMHelper from 'react-bem-helper'

const bem = BEMHelper('post-read-more')

const PostReadMore = ({ id }) => (
  <div {...bem('')}>
    <Link to={`/post/${id}/#more`}>Читать дальше →</Link>
  </div>
)

export default PostReadMore
