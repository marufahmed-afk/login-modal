import React, { Fragment } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/login';

const Login = ({ login: { openModal }, toggleModal }) => {

  return (
    <Fragment>
      {openModal && <LoginForm />}
      <button className="btn open-btn" onClick={() => toggleModal()}>
        Open Form
      </button>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  login: state.login
});

export default connect(mapStateToProps, { toggleModal })(Login);
