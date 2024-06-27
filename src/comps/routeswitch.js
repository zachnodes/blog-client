import {React} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import App from '../App';
import Home from '../pages/home'
import Register from './register';
import Signin from './signin';
import Newpost from './newpost';
import Viewpost from './viewpost';
import { useAuthContext } from '../hooks/useAuthContext';

const Routeswitch = () => {
    const {user} = useAuthContext()
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/register' element={user ? <Navigate to={'/'}/> : <Register/>}/>
                <Route path='/signin' element={user ? <Navigate to={'/'}/> : <Signin/>}/>
                <Route path='/new' element={user ? <Newpost/> : <Navigate to={'/'}/>}/>
                <Route path='/articles/:slug' element={<Viewpost/>}/>
            </Routes>

        </BrowserRouter>
 
    );
}

export default Routeswitch;
