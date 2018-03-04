import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    it('renders title', () => {
        const blog = {
            title: 'Testi title - enzyme',
            author: 'Enzyme',
            likes: 252
        }

        const blogComponent = shallow(<SimpleBlog blog={blog} />)
        const blogDiv = blogComponent.find('.blog')

        expect(blogDiv.text()).toContain(blog.title)
    })
    it('renders author', () => {
        const blog = {
            title: 'Testi title - enzyme',
            author: 'Enzyme',
            likes: 252
        }

        const blogComponent = shallow(<SimpleBlog blog={blog} />)
        const blogDiv = blogComponent.find('.blog')

        expect(blogDiv.text()).toContain(blog.author)
    })
    it('renders likes', () => {
        const blog = {
            title: 'Testi title - enzyme',
            author: 'Enzyme',
            likes: 252
        }

        const blogComponent = shallow(<SimpleBlog blog={blog} />)
        const likesDiv = blogComponent.find('.likes')
        expect(likesDiv.text()).toContain(blog.likes)
    })
    it('clicking the like button twice calls the handler twice', () => {
        const mockHandler = jest.fn()
        
        const blog = {
            title: 'Testi title - enzyme',
            author: 'Enzyme',
            likes: 252
        }

        const blogComponent = shallow(<SimpleBlog blog={blog} 
            onClick = {mockHandler} />)
        const button = blogComponent.find('button')
        button.simulate('click')
        button.simulate('click')
        expect(mockHandler.mock.calls.length).toBe(2)
    })
})