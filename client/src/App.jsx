import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'

import IndexPage from './pages/IndexPage';
import PlacePage from './pages/PlacePage';
import Layout from './Layout';


axios.defaults.withCredentials=true;


axios.defaults.baseURL=import.meta.env.VITE_API_BASE_URL;

function App() {

  return (

    <Routes>
      <Route path="/"element={<Layout/>}>
      <Route index element={<IndexPage/>}/>
      <Route path="/place" element={<PlacePage />} />
      </Route>
    </Routes>
    
   
   
   
  )
}

export default App
