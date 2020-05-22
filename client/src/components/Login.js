import React from "react";
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from './utils/axiosWithAuth';
//initial Form Values
let initialState = {
  username: '',
  password: ''
}



const Login = () => {
  let [credentials, setCredentials ] = useState(initialState)
  let {push} = useHistory();

  let handleChanges = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value});
}

let login = e => {
  e.preventDefault();
  axiosWithAuth()
  .post('/api/login', credentials)
  .then(res => {
    localStorage.setItem('token', res.data.payload)
    push('/bubble-page')
  })
}

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <div onSubmit={login} style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}>
          <h1 style={{width: '50%'}}>Welcome to the Bubble App!</h1>
          <form style={{display: 'flex', flexDirection: 'column', width: '20%', margin:'auto', height: '10vh', justifyContent: 'space-around', alignItems:'center'}}>
              <input
              type='text'
              name='username'
              value={credentials.username}
              onChange={handleChanges}
              style={{width: '100%'}}
              />
              <input
              type='text'
              name='password'
              value={credentials.password}
              onChange={handleChanges}
              style={{width: '100%'}}
              />
              <button style={{width: '70%'}}>Login</button>
          </form>
      </div>
    </>
  );
};

export default Login;
