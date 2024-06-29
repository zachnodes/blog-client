import {React} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import app from './styles/Home.module.css'
import Home from './pages/home'
import Profile from './pages/profile'
import Register from './comps/register';
import Signin from './comps/signin';
import Newpost from './comps/newpost';
import Viewpost from './comps/viewpost';
import Editpost from './comps/editpost';
import { useAuthContext } from './hooks/useAuthContext';
const siteUrl = process.env.REACT_APP_URL

function App() {

  const {user} = useAuthContext()
  return (
    <div className={app.background}>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home url={siteUrl}/>} />
              <Route path='/:username' element={user ? <Profile url={siteUrl}/> : <Navigate to={'/'}/>}/>
              <Route path='/register' element={user ? <Navigate to={'/'}/> : <Register/>}/>
              <Route path='/signin' element={user ? <Navigate to={'/'}/> : <Signin/>}/>
              <Route path='/new' element={user ? <Newpost url={siteUrl}/> : <Navigate to={'/'}/>}/>
              <Route path='/articles/:slug' element={<Viewpost url={siteUrl}/>}/>
              <Route path='/articles/edit/:slug' element={user ? <Editpost url={siteUrl}/> : <Navigate to={'/'}/>}/>
          </Routes>
      </BrowserRouter>
      </div>

  );


}

export default App;