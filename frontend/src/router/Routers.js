import React from 'react'
import { Routes, Navigate, Route } from 'react-router-dom'

import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import Register from './../pages/Register';
import SearchResultList from './../pages/SearchResultList';
import WelCome from '../pages/WelCome';
import Adminlogin from '../pages/Adminlogin';
import ProtectedRoute from '../ProtectedRoute';
import AdminDashboard from '../pages/AdminDashboard';
import ClientTransac from "../pages/ClientTransac"
const Routers = () => {
  return (
    <Routes>

      <Route element={<ProtectedRoute />} >
        <Route path='/admindashboard' element={<AdminDashboard />} />


        <Route path='/client_trasac' element={<ClientTransac />} />
      </Route>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/tours' element={<Tours />} />
      <Route path='/tours/:id' element={<TourDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path="/welcome" element={<WelCome />} />
      <Route path="/adminlogin" element={<Adminlogin />} />
      <Route path='/tours/search' element={<SearchResultList />} />


    </Routes>
  )
}

export default Routers