import React from "react";
import Home from './Home.js';
import Footer from './footer.js';

function HomeDark(){
    return(
    <div className="bg-fixed dark-layout" style={{'backgroundImage': "url('assets/img/shape/banner-2.jpg')"}}>
    <Home theme='dark'></Home>
    <Footer></Footer>    
    </div>
    );
}


export default HomeDark;