import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Login from './components/Login.js';
import Checkout from './components/Checkout.js';
import Breed from './components/Breed.js';
import Professional from './components/Professional.js';
import Brand from './components/Brand.js';
import Blogs from './components/Blogs.js';
import { useStateValue } from './StateProvider';
import { auth } from './firebase.js'

function App() {

  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }

  }, []);

  console.log("user is", user);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/professional" element={<Professional />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path='/shop/breed' element={<Breed />} />
          <Route path='/shop/brand' element={<Brand />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
