import React from 'react'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Chat from './components/Chat'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from "react-redux"
import store from './redux/redux'


function App() {
  return (
  <Provider store={store}> 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/auth/signup' element={<SignUp />} />
        <Route path='/chat' element={<Chat />} />
        {/* <Route element={Error} /> */}
      </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;