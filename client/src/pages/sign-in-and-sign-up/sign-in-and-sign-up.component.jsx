import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './sign-in-and-sign-up.styles.scss'

import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

import { selectExistingError } from '../../redux/user/user.selectors'

const SignInAndSignUpPage = ({ error }) => {
  return (
    <div className="sign-in-and-sign-up" >
      {error ? `${error.message}` : ''}
      <SignIn/>
      <SignUp/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  error: selectExistingError
})

export default connect(mapStateToProps)(SignInAndSignUpPage);