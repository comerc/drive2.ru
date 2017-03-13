import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BEMHelper from 'react-bem-helper'

import { actions as editPostActions } from '../ducks/editPost'

const TITLE_MAX_LENGTH = 120

const TopicAdd = ({ post: { title }, inputTitle, submit, router: { push } }) => {

  let textareaContent = null

  const doSubmit = (event) => {
    event.preventDefault()
    submit({ title, content: textareaContent.value })
    push('/')
  }

  const doInputTitle = (event) => {
    inputTitle(event.target.value)
  }

  return (
    <div className="post-form">
      <form onSubmit={doSubmit}>
        <div>
          <label><div>Заголовок: {TITLE_MAX_LENGTH - title.length}</div>
            <input onInput={doInputTitle} name="title" defaultValue={title} maxLength={TITLE_MAX_LENGTH} />
          </label>
        </div>
        <div>
          <label><div>Текст:</div>
            <textarea ref={ ref => { textareaContent = ref } } name="content"></textarea>
          </label>
        </div>
        <button>Отправить</button>
      </form>

    </div>
  )
}

const mapStateToProps = (state) => ({
  post: state.editPost
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(editPostActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(pure(TopicAdd))
