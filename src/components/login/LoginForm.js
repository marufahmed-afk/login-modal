import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/login';

const LoginForm = ({ toggleModal }) => {

    const [formState, setFormState] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleModal();
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: [e.target.value] });
    };

    return (
        <div className="card">
            <h3>Login</h3>
            <a href="#" className="close" onClick={() => toggleModal()}></a>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={email} onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={password} onChange={handleChange} />

                <button className="submit-btn btn" >Login</button>
            </form>
        </div>
    );
};

export default connect(null, { toggleModal })(LoginForm);
