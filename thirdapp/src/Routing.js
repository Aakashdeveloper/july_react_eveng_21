import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listingApi';
import Details from './component/details/details';
import PlaceBooking from './component/Booking/placeBooking';
import ViewBooking from './component/Booking/bookingApi'


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route path="/list/:id" component={Listing}></Route>
            <Route path="/details/:id" component={Details}></Route>
            <Route path="/booking/:hotel_name" component={PlaceBooking}></Route>
            <Route path="/viewBooking" component={ViewBooking}></Route>
            <Footer/>
        </BrowserRouter>  
    )
}

export default Routing;