import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {



  vote = (id) => () => {
    this.props.store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  addAnecdote = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'NEW_ANECDOTE',
      data: event.target.anecdote.value
    })
  }

  render() {
    const anecdotes = this.props.store.getState()

    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((firstAnecdote, secondAnecdote) =>
          secondAnecdote.votes - firstAnecdote.votes
        ).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote.id)}>vote</button>
            </div>
          </div>
          )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input type="text" name="anecdote" /></div>
          <button>create</button>
        </form>
      </div>
    )
  }
}

export default App