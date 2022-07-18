import React from 'react'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Chat from './components/Chat'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/chat' element={<Chat />} />
        {/* <Route element={Error} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;