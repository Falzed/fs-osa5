import React from 'react'

class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      full: false
    }
  }

  toggleFull = () => {
    this.setState({ full: !this.state.full })
  }
  render = () => {
    const hideWhenFull = { display: this.state.full ? 'none' : '' }
    const showWhenFull = { display: this.state.full ? '' : 'none' }
    const blog = this.props.blog

    const blogStyle = {
      paddingTop: 10,
      paddingLeft: 2,
      border: 'solid',
      borderWidth: 1,
      marginBottom: 5
    }

    return (
      <div>
        <div onClick={this.toggleFull} style={hideWhenFull}>
          {blog.title} {blog.author}
        </div>
        <div onClick={this.toggleFull} style={showWhenFull}>
          <p>{blog.title} {blog.author}</p>
          <p><a href={blog.url}>{blog.url}</a></p>
          <p>{blog.likes} likes<button
            onClick={this.props.handleLike}>like</button></p>
          {<p>added by {blog.user.name}</p>}
          <p>
            <button onClick={this.props.deleteBlog}>
              delete
             </button>
          </p>
        </div>
      </div>
    )
  }
}
export default Blog