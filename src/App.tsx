import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.css'; 
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import TopBar from './components/TopBar';
import SignIn from './pages/Home/signIn';
import SignUp from './pages/Home/signUp';
import Profile from './pages/Home/profile';
import UserSession from './pages/Home/services/auth';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import { TabContext } from '@mui/lab';
import {Container, Tabs, Tab} from '@mui/material'


const App = () => {

      return (
        <BrowserRouter>
            <TopBar />
                <Routes>
                    <Route
                        path="/"
                        element={<></>}
                            // @ts-ignore
                            render={() => {
                            return UserSession.isAuthenticated() ? (
                                <Navigate to="/dashboard" />
                            ) : (
                                <Navigate to="/signin" />
                            );
                            }}
                    />
                    <Route path="/products" element={<Products />}></Route>
                    <Route path="/pricing" element={<Pricing />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/signin" element={<SignIn />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Routes>
        </BrowserRouter>
    )
}

export default App;
