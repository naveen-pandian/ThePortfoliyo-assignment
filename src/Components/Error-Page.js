import React from "react";
import Header from "./header";
import Footer from "./footer";


function ErrorPage(){
    return(
        <>
        <Header></Header>
          
    <div    className="breadcrumb-area shadow dark bg-cover text-center text-light" style={{"backgroundImage": "url(assets/img/2440x1578.png)"}}>
        <div    className="container">
            <div    className="row">
                <div    className="col-lg-12 col-md-12">
                    <h1>Error Page</h1>
                    <ul    className="breadcrumb">
                        <li><a href="home-light"><i    className="fas fa-home"></i> Home</a></li>
                        <li>404</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
       

      
    <div    className="error-page-area text-center default-padding">
        <div    className="container">
            <div    className="row align-center">
                <div    className="col-lg-6 offset-lg-3">
                    <div    className="error-box">
                        <h1>404</h1>
                        <h2>Oops! That page can’t be found.</h2>
                        <p>
                            The page you are looking for might have been removed had its name changed or its temporarily unavailable.
                        </p>
                        <a    className="btn mt-20 btn-md circle btn-theme smooth-menu" href="home-light">Back to home</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
       
        <Footer></Footer>
        </>
    );
}

export default ErrorPage;