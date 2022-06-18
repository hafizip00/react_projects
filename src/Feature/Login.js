import React from 'react'
import {useSelector} from 'react-redux'

function Login() {
  const state = useSelector(state => state.OP.value)
  return (
    <div>
        name : {state.age}
    </div>
  )
}

export default Login