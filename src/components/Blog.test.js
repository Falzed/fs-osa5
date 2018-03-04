import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe.only('<Blog />', () => {
    it('renders title', () => {
        const blog = {
            title: 'Testi title - enzyme',
            author: 'Enzyme',
            likes: 252,
            user: null
        }

        const blogComponent = shallow(<Blog blog={blog} />)
        const blogDiv = blogComponent.find('.succint')

        expect(blogDiv.text()).toContain(blog.title)
    })
    it('renders author', () => {
        const blog = {
            title: 'Testi title - enzyme',
            author: 'Enzyme',
            likes: 252,
            user: null
        }

        const blogComponent = shallow(<Blog blog={blog} />)
        const blogDiv = blogComponent.find('.succint')
        blogDiv.simulate('click')

        expect(blogDiv.text()).toContain(blog.author)
    })
    it('renders likes', () => {
        const blog = {
            title: 'Testi title - enzyme',
            author: 'Enzyme',
            likes: 252,
            user: null
        }

        const blogComponent = shallow(<Blog blog={blog} />)
        const blogDiv = blogComponent.find('.succint')
        blogDiv.simulate('click')
        const likesDiv = blogComponent.find('.full')
        expect(likesDiv.text()).toContain(blog.likes)
    })

    it('renders url', () => {
        const blog = {
            title: 'Testi title - enzyme',
            author: 'Enzyme',
            likes: 252,
            url: 'google.com',
            user: null
        }

        const blogComponent = shallow(<Blog blog={blog} />)
        const blogDiv = blogComponent.find('.succint')
        blogDiv.simulate('click')
        const likesDiv = blogComponent.find('.full')
        expect(likesDiv.text()).toContain(blog.url)
    })
    /* it('clicking the like button twice calls the handler twice', () => {
        const mockHandler = jest.fn()

        const blog = {
            title: 'Testi title - enzyme',
            author: 'Enzyme',
            likes: 252,
            user: null
        }

        const blogComponent = shallow(<Blog blog={blog}
            onClick={mockHandler} />)
        const blogDiv = blogComponent.find('.succint')
        blogDiv.simulate('click')

        const button = blogComponent.find('.likeButton')
        console.log(button.debug())
        button.simulate('click')
        button.simulate('click')
        expect(mockHandler.mock.calls.length).toBe(2)
    }) */
})