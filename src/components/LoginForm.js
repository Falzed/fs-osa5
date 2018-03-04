import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ handleSubmit, handleLoginFieldChange,
    username, password }) => (
        <div>
            <h2>Log in to application</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    username:
                <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={handleLoginFieldChange}
                    />
                </div>
                <div>
                    password:
                <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleLoginFieldChange}
                    />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )

LoginForm.PropTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleLoginFieldChange: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
}

export default LoginForm