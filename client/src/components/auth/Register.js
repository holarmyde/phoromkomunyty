import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
//import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger'); // this is passed as a message to our action/alert.js. alert danger changes the background color.
    } else {
      register({ name, email, password });

      /** 
      //console.log(formData);

      const newUser = {
        name,
        email,
        password,
      };

      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const body = JSON.stringify(newUser);

        const res = await axios.post('/api/users', body, config);
        console.log(res.data); // the route we re hitting/ making a post request to is api/users... we re sendin the users name, email, and password. It should be added to the database and it should return a token to us
      } catch (err) {
        console.error(err.response.data);
      }

      **/
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            //required
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            // required
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            // minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            // minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStatetToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStatetToProps, { setAlert, register })(Register);
// connect takes in two parameters anything you want to map i.e. a state, profile etc

/**
 * In our register we brought in connect so we could work with redux we also brought in the setalert action then you have to export connect this way
 * 
 * 
 * export default connect(null, { setAlert })(Register);
// connect takes in two parameters anything you want to map i.e. a state, profile etc

the setalert action is available within props


 * 
 */
