import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listingApi';
import Details from './component/details/details';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/list/:id" component={Listing}></Route>
            <Route exact path="/details/:id" component={Details}></Route>
            <Footer/>
        </BrowserRouter>  
    )
}

export default Routing;