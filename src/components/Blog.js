import React from 'react'
import PropTypes from 'prop-types'

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
    const hideWhenOtherAdder =
      { display: blog.user._id === this.props.user._id ? '' : 'none'}

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
          <p style={hideWhenOtherAdder}>
            <button onClick={this.props.deleteBlog}>
              delete
             </button>
          </p>
        </div>
      </div>
    )
  }
}

Blog.PropTypes = {
  blog: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  deleteBlog: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired
}
export default Blog