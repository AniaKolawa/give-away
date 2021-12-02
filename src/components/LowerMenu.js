import React, {useEffect} from 'react';
import { withRouter } from "react-router-dom"



const LowerMenu = (props) => {

    useEffect(() => {
        const location = props.location?.state?.location
        if(location) scrollTo(location)
    }, [props.location])

    const scrollTo = (location)=>{
        const element = document.getElementById(location);
        window.scrollTo({
            behavior: "smooth",
            top: element ? element.offsetTop : 0
        });
    }

    const changeLocation = (param = null) =>{
        props.history.push('/',{location:param})
    }

    return (
        <div className="lowerNav-container">
            <div onClick={()=>{changeLocation()}} className="lowerMenuLink lowerMenuLink--active" >Start</div>
            <div onClick={()=>{changeLocation("steps")}}  className="lowerMenuLink" >O co chodzi?</div>
            <div onClick={()=>{changeLocation("about")}}  className="lowerMenuLink">O nas</div>
            <div onClick={()=>{changeLocation("beneficiary")}}  className="lowerMenuLink" >Fundacja i organizacje</div>
            <div onClick={()=>{changeLocation("contact")}}  className="lowerMenuLink" >Kontakt</div>
        </div>
    );
};

export default withRouter(LowerMenu);