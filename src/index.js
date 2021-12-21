import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './components/register/register';
import PublicHome from './user-component/public-component/public-home';
import PersonalPage from './user-component/personal/personal';
import WritePage from './user-component/write/write';

ReactDOM.render(
   <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<App />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path='/app/public' element={<PublicHome/> } /> 
        <Route path='/app/write' element={<WritePage/>} />
        <Route path='/app/personal' element={<PersonalPage />} />
      </Routes>
   </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
