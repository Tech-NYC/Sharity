import React from "react"
import Navigation, {NavDefault} from './home/Navigation';

const nav = [
    {
        id: 1,
        link: "/#mission",
        label: "Mission"
    },
    {
        id: 2,
        link: "/#impact",
        label: "Impact"
    },
    {
        id: 3, 
        link: "/organizations",
        label: "Donate"
    }

]

function UserViewOrg(props){
    let orgName = props.match.params.value;

    
    return(
        <>
        <NavDefault nav = {nav}/>
        <div className="mission-section" id="mission" >
            <h3>{orgName}</h3>

   
        </div>
        </>
    )
    
}

export default UserViewOrg;