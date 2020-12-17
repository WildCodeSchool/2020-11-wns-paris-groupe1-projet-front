import React from 'react';
import FormSignUp from '../../components/form/FormSignUp';

import '../sign-in/signIn.css'

export default function SignIn() {
  return(
    <div className='container'>
      <div className='form'>
        <FormSignUp />
      </div>
    </div>
  )
}