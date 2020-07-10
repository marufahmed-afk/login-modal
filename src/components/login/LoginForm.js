import React from 'react'

const LoginForm = () => {
    return (
        <div className="card">
            <h3>Login</h3>
            <form className="login-form">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />

                <label htmlFor="password">Password</label>
                <input type="text" name="password" />

                <button className="submit-btn btn">Login</button>
            </form>
        </div>
    )
}

export default LoginForm
