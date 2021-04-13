import React from 'react';

import Navigation, {NavDefault} from './home/Navigation';
import Header from './home/Header'
import Mission from './home/Mission';
import Impact from './home/Impact';
import Footer from './home/Footer'

function Home(){
    const nav = [
        {
            id: 1,
            link: "#mission",
            label: "Mission"
        },
        {
            id: 2,
            link: "#impact",
            label: "Impact"
        },
        {
            id: 3, 
            link: "/organizations",
            label: "Donate"
        }
    ]
    return(
        <>
        <NavDefault nav = {nav}/>
        <Header />
        <Mission />
        <Impact />
        <Footer/>
        </>
    )
}

export default Home;