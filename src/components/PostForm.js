import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BEMHelper from 'react-bem-helper'

import { doSubmit, pure } from '../utils'

import { actions as postFormActions } from '../ducks/postForm'

const bem = BEMHelper('post-form')

// TODO можно ли объявить компонент чистым, если в props - router?

const PostForm = ({
  data: { id, flow, title, content, hubs },
  errors, isLoading, loadingError, input, submit, router: { push }
}) => (
  <div {...bem('')}>
    div#id
    <h2>{!!id ? 'Редактирование публикации' : 'Хочу разместить публикацию'}</h2>
    <form onSubmit={doSubmit(submit, push)}>
      <PostFormFlow {...{ flow, input, error: errors.flow }} />
      <PostFormTitle {...{ title, input, error: errors.title }} />
      <PostFormContent {...{ content, input, error: errors.content }} />
      <PostFormHubs {...{ hubs, input, error: errors.hubs }} />
      <PostFormSubmit {...{ isLoading }} />
    </form>
    {!!loadingError && <div>{loadingError}</div>}
  </div>
)

const mapStateToProps = (state) => ({
  data: state.postForm.data,
  errors: state.postForm.errors,
  isLoading: state.postForm.isLoading,
  loadingError: state.postForm.loadingError
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(postFormActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
