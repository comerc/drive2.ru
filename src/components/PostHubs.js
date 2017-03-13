import React from 'react'
import { Link } from 'react-router'
import BEMHelper from 'react-bem-helper'

import { ga } from '../utils'

const bem = BEMHelper('post-hubs')

const PostHubs = ({ hubs }) => (
  <div {...bem('')}>
    <ul>
      {hubs.map(hub =>
        <li key={hub.id}>
          <Link
            to={`/hub/${hub.id}/`}
            title={hub.isSubscribed ? 'Вы подписаны на этот хаб' : 'Вы не подписаны на этот хаб'}
            onClick={ga('hub', 'feed page', hub.name)}
            {...bem('hub', (hub.isSubscribed ? 'subscribed' : ''))}
          >{hub.name}</Link>
          {hub.isProfiled && <span {...bem('profiled-hub')} title="Профильный хаб">*</span>}
        </li>
      )}
    </ul>
  </div>
)

export default PostHubs
