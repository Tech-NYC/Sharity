import React from 'react';

import Navigation, {NavDefault} from './home/Navigation';
import Header from './home/Header'
import Mission from './home/Mission';
import Impact from './home/Impact';
import Footer from './home/Footer'
import {nav} from './home/navlinks'

function Home(){
    
    return(
        <>
        <Header />
        <Mission />
        <Impact />
        <Footer/>
        </>
    )
}

export default Home;