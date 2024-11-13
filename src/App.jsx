import React, { useState } from 'react';
import CaseForm from './components/CaseForm';
import CaseTable from './components/CaseTable';
import SideBarNav from './components/SideBarNav';
import { Route, Routes } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import DashBoard from './pages/DashBoard';
import EditUser from './pages/EditUser';
import Projects from './components/Projects'
import Team from './components/Team'
import Documents from './components/Documents';

function App() {
  


  return (<>


    <Routes>
      <Route path='/' element={<RootLayout/>}>
          <Route index element={
            <DashBoard/>
          }/>
        <Route path='/projects' element={<Projects/>} ></Route>
        <Route path='/team' element={<Team/>} ></Route>
        <Route path='/documents' element={<Documents/>} ></Route>


          
      </Route>
      <Route path='/editclient/:_id' element={<EditUser/>}></Route>
    </Routes>

    </>
  );
}

export default App;
