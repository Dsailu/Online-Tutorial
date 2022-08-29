import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import my_courses from './pages/my-courses';
import my_profile from './pages/my-profile';
// import Home from "./pages/Home.js";
// import my_profile from "./pages/my-profile.js";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Switch><Route path='/' ></Route>
        <Route exact path='/my_courses' component={my_courses} />
        <Route exact path='/my_profile' component={my_profile} /></Switch>
      </Router>
      {/* <Home /> */}
      
      {/* <my_profile/> */}
    </>
  );
}

export default App;
