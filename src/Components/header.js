import React from "react";


function Header(){

    return(
        <>
          
    <header>
          
        <nav   className="navbar mobile-sidenav navbar-common navbar-sticky navbar-default validnavs">


            <div   className="container d-flex justify-content-between align-items-center">            

                  
                <div   className="navbar-header">
                    <button type="button"   className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i   className="fa fa-bars"></i>
                    </button>
                    <a   className="navbar-brand" href="home-light">
                        <img src="assets/img/logo.png"   className="logo" alt="Logo"/>
                    </a>
                </div>
                  

                  
                <div   className="collapse navbar-collapse" id="navbar-menu">

                    <img src="assets/img/logo.png" alt="Logo"/>
                    <button type="button"   className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i   className="fa fa-times"></i>
                    </button>
                    
                    <ul   className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li   className="dropdown">
                            <a href="#"   className="dropdown-toggle active" data-toggle="dropdown" >Home</a>
                            <ul   className="dropdown-menu">
                                <li><a href="home-light">Portfolio Light</a></li>
                                <li><a href="home-slider">Portfolio Animated</a></li>
                                <li><a href="home-dark">Portfolio Dark</a></li>
                            </ul>
                        </li>
                        <li   className="dropdown">
                            <a href="#"   className="dropdown-toggle" data-toggle="dropdown" >Pages</a>
                            <ul   className="dropdown-menu">
                                <li><a href="/home-light#services">Service Single</a></li>
                                <li><a href="/home-light#resume">Project Single</a></li>
                                <li><a href="/home-light#resume">Blog Single</a></li>
                                <li><a href="404">Error Page</a></li>
                            </ul>
                        </li>
                        <li><a href="home-light#portfolio">Portfolio</a></li>
                        <li><a href="home-light#resume">Resume</a></li>
                        <li><a href="home-light#contact">Contact</a></li>
                    </ul>
                </div>  

                <div   className="attr-right">
                      
                    <div   className="attr-nav">
                        <ul>
                            <li   className="button"><a href="home-light#contact">Contact Us</a></li>
                        </ul>
                    </div>
                      
                </div>

                  
            </div>   
              
            <div   className="overlay-screen"></div>
              
        </nav>
          
    </header>
      
        </>
    );

}

export default Header;