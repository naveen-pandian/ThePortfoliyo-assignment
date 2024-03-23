import React from "react";
import Home from './Home.js';
import Footer from './footer.js';

function HomeLight(){
    return(
        <div className="bg-fixed" style={{'backgroundImage': 'url("assets/img/shape/banner-1.jpg")'}} > 
        <Home theme='light'></Home>
        <Footer></Footer>  
        </div>
    )
}


export default HomeLight;