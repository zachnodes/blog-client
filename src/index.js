import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Routeswitch from './comps/routeswitch'
import {AuthContextProvider} from './context/authcontext'
import { PostContextProvider } from './context/postscontext';

const siteUrl = process.env.REACT_APP_URL;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <App url={siteUrl}/>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

