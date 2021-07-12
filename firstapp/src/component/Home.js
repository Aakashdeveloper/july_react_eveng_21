import React from 'react';
import Header from './Header';
import Footer from './Footer'

const Home = () => {
    return(
        <>
            <Header/>
            <h1>Hii to React App</h1>
            <h2>My App</h2>
            <Footer year="2021" month="July"/>
        </>
    )
}

export default Home;