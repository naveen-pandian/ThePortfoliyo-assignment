import React from "react";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

function HomeSlider(){

    const [usser,setUsser]=useState(
        {
            "email":""
        }
    );

    const [aboout,setAboout]=useState(
        {
            "name": "",
            "title": "",
            "subTitle": "",
            "description": "",
            "quote": "",
            "exp_year": "",
            "address": "",
            "some_total": "",
            "phoneNumber": "",
            "avatar": {
                "public_id": "",
                "url": "",
                "_id": ""
            }
    });

    const [servicess,setServicess]=useState([]);
    const [proojects,setProojects]=useState([]);
    const [tesst,setTesst]=useState([]);
    const [sociial,setSociial]=useState([]);

  

    const [eduucation,setEduucation]=useState([]);
    useEffect(()=>{
      fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(response => {
        console.log('Response: ',response);
        setAboout(response.user.about);
        setUsser(response.user);
        setServicess(response.user.services);
        setProojects(response.user.projects);
        setTesst(response.user.testimonials);
        setEduucation(response.user.timeline);
        setSociial(response.user.social_handles);
      })
     },[]);
    



    return(
        <>
        <header>
            
        <nav className="navbar navbar-icon-menu mobile-sidenav attr-border navbar-sticky navbar-default validnavs navbar-fixed white no-background">


            <div className="container d-flex justify-content-between align-items-center">            

                    
                <div className="navbar-header">
                    <a className="navbar-brand logo-icon" href="home-slider">
                        <img src="assets/img/logo-icon.png" className="logo" alt="Logo"/>
                    </a>
                </div>
                    


                <div className="attr-right">
                        
                    <div className="attr-nav attr-box multi">
                        <ul>
                            <li className="side-menu">
                                <a href="#">
                                    <span className="bar-1"></span>
                                    <span className="bar-2"></span>
                                    <span className="bar-3"></span>
                                </a>
                            </li>
                            <li className="btn-trend">
                                <a href="#"><i className="fas fa-comments-alt"></i> Chat Now</a>
                            </li>
                        </ul>
                    </div>
                        
                </div>

                    
                <div className="side">
                    <a href="#" className="close-side"><i className="icon_close"></i></a>
                    <div className="widget">
                        <div className="logo">
                            <img src="assets/img/logo-light.png" alt="Logo"/>
                        </div>
                        <ul className="side-nav">
                            <li><a href="home-light">Home Light</a></li>
                            <li><a href="home-slider">Home Animated</a></li>
                            <li><a href="home-dark">Home Dark</a></li>
                            <li><a href="#blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className="widget address">
                        <div>
                            <ul>
                                <li>
                                    <div className="content">
                                        <p>Address</p> 
                                        <strong>{aboout.address}</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Email</p> 
                                        <strong>{usser.email}</strong>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <p>Contact</p> 
                                        <strong>{aboout.phoneNumber}</strong>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="widget newsletter">
                        <h4 className="title">Get Subscribed!</h4>
                        <form action="#">
                            <div className="input-group stylish-input-group">
                                <input type="email" placeholder="Enter your e-mail" className="form-control" name="email"/>
                                <span className="input-group-addon">
                                    <button type="submit">
                                        <i className="arrow_right"></i>
                                    </button>  
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="widget social">
                        <ul className="link">
                             {sociial.map((item,index)=>(
                        <li key={index} >
                            <a href={`${item.url}`}>
                              <img className="sociialicon" src={`${item.image.url}`}/>
                            </a>
                        </li>
                        ))}
                        </ul>
                    </div>

                </div>
                    

                    
            </div>   
                
            <div className="overlay-screen"></div>
                
        </nav>
            
    </header>
        

      
    <div className="banner-area banner-style-one banner-three double-items navigation-between-bottom navigation-right-botom navigation-custom-large  overflow-hidden top-pad-80 text-light">
            
        <div className="banner-slide-counter">
                
            <div className="swiper-wrapper">

                    
               <div className="swiper-slide bg-cover" style={{"background":" url(assets/img/banner/6.jpg)"}}>
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-lg-6 info">
                                    <h2><span>Hello <img src="assets/img/shape/4.png" alt="Icon"/></span>     <br/> I'm {aboout.name}</h2>
                                    <h3 className="title">
                                        <span className="header-caption" id="page-top">
                                                
                                            <span className="cd-headline clip is-full-width">
                                                    
                                                <span className="cd-words-wrapper">
                                                    <b className="is-visible">{aboout.title}</b>
                                                    <b className="is-hidden">{aboout.subTitle.substring(0,20)}</b>
                                                    <b className="is-hidden">{aboout.subTitle.substring(22,)}</b>
                                                </span>
                                            </span>
                                                
                                        </span>
                                    </h3>
                                    <div className="button">
                                        <a className="btn btn-md circle btn-theme" href="#resume">My Resume</a>
                                    </div>
                                </div>

                                <div className="col-lg-6 thumb">
                                    <img className="illusslide" src={`${aboout.avatar.url}`}  alt="Thumb"/>
                                    <div className="shape-center">
                                        <img src="assets/img/shape/7.png" alt="Thumb"/>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    

                    
                <div className="swiper-slide bg-cover" style={{"background": "url(assets/img/banner/7.jpg)"}}>
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-lg-1 info">
                                    <h2 className="curbe-title">My Skills</h2>
                                </div>

                                <div className="col-lg-10 offset-lg-1">
                                    <div className="row">
                                    {servicess.map( (item) => (  
                                        <div key={item._id} className="service-style-one col-lg-4 col-md-6">
                                            <div className="service-style-one-item">
                                                <img src={`${item.image.url}`} alt="Icon"/>
                                                <h4><Link to='/service-single' state={{item: item }}>{item.name}</Link></h4>
                                                <p>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                         
                                            
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    

                    
                <div className="swiper-slide bg-cover" style={{"background": "url(assets/img/banner/8.jpg)"}}>
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-lg-1 info">
                                    <h2 className="curbe-title">My Portfolio</h2>
                                </div>

                                <div className="col-lg-10 offset-lg-1 thumb">
                                    <div id="portfolio-grid" className="gallery-items colums-3">
                                            {proojects.map((items,index) => (
                                        <div key={index} className="pf-item">
                                            <div className="overlay-content">
                                                <img src={`${items.image.url}`} alt="thumb"/>
                                                <div className="content">
                                                    <div className="title">
                                                        <span>Project</span>
                                                        <h5><Link to='/project-single' state={{items: items }}>{items.title}</Link></h5>
                                                    </div>
                 
                                                    <Link to='/project-single' state={{items: items }}><i className="fas fa-arrow-right"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                            ))}
                                        
                                            
                                        
                                            
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    


                    
                <div id="resume" className="swiper-slide bg-cover" style={{"background": "url(assets/img/banner/6.jpg)"}}>
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-lg-1 info">
                                    <h2 className="curbe-title">My Resume</h2>
                                </div>

                                <div className="col-lg-10 offset-lg-1 thumb">
                                    <ul className="education-table">
                                    {eduucation.map( (item,index) => (
                                                  <li key={index}>
                                            <h4> {item.jobTitle}</h4>
                                            <h5> {item.company_name} <br/> {item.jobLocation}</h5>
                                            <span> startDate : {item.startDate.substring(0,10)} <br></br> endDate : {item.endDate.substring(0,10)} </span>
                                            <p>
                                                                 {item.summary} 
                                                      </p>
                                        </li> ))}
                                        
                                    </ul>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    

                    
                <div id="blog" className="swiper-slide bg-cover" style={{"background": "url(assets/img/banner/7.jpg)"}}>
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-lg-1 info">
                                    <h2 className="curbe-title">My Blog</h2>
                                </div>

                                <div className="col-lg-10 offset-lg-1">
                                    <div className="row">
                                            
                                        {tesst.map( ( item,index) => ( 
                                        <div key={index} className="blog-style-one mb-30 col-lg-4 col-md-6">
                                            <div className="item">
                                                <div className="thumb">
                                                <Link to='/blog-single' state={{itemss: item }}><img src={`${item.image.url}`} alt="Thumb"/></Link>
                                            
                                                </div>
                                                <div className="info">
                                                    <h4>
                                                        <Link to='/blog-single' state={{itemss: item }}>{item.review.substring(0,43)}....</Link>
                                                
                                                    </h4>
                                                    <div className="meta">
                                                        <ul>
                                                            <li>
                                                                <a href="#"><i className="fas fa-user-circle"></i> {item.name}</a>
                                                            </li>
                                                            <li>
                                                                <i className="fas fa-calendar-alt"></i> 15 Auguest, 2023
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            
                                            ))}
                                            
                                       
                                            

                                            
                                        
                                        
                                            
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                    

                    
                <div className="swiper-slide bg-cover" style={{"background": "url(assets/img/banner/8.jpg)"}}>
                    <div className="container">
                        <div className="contact-content">
                            <div className="row align-center">
                                <div className="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                                    <div className="form-box mt-50">
                                        <h2>Let's talk?</h2>
                                        <p>
                                            {aboout.quote}
                                        </p>
                                        <form action="assets/mail/contact.php" method="POST" className="contact-form">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                                                        <span className="alert-error"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input className="form-control" id="email" name="email" placeholder="Email*" type="email"/>
                                                        <span className="alert-error"></span>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text"/>
                                                        <span className="alert-error"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group comments">
                                                        <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <button type="submit" name="submit" id="submit">
                                                        Send Message
                                                    </button>
                                                </div>
                                            </div>
                                                
                                            <div className="col-lg-12 alert-notification">
                                                <div id="message" className="alert-msg"></div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
            
                                <div className="col-lg-4 offset-lg-1">
                                    <div className="contents">
                                        <ul>
                                            <li className="contact-info-list">
                                                <div className="icon">
                                                    <i className="fas fa-envelope-open-text"></i>
                                                </div>
                                                <div className="info">
                                                    <p>Our Email</p>
                                                    <h5>
                                                    <a href={`mailto:${usser.email}`}>{usser.email}</a> 
                                                        
                                                    </h5>
                                                </div>
                                            </li>
                                            <li className="contact-info-list">
                                                <div className="icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                                <div className="info">
                                                    <p>Address</p>
                                                    <h5>
                                                       {aboout.address}
                                                    </h5>
                                                </div>
                                            </li>
                                            <li className="contact-info-list">
                                                <div className="icon">
                                                    <i className="fas fa-headphones-alt"></i>
                                                </div>
                                                <div className="info">
                                                    <p>Phone</p>
                                                    <h5>
                                                    <a href={`tel:${aboout.phoneNumber}`}>{aboout.phoneNumber}</a>
                                                    </h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    

            </div>

                
            <div className="swiper-pagination"></div>

                
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

        </div>        
    </div>
        </>
    );
}

export default HomeSlider;