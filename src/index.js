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
import 'bootstrap/dist/css/bootstrap.min.css';
import ReadBlog from './user-component/read.js';
import EditBlog from './user-component/edit/edit';



ReactDOM.render(
   <BrowserRouter>
      <Routes>
        <Route exact={true} path="/" element={<App />} /> 
        <Route path="/register" element={<Register />} /> 
        <Route path='/app/public' element={<PublicHome/> } /> 
        <Route path='/app/write' element={<WritePage/>} />
        <Route path='/app/user/account' element={<PersonalPage />} />
        <Route path='/app/public/read' element={<ReadBlog />} />
        <Route path="/app/user/edit" element={<EditBlog />} />
        <Route path="*" element={<h2>Router doesn't exist</h2>} />
      </Routes>
   </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
