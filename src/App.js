import React from 'react'
import Blog from './components/Blog'
import Notification from './components/Notification'
import blogService from './services/blogs'
import loginService from './services/login'
import Togglable from './components/Togglable'
import LoginForm from './components/LoginForm'
import BlogForm from './components/BlogForm'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      user: null,
      username: '',
      password: '',
      newTitle: '',
      newAuthor: '',
      newUrl: '',
      message: ''
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedBlogListUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({ user })
      blogService.setToken(user.token)
    }
  }

  login = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
      window.localStorage.setItem('loggedBlogListUser', JSON.stringify(user))
      blogService.setToken(user.token)
      this.setState({
        username: '',
        password: '',
        user: user
      })
    } catch (e) {
      this.setState({ message: 'wrong username or password' })
      setTimeout(() => {
        this.setState({ message: null })
      }, 5000)
    }
  }

  logout = () => {
    window.localStorage.removeItem('loggedBlogListUser')
  }

  handleLoginFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  handleBlogFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addBlog = (event) => {
    event.preventDefault()
    this.blogForm.toggleVisibility()
    const blogObject = {
      title: this.state.newTitle,
      author: this.state.newAuthor,
      url: this.state.newUrl
    }
    blogService
      .create(blogObject)
      .then(newBlog => {
        this.setState({
          blogs: this.state.blogs.concat(newBlog),
          newTitle: '',
          newAuthor: '',
          newUrl: ''
        })
        this.setState({
          message: `added blog '${newBlog.title}' by 
        ${newBlog.author}`
        })
        setTimeout(() => {
          this.setState({ message: null })
        }, 5000)
      })
  }

  handleLike = (id) => {
    return () => {
      const oldBlog = this.state.blogs.find(blog => blog._id === id)
      const likedBlog = { ...oldBlog, likes: oldBlog.likes + 1 }
      console.log(id)
      console.log(likedBlog)
      blogService.update(id, likedBlog)
        .then(likedBlog => {
          this.setState({
            blogs: this.state.blogs
              .map(blog => blog._id !== id ? blog : likedBlog),
            message: `Liked ${likedBlog.title}`
          })
        })
        .catch(error => {
          console.log(error)
          this.setState({ message: 'error in liking blog' })
        })
      setTimeout(() => {
        this.setState({ message: null })
      }, 5000)
    }
  }

  deleteBlog = (id) => {
    return () => {
      console.log(`delete`)
      const blogToDelete = this.state.blogs.find(blog => blog._id === id)
      const confirmed = window.confirm(`Remove ${blogToDelete.title}?`)
      if (!confirmed) { return }
      blogService
        .remove(id)
        .then(response => {
          this.setState({
            blogs: this.state.blogs.filter(blog => blog._id !== id),
            message: `${blogToDelete.title} removed`
          })
        })
        .catch(error => {
          this.setState({
            message: `Error in deleting 
        ${blogToDelete.title}`
          })
        })
      setTimeout(() => {
        this.setState({ message: null })
      }, 5000)
    }
  }

  render() {

    const loginForm = () => (
      <Togglable buttonLabel="login">
        <LoginForm
          visible={this.state.visible}
          username={this.state.username}
          password={this.state.password}
          handleLoginFieldChange={this.handleLoginFieldChange}
          handleSubmit={this.login}
        />
      </Togglable>
    )

    const blogForm = () => (
      <Togglable buttonLabel="create"
        ref={component => this.blogForm = component}>
        <BlogForm
          visible={this.state.visible}
          newTitle={this.state.newTitle}
          newAuthor={this.state.newAuthor}
          newUrl={this.state.newUrl}
          handleBlogFieldChange={this.handleBlogFieldChange}
          handleSubmit={this.addBlog}
        />
      </Togglable>
    )

    const blogiListaus = () => (
      <div>
        {this.state.blogs
          .sort((firstBlog, secondBlog) => secondBlog.likes - firstBlog.likes)
          .map(blog =>
            <Blog key={blog._id} blog={blog}
              handleLike={this.handleLike(blog._id)}
              deleteBlog={this.deleteBlog(blog._id)} />
          )}
      </div>
    )

    return (
      <div>
        <Notification message={this.state.message} />
        <h2>blogs</h2>
        {this.state.user === null ? loginForm() :
          <div>
            <p>
              {this.state.user.name} logged in
              <button onClick={this.logout}>log out</button>
            </p>
            <h3>Create new blog</h3>
            {blogForm()}
            {blogiListaus()}
          </div>
        }

      </div>
    );
  }
}

export default App;