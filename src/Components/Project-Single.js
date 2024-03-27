import React,{useContext,useState} from "react";
import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import { ContextApi } from "../Api/ContextApi";


function ProjectSingle(){

    const {userData} = useContext(ContextApi);
  

    const location= useLocation();
    console.log(location);
    const gets =location.state?.items;
    const [items]=useState(gets); 

    return(
        <>
        <Header></Header>
          
    <div   className="breadcrumb-area shadow dark bg-cover text-center text-light" style={{"backgroundImage": `url(${items.image.url})`}}>
        <div   className="container">
            <div   className="row">
                <div   className="col-lg-12 col-md-12">
                    <h1>{items.title}</h1>
                    <ul   className="breadcrumb">
                        <li><a href="home-light"><i   className="fas fa-home"></i> Home</a></li>
                        <li>Project</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
     

      
    <div   className="project-details-area default-padding">
        <div   className="container">
            <div   className="project-details-items">
                <div   className="project-thumb">
                    <img src={`${items.image.url}`} alt="Thumb"/>
                </div>
                <div   className="top-info">
                    <div   className="row">
                        <div   className="col-xl-12 left-info">
                            <div   className="project-info mt-md-50 mt-xs-40 mb-40">
                                <div   className="content">
                                    <ul   className="project-basic-info">
                                        <li>
                                            Project <span>{items.title}</span>
                                        </li>
                                        <li>
                                            Tech Stack<span>{items.techStack}</span>
                                        </li>
                                           <li>
                                          Live & Github <span><a href={items.liveurl}><i className="fas fa-stream"></i></a> &nbsp; &nbsp;<a href={items.githuburl}><i className="fab fa-github"></i></a></span> 
                                                                                
                                         </li>
                                        <li>
                                            Address <span>{userData?.about?.address}</span>
                                        </li>
                                    </ul>
                                    <ul   className="social">
                                        <li>
                                            <h4>Share:</h4>
                                        </li>
                                        <li>
                                            <a href="#"><i   className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i   className="fab fa-twitter"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i   className="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i   className="fab fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <h2>{items.title}</h2>
                           <p>
                            {items.description}
                            </p>
                            <ul className="check-list mt-40">
                                                {userData.projects?.map( (item,index) => ( item.enabled == true ? (
                                                  <li>
                                                      <h4>{item.title}</h4>
                                                      <p>
                                                        {item.description}
                                                      </p>
                                                  </li> ): null
                                                 ))}
                                                      
                                              </ul>
                        </div>
                    </div>
                </div>

                <div className="main-content mt-40">
                                      
                                     
                                      <div className="row">
                                        {userData.projects?.map( (item,index)=> (item.enabled==true?(
                                          <div key={index} className="col-lg-6 col-md-6">
                                              <img src={`${item?.image?.url}`} alt="Thumb"/>
                                          </div>): null ))}
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
     
        <Footer></Footer>
        </>
    );
}

export default ProjectSingle;