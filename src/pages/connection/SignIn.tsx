import React from 'react';
import FormSignIn from '../../components/form/FormSignIn';

import './signIn.css'

export default function SignIn() {
  return(
    <div className='container'>
      <div className='form'>
        <FormSignIn />
      </div>
    </div>
  )
}