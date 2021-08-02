import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Register from './Component/Register';
import Login from './Component/Login';
import Profile from './Component/Profile';
import UserList from './Component/UserApi';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Register}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/user" component={UserList}></Route>
            <Footer/>
        </BrowserRouter>  
    )
}

export default Routing;