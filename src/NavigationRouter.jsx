import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "./App.css"
import { All } from './Components.jsx/All';
import { Career } from './Components.jsx/Career';
import { FullstackDevp } from './Components.jsx/FullstackDevp';
import { DataScience } from './Components.jsx/DataScience';
import { CyberSecurity } from './Components.jsx/CyberSecurity';

export const NavigationRouter = () => {
  return (
    <>
    <BrowserRouter>
    <div className='d-flex container-fluid justify-content-around'>
      <h3><Link to={'/'}>All</Link></h3>
      <h3><Link to={'/fullStackdev'}>Full Stack Development</Link></h3>
      <h3><Link to={'/dataScience'}>Data Science</Link></h3>
      <h3><Link to={'/cybersecurity'}>Cyber Security</Link></h3>
      <h3><Link to={'/career'}>Career</Link></h3>
    </div>
    <Routes>
      <Route path='/' element={<All></All>}></Route>
      <Route path='/fullStackdev' element={<FullstackDevp></FullstackDevp>}></Route>
      <Route path='/dataScience' element={<DataScience></DataScience>}></Route>
      <Route path='/cybersecurity' element={<CyberSecurity></CyberSecurity>}></Route>
      <Route path='/career' element={<Career></Career>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
