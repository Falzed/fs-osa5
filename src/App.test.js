import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'


describe('<App />', () => {
    let app

    describe('when user is not logged in', () => {
        beforeEach(() => {
            app = mount(<App />)            
        })
        it('renders no blogs if not logged in', () => {
            app.update()
            const blogComponents = app.find(Blog)
            expect(blogComponents.length).toEqual(0)
        })
    })

    describe('when user is  logged in', () => {
        beforeEach(() => {
            const user = {
                username: 'tester',
                token: '1231231214',
                name: 'Teuvo Testaaja'
            }
            localStorage.setItem('loggedBlogListUser', JSON.stringify(user))
            app = mount(<App />)
        })
        it('renders all blogs', () => {
    
            app.update()
            console.log(app.debug())
            const blogComponents = app.find(Blog)
            console.log(blogComponents.debug())
            expect(blogComponents.length).toEqual(blogService.blogs.length)
        })
    })
    

    
    
})