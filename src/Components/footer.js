import React, {useContext} from "react";
import { ContextApi } from "../Api/ContextApi";


function Footer(){

    const {userData}= useContext(ContextApi);
  
    return(
        <>
         <footer className="bg-dark text-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <ul className="footer-social">
                        {userData.social_handles?.map((item,index)=>(
                        <li key={index} >
                            <a href={`${item.url}`}>
                              <img className="socialicon" src={`${item.image.url}`} alt="footerImage"/>
                            </a>
                        </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="col-lg-6 text-end">
                    <p>&copy; 2024 {userData.about?.name}. All Rights Reserved</p>
                </div>
            </div>
        </div>
    </footer>
        </>
    );
}

export default Footer;