import React, { Fragment } from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { toggleModal } from '../../actions/login';
import { motion, AnimatePresence } from 'framer-motion';

const Login = ({ login: { openModal }, toggleModal }) => {

  return (
    <Fragment>
      <AnimatePresence>
        {openModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="backdrop">
            <LoginForm />
          </motion.div>)}
      </AnimatePresence>

      <motion.button className="btn open-btn"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => toggleModal()}>
        Open Form
      </motion.button>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  login: state.login
});

export default connect(mapStateToProps, { toggleModal })(Login);
