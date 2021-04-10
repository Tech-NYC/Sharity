import React, {useState, useContext, useEffect} from 'react';
import Navigation, {NavDefault} from "../home/Navigation"

function OrgSignup(){
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
        
        </>
    )
}

export default OrgSignup;