import React from 'react';

const Login = () => {
  return (
    <div className="card container">
      <form className="login-form">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" />

        <label htmlFor="password">Password</label>
        <input type="text" name="password" />

        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
