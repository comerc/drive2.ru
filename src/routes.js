import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from './components/App'
import NotFound from './components/NotFound'
import Post from './components/Post'
import PostForm from './components/PostForm'
import PostTeaserList from './components/PostTeaserList'

export default (
  <Route path="/">
    <Route component={App}>
      <IndexRoute component={PostTeaserList} />
      {/* <Route path="flows" component={PostTeaserList}>
        <Route path=":selectedFlow" />
      </Route> */}
      <Redirect from="post" to="/404/" />
      <Route path="post">
        <Route path="add" component={PostForm} title="Новая публикация" />
        <Route path=":postId" component={Post}>
          <Route path="edit" component={PostForm} title="Редактирование публикации" />
        </Route>
      </Route>
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
)

// TODO при переходе на страницу поста по хештегам #habracut или #comments, происходит редирект с вырезанием этого хештега (чтобы дальше поделиться правильным URL)

// TODO react-router/examples/huge-apps - Partial App Loading

// TODO /help/... > page-header__title > `Помощь -> ${title}` со ссылкой

// TODO /topic/add/ > page-header__title > "Хочу разместить публикацию"

// TODO настроить редирект url без оконечного / на уровне насторек сервера nginx

// TODO редирект, если блог компании: `/post/${id}/` > `/company/${nick}/blog/${id}/`
