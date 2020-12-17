import React from 'react'
import {useContext} from 'react'
import {Redirect} from 'react-router-dom'
import {LoginContext} from '../../context/login'

interface CompProps {
  Component: React.ReactNode
}

export default function ProtectedRoute({Component}: CompProps): JSX.Element {
  const isLoggedIn = useContext(LoginContext)

  return isLoggedIn ? <>{Component}</> : <Redirect to='/sign-in' />
}