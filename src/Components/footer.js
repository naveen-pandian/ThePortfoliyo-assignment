import React, { useState,useEffect } from "react";

function Footer(){

    const [social,setSocial]=useState([]);
    const [abbout,setAbbout]=useState({ "name": ""});
    useEffect(()=>{
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
        .then(response => response.json())
        .then(response => {
      setSocial(response.user.social_handles);
      setAbbout(response.user.about);
        })
       },[]);
    return(
        <>
    <footer className="bg-dark text-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="footer-social">
                        {social.map((item,index)=>(
                        <li key={index} >
                            <a href={`${item.url}`}>
                              <img className="socialicon" src={`${item.image.url}`} alt="footerImage"/>
                            </a>
                        </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="col-lg-6 text-end">
                    <p>&copy; 2024 {abbout.name}. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
        </>
    );
}

export default Footer;