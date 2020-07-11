import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/login';

const LoginForm = ({ toggleModal }) => {

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, []);

    const [formState, setFormState] = useState({
        username: '',
        password: ''
    });

    const node = useRef();


    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        toggleModal();
    };

    const { username, password } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        toggleModal();
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: [e.target.value] });
    };

    return (
        <div className="card" ref={node}>
            <h3>Login</h3>
            <a className="close" onClick={() => toggleModal()}></a>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Username</label>
                <input type="text" name="username" value={username} onChange={handleChange} />

                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={password} onChange={handleChange} />

                <button className="submit-btn btn" >Login</button>
            </form>
        </div>
    );
};

export default connect(null, { toggleModal })(LoginForm);
