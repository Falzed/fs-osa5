import React from 'react'

const BlogForm = ({handleSubmit, handleBlogFieldChange,
     newTitle, newAuthor, newUrl}) => (
    <div>
        <h2>Add new blog</h2>

        <form onSubmit={handleSubmit}>
          <div>
            title:
            <input
              type="text"
              name="newTitle"
              value={newTitle}
              onChange={handleBlogFieldChange}
            />
          </div>
          <div>
            author:
            <input
              type="text"
              name="newAuthor"
              value={newAuthor}
              onChange={handleBlogFieldChange}
            />
          </div>
          <div>
            url:
            <input
              type="text"
              name="newUrl"
              value={newUrl}
              onChange={handleBlogFieldChange}
            />
          </div>
          <button>create</button>
        </form>
      </div>
)

export default BlogForm