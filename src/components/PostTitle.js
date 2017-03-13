import React from 'react'
import { Link } from 'react-router'
import BEMHelper from 'react-bem-helper'

import { ga } from '../utils'

const bem = BEMHelper('post-title')

const PostTitle = ({ isTeaser, flow, id, title }) => (
  <h2 {...bem('')}>
    {isTeaser ?
      <div>
        <Link to={`/flows/${flow.id}/`} {...bem('flow')} onClick={ga('flow', 'feed page', flow.name)}>{flow.name}</Link>
        <span  {...bem('title-arrow')}> → </span>
        <Link to={`/post/${id}/`} {...bem('link')}>{title}</Link>
      </div>
    :
      {title}
    }
  </h2>
)

export default PostTitle
