import React, { useState } from "react";
import { useContext } from "react";
import { ContextApi } from "../Api/ContextApi";

function Home(props){

    const {userData} = useContext(ContextApi);
    const {theme}=props;
    const [selected,setSelected]=useState('All');
    const [skills,setSkills] = useState(['Reactjs','Nextjs','Mern','CSS','TailwindCSS']);
    const filtertech = (tech) => {
        if(tech === 'All') {
            return skills;
        }
        else{
            return skills.filter(skill => skill.includes(tech));
        }
    };
   
    return(
         <>           
         <header id="home">
              
              <nav className="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">
      
      
                  <div className="container d-flex justify-content-between align-items-center">            
      
                        
                      <div className="navbar-header">
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                              <i className="fa fa-bars"></i>
                          </button>
                          <a className="navbar-brand" href="index.html">
                              <img src="assets/img/logo.png" className="logo" alt="Logo"/>
                          </a>
                      </div>
                        
      
                        
                      <div className="collapse navbar-collapse" id="navbar-menu">
      
                          <img src="assets/img/logo.png" alt="Logo"/>
                          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                              <i className="fa fa-times"></i>
                          </button>
                          
                          <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                              <li>
                                  <a className="smooth-menu" href="#home">Home</a>
                              </li>
                              <li>
                                  <a className="smooth-menu" href="#services">expertise</a>
                              </li>
                              <li>
                                  <a className="smooth-menu" href="#portfolio">portfolio</a>
                              </li>
                              <li>
                                  <a className="smooth-menu" href="#about">about</a>
                              </li>
                              <li>
                                  <a className="smooth-menu" href="#blog">blog</a>
                              </li>
                              <li>
                                  <a className="smooth-menu" href="#contact">contact</a>
                              </li>
                          </ul>
                      </div>  
      
                        
                  </div>   
                    
                  <div className="overlay-screen"></div>
                    
              </nav>
                
          </header>
            
      
           
          <header className="header-fixed">
              <div className="f-flex">
                  <div className="logo">
                      <a href="#home"><img src="assets/img/logo-icon.svg" alt="Logo"/></a>
                  </div>
                  <div className="menu">
                      <ul className="nav">
                          <li>
                              <a className="smooth-menu" href="#home">
                                  <i className="fas fa-home"></i>
                                  <div className="menu-name">Home</div>
                              </a>
                          </li>
                          <li>
                              <a className="smooth-menu" href="#services">
                                  <i className="fas fa-cog"></i>
                                  <div className="menu-name">Services</div>
                              </a>
                          </li>
                          <li>
                              <a className="smooth-menu" href="#portfolio">
                                  <i className="fas fa-briefcase"></i>
                                  <div className="menu-name">Portfolio</div>
                              </a>
                          </li>
                          <li>
                              <a className="smooth-menu" href="#about">
                                  <i className="fas fa-user"></i>
                                  <div className="menu-name">About</div>
                              </a>
                          </li>
                          <li>
                              <a className="smooth-menu" href="#resume">
                                  <i className="fas fa-file-alt"></i>
                                  <div className="menu-name">Resume</div>
                              </a>
                          </li>
                          <li>
                              <a className="smooth-menu" href="#contact">
                                  <i className="fas fa-comments"></i>
                                  <div className="menu-name">Contact</div>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div className="video">
                      <a href={`${userData.youtube?.url}`} className="popup-youtube video-play-button theme">
                          <i className="fas fa-play"></i>
                      </a>
                  </div>
              </div>
          </header>
            
      
          
          <div className="auto-height bg-fixed banner-style-one">
              <div className="container">
                  <div className="double-items">
                      <div className="row align-center">
      
                          <div className="col-lg-6 info">
                              <h1 className="text-invisible">WELCOME</h1> 
                              <h2 className="introd">Hey <img src="assets/img/shape/4.png" alt="Icon"/> I'm <span>{userData.about?.name}</span></h2>
                              <h3 className="title">
                                  <span className="header-caption" id="page-top">
                                        
                                      <span className="cd-headline clip is-full-width">
                                            
                                          <span className="cd-words-wrapper">
                                              <b className="is-visible">{userData.about?.title}</b>
                                              <b className="is-hidden">{userData.about?.subTitle.substring(0,20)}</b>
                                              <b className="is-hidden">{userData.about?.subTitle.substring(22,)}</b>
                                          </span>
                                      </span>
                                        
                                  </span>
                              </h3>
                              <div className="button mt-55">
                                  <a className={`${theme == 'light'?"btn btn-md circle btn-dark":"btn btn-md circle btn-theme effect"}`} href="#resume">My Resume</a>
                              </div>
                          </div>
      
                           <div className="col-lg-6 thumb" data-wow-delay="900ms">

                               <div className="shape-center">
                                  <img src="assets/img/shape/7.png" alt="Thumb"/>
                               </div>
                               <div className="illus"><img className=" wow fadeInDown" src={`${userData.about?.avatar.url}`} alt="Thumb"/>   </div>
                           
                              
                          </div>
                          
                      </div>
                      <div className="personal-social">
                          <ul>
                        {userData.social_handles?.map((item,index)=>(
                        <li key={index} >
                            <a href={`${item.url}`}>
                              <img className="socialicon" src={`${item.image.url}`}/>
                            </a>
                        </li>
                        ))}
                              
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
            
      
           
          <div id="services" className="services-style-one-area box-layout default-padding bottom-less bg-light">
              <div className="blur-bg"></div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                          <div className="site-heading text-center">
                              <h4 className="sub-title">My Expertise</h4>
                              <h2 className="title">What I Do </h2>
                              <div className="devider"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                        
                    {userData.services?.map( (item,index) => (  <div className="service-style-one col-lg-4 col-md-6">
                          <div key={index} className="service-style-one-item">
                              <img src={`${item.image.url}`} alt="Icon"/>
                              <h4><a href="#" data-bs-toggle="modal" data-bs-target={`#model-${item._id}`}>{item.name}</a></h4>
                              <p>
                                  {item.desc}
                              </p>
                          </div>
                      </div>
                   )) }
                                              
                  </div>
              </div>
              
      
              {userData.services?.map( (item ,index)=> (
              <div key={index} className="modal fade" id={`model-${item._id}`} tabindex="-1" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                      <div className="modal-content">
                          
                          <div className="modal-body">
      
                              <div className="modal-header">
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
      
                              <div className="services-single-content">
                                  <div className="thumb">
                                      <img src={`${item.image.url}`} alt="Thumb"/>
                                  </div>
                                  <h2>{item.name}</h2>
                                  <p>
                                      {item.desc}
                                  </p>
                                  <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                      <div className="row">
                                          <div className="col-lg-4 col-md-6">
                                              <div className="content">
                                                  <h4>Included Services</h4>
                                                  <ul className="feature-list-item">
                                                      <li>Monthly SEO Task</li>
                                                      <li>24/7 Alltime Supporting</li>
                                                      <li>Turbo Boosting</li>
                                                      <li>Expert Team Members</li>
                                                  </ul>
                                              </div>
                                          </div>
                                          <div className="col-lg-8 col-md-6 mt-xs-30">
                                              <div className="content">
                                                  <h4>The Challange</h4>
                                                  <p>
                                                      Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat. Rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse have to be repudiated and annoyances accepted.
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <h4>What we do?</h4>
                                  <p>
                                      Nam libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.  pleasures have to be repudiated and annoyances accepted. 
                                  </p>
          
                                  <div className="faq-style-one mt-40">
                                      <h3 className="mb-25">Common Question for this project</h3>
                                      <div className="accordion" id="faqAccordion">
                                          <div className="accordion-item">
                                              <h2 className="accordion-header" id="headingOne">
                                                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                      Where can I get analytics help?
                                                  </button>
                                              </h2>
                                              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                                  <div className="accordion-body">
                                                      <p>
                                                          Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item">
                                              <h2 className="accordion-header" id="headingTwo">
                                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                      How much does data analytics costs?
                                                  </button>
                                              </h2>
                                              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                                  <div className="accordion-body">
                                                      <p>
                                                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Cost : {item.charge} Only...
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="accordion-item">
                                              <h2 className="accordion-header" id="headingThree">
                                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                      What kind of data is needed for analysis?
                                                  </button>
                                              </h2>
                                              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                                  <div className="accordion-body">
                                                      <p>
                                                          Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                                      </p>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
          
                                  <div className="services-more mt-50">
                                      <h3>Popular Services</h3>
                                      <div className="row">
                                        {userData.services?.map( (item,index) => (item.enabled == true ? (
                                          <div key={index} className="col-md-6">
                                              <div className="item">
                                                  <img src={`${item.image?.url}`}/>
                                                  <h4><a href="#">{item.name}</a></h4>
                                                  <p>
                                                      {userData.services[1]?.desc}<br/> Charge : {item.charge}
                                                  </p>
                                              </div>
                                          </div> ) : null
                                          ) )}
                                        
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
                
                )) }
          </div>
       

          <div id="portfolio" className="portfolio-style-six-area default-padding-top">
              <div className="shape-animated-right">
                  <img src="assets/img/shape/1.webp" alt="Shape"/>
              </div>
              
              <div className="container">
                  <div className="heading-left">
                      <div className="row align-center">
                          <div className="col-lg-5">
                              <div className="left-info">
                                  <h5 className="sub-title">Recent Work</h5>
                                  <h2 className="title">Look at my portfolio and <br/> give me your feedback</h2>
                                  <div className="heading-shape">
                                      <img src="assets/img/shape/10.png" alt="Shape"/>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-6 offset-lg-1">
                              <div className="right-info">
                                  <div className="fun-factor-default">
                                      <div className="fun-fact">
                                          <div className="counter">
                                              <div className="timer" data-to="15" data-speed="2000">{userData.projects?.length}</div>
                                              <div className="operator"></div>
                                          </div>
                                          <span className="medium">Completed Project</span>
                                      </div>
                                      <div className="fun-fact">
                                          <div className="counter">
                                              <div className="timer" data-to="94" data-speed="2000">94</div>
                                              <div className="operator">%</div>
                                          </div>
                                          <span className="medium">Positive Rating</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>


              <div  className="post-tags share" >
                        <div className="tags">
                                      <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Filter Using Teach Stack :  </h4>
                                      <a onClick={()=> setSelected('All')}>All</a>
                                     <a onClick={()=> setSelected('Reactjs')}>Reactjs</a>
                                     <a onClick={()=> setSelected('Nextjs')}>Nextjs</a>
                                     <a onClick={()=> setSelected('Mern')}>Mern</a>
                                     <a onClick={()=> setSelected('CSS')}>CSS</a>
                                     <a onClick={()=> setSelected('TailwindCSS')}>TailwindCSS</a>
                                
                                  </div></div>
                                 
                                  
              
              <div className="container">
                  <div className="row">
                      <div className="col-md-12 gallery-content mb--15">
                          <div className="magnific-mix-gallery masonary">
                              <div id="portfolio-grid" className="gallery-items colums-3">
                                    {userData.projects?.map((items,index)=>( items.techStack?.some(element => filtertech(selected).includes(element.trim()))?(
                                  <div key={index} className="pf-item">
                                      <div className="overlay-content">
                                          <img src={`${items.image.url}`} alt="thumb"/>
                                          <div className="content">
                                              <div className="title">
                                                  <span>Project</span>
                                                  <h5><a href="#" data-bs-toggle="modal" data-bs-target={`#model${items.image.public_id}`}>{items.title}</a></h5>
                                              </div>
                                              <a href="#" data-bs-toggle="modal" data-bs-target={`#model${items.image.public_id}`}><i className="fas fa-arrow-right"></i></a>
                                          </div>
                                      </div>
                                  </div>):null
                                   
                                 
                                    ))}
                                      
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
      
              {userData.projects?.map((items,index)=>(
              <div key={index} className="modal fade" id={`model${items.image.public_id}`} tabindex="-1" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                      <div className="modal-content">
                          <div className="modal-body">
      
                              <div className="modal-header">
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
      
                              <div className="project-details-items">
                                  <div className="project-thumb">
                                      <img src={`${items.image.url}`} alt="Thumb"/>
                                  </div>
                                  <div className="top-info">
                                      <div className="row">
                                          <div className="col-xl-12 left-info">
                                              <div className="project-info mt-md-50 mt-xs-40 mb-40">
                                                  <div className="content">
                                                      <ul className="project-basic-info">
                                                          <li>
                                                              Project <span>{items.title}</span>
                                                          </li>
                                                          <li>
                                                              Tech Stack <span>{items.techStack}</span>
                                                          </li>
                                                          <li>
                                                              Live & Github <span><a href={items.liveurl}><i className="fas fa-stream"></i></a> &nbsp; &nbsp;<a href={items.githuburl}><i className="fab fa-github"></i></a></span> 
                                                                                
                                                          </li>
                                                          <li>
                                                              Address <span>{userData.about?.address}</span>
                                                          </li>
                                                      </ul>
                                                      <ul className="social">
                                                          <li>
                                                              <h4>Share:</h4>
                                                          </li>
                                                          <li>
                                                              <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                          </li>
                                                          <li>
                                                              <a href="#"><i className="fab fa-twitter"></i></a>
                                                          </li>
                                                          <li>
                                                              <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                                          </li>
                                                          <li>
                                                              <a href="#"><i className="fab fa-instagram"></i></a>
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
                  </div>
              </div>
                ))}
          </div>
            
      
           
          <div id="about" className="about-style-six-area default-padding-top">
              <div className="container">
                  <div className="row align-center">
                      <div className="about-style-six col-lg-5">
                          <div className="thumb">
                              <img className="wow fadeInUp" src={`${userData.about?.avatar.url}`} alt="Thumb"/>
                          </div>
                      </div>
                      <div className="about-style-six col-lg-6 offset-lg-1">
                          <h4 className="sub-title">About Me</h4>
                          <h2 className="title">{userData.about?.subTitle.substring(0,20)} <br/> {userData.about?.subTitle.substring(22,)}</h2>
                          <p>
                            {userData.about?.description}
                          </p>
                         
                      </div>
                  </div>
              </div>
          </div>
            
      
           
          <div id="resume" className="resume-area default-padding-top">
              <div className="shape-right-top-extra">
                  <img src="assets/img/shape/14.png" alt="Shape"/>
              </div>
              <div className="container">
                  <div className="experience-content-box">
                      <div className="row">
                          <div className="col-xl-10 offset-xl-1">
          
                              <div className="nav nav-tabs text-center resume-tab-navs" id="nav-tab" role="tablist">
          
                                  <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                      Skills <strong>01</strong>
                                  </button>
                                  <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                      Experience <strong>02</strong>
                                  </button>
                                  <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                                      Education <strong>03</strong>
                                  </button>
          
                              </div>
          
                              <div className="tab-content resume-tab-content" id="nav-tabContent">
                                    
                                  {/* <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <ul className="biography-table">
                                                  <li>
                                                      <h5>Name</h5>
                                                      <p>
                                                          {userData.about?.name}
                                                      </p>
                                                  </li>
                                                  <li>
                                                      <h5>Birthday</h5>
                                                      <p>
                                                          24 March, 1994
                                                      </p>
                                                  </li>
                                                  <li>
                                                      <h5>Age</h5>
                                                      <p>
                                                          29
                                                      </p>
                                                  </li>
                                                  <li>
                                                      <h5>Address</h5>
                                                      <p>
                                                          {userData.about?.address}
                                                      </p>
                                                  </li>
                                                  <li>
                                                      <h5>Email</h5>
                                                      <p>
                                                          {userData.email}
                                                      </p>
                                                  </li>
                                                  <li>
                                                      <h5>Phone</h5>
                                                      <p>
                                                         {userData.about?.phoneNumber}
                                                      </p>
                                                  </li>
                                                  <li>
                                                      <h5>Skype</h5>
                                                      <p>
                                                          program540
                                                      </p>
                                                  </li>
                                                  <li>
                                                      <h5>Freelance</h5>
                                                      <p>
                                                          Available
                                                      </p>
                                                  </li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div> */}
                                    
                                  <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                                      <div className="row align-center">
                                          <div className="col-lg-12">
                                          
                                              <ul className="skill-table">
                                                 {userData.skills?.map((items,index) => (                                                 
                                                     <li key={index}> 
                                                      <div className="row align-center">
                                                          <div className="col-lg-2">
                                                              <div className="icon">
                                                                  <i className="back"><img src={`${items.image.url}`} /></i>
                                                              </div>
                                                          </div>
                                                          <div className="col-lg-5">
                                                              <h4>{items.name}</h4>
                                                          </div>
                                                          <div className="col-lg-5">
                                                              <div className="progress-box">
                                                                  <h5>{items.percentage}%</h5>
                                                                
                                                                  <div className="progress">
                                                            
                                                                      <div className="progress-bar" role="progressbar" style={{ width: items.percentage + '%' }}></div>
                                                                      </div> 
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </li>
                                                  
                                                 ))}
                                              </ul>
                                               
                                          </div>
                                      </div>
                                  </div>
                                    
          
                                    
                                  <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <ul className="education-table">
                                                {userData.timeline?.map( (item,index) => ( item.forEducation == false ? (
                                                  <li key={index}>
                                                      <h4>  {item.jobTitle}</h4>
                                                      <h5>  {item.company_name} <br></br> {item.jobLocation}</h5>
                                                      
                                                      <span> startDate : {item.startDate.substring(0,10)} <br></br> endDate : {item.endDate.substring(0,10)} </span>
                                                      <p>
                                                                 {item.summary} 
                                                      </p>
                                                  </li> ) : null ))}
                                                  
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                    
          
                                    
                                  <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="nav-id-3">
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <ul className="education-table">
                                                {userData.timeline?.map( (item,index) => ( item.forEducation == true ? (
                                                  <li key={index}>
                                                      <h4>  {item.jobTitle}</h4>
                                                      <h5>  {item.company_name} <br></br> {item.jobLocation}</h5>
                                                      
                                                      <span> startDate : {item.startDate.substring(0,10)} <br></br> endDate : {item.endDate.substring(0,10)} </span>
                                                      <p>
                                                                 {item.summary} 
                                                      </p>
                                                  </li>  ) : null ))}
                                                  
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                                    
          
          
                              </div>
          
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            
      
           
          <div id="pricing" className="pricing-area default-padding-top">
              <div className="container">
                  <div className="pricing-box">
                      <div className="row">
                          <div className="col-lg-5">
                              <div className="heading-left">
                                  <div className="left-info">
                                      <h5 className="sub-title">Pricing</h5>
                                      <h2 className="title">The best pricing plans <br/> to get your best</h2>
                                      <div className="heading-shape">
                                          <img src="assets/img/shape/10.png" alt="Shape"/>
                                      </div>
                                  </div>
                              </div>
                              <div className="save-ammount mt-100 mt-md-50">
                                  <h4>Save up to <strong>50%</strong> with your every order</h4>
                                  <img src="assets/img/shape/2.webp" alt="Thumb"/>
                              </div>
                          </div>
                          <div className="col-lg-6 offset-lg-1">
                            {userData.services?.map( (item,index) => (item.enabled == true ? ( 
                              <div key={index} className="pricing-style-one">
                                  <div className="conntent">
                                      <h4>{item.name}</h4>
                                      <ul>
                                          <li>{item.desc}</li>  
                                      </ul>
                                      <a className="btn mt-25 btn-sm circle btn-theme" href="#contact">Order Now</a>
                                  </div>
                                  <div className="price">
                                      <h2><sup>$</sup>{item.charge.substring(1,)}</h2>
                                      <img src={`${item.image.url}`}/>
                                  </div>
                              </div>):null))}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            
      
           
          <div className="brand-style-one-area text-center default-padding-top">
              <div className="container">
                  <div className="brand-style-one">
                      <div className="row">
                          <div className="col-lg-12">
                              <div className="brand5col swiper">
                                    
                                  <div className="swiper-wrapper align-center">
                                        
                                       {  userData.services?.map((item,index) => (
                                      <div key={index} className="swiper-slide">
                                          <img src={`${item.image.url}`} alt="Thumb"/>
                                      </div>
                                       )) }
                                      
                                        
                                  </div>
                              </div>
                          </div>
                      </div>
                        
                  </div>
              </div>
          </div>
            
      
           
          <div className="testimonial-area default-padding">
      
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                          <div className="site-heading text-center">
                              <h4 className="sub-title">My Expertise</h4>
                              <h2 className="title">Customers feedback</h2>
                              <div className="devider"></div>
                          </div>
                      </div>
                  </div>
              </div>
      
              <div className="container">
                  <div className="testimonial-style-one-box text-center">
                      <div className="row align-center">
                          <div className="col-lg-8 offset-lg-2">
                              <div className="testimonial-style-one-carousel swiper">
                                    
                                  <div className="swiper-wrapper">
                                      {userData.testimonials?.map((items,index) => (  
                                      <div  key={index} className="swiper-slide">
                                          <div className="testimonial-style-one">
                                              
                                              <div className="item">
                                                  
                                                  <div className="thumb">
                                                      <img src={`${items.image.url}`} alt="Thumb"/>
                                                      <div className="shape">
                                                          <img src="assets/img/shape/15.png" alt="Shape"/>
                                                      </div>
                                                  </div>
                                                  <div className="content">
                                                      <p>
                                                          “{items.review}”
                                                      </p>
                                                  </div>
                                                  <div className="provider">
                                                      <div className="info">
                                                          <h4>{items.name}</h4>
                                                          <span>{items.position}</span>
                                                      </div>
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
          </div>
            
      
           
          <div className="work-available-area text-center box-layout bg-light default-padding">
              <div className="shape-right-top-mini">
                  <img src="assets/img/shape/16.png" alt="illustration"/>
              </div>
              <div className="shape-illustration">
                  <img src={`${userData.about?.avatar.url}`} alt="illustration"/>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                          <div className="work-available">
                              <h2 className="title">I'm <strong>available</strong> for <br/> freelance work</h2>
                              <a className="btn btn-md circle btn-theme smooth-menu" href="#contact">Hire me now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
            
      
           
          <div id="blog" className="blog-style-one-area blog-area default-padding-top bottom-less">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8 offset-lg-2">
                          <div className="site-heading text-center">
                              <h4 className="sub-title">News</h4>
                              <h2 className="title">Latest from blog</h2>
                              <div className="devider"></div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
      
                        {userData.projects?.map( (item,index) => ( 
                      <div key={index} className="blog-style-one mb-30 col-lg-4 col-md-6">
                          <div className="item">
                              <div className="thumb">
                                  <a href="#" data-bs-toggle="modal" data-bs-target={`#model-${item._id}`} ><img src={`${item.image.url}`} alt="Thumb"/></a>
                              </div>
                              <div className="info">
                                  <h4>
                                      <a href="#" data-bs-toggle="modal" data-bs-target={`#model-${item._id}`} >{item.description.substring(0,48)}....</a>
                                  </h4>
                                  <div className="meta">
                                      <ul>
                                          <li>
                                              <a href="#"><i className="fas fa-user-circle"></i> {userData.about?.name}</a>
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
      
                {userData.projects?.map( (item,index) => (
              <div key={index} className="modal fade" id={`model-${item._id}`} tabindex="-1" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                      <div className="modal-content">
                          
                          <div className="modal-body">
      
                              <div className="modal-header">
                                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              
                              <div className="blog-single-content">
                                  <div className="thumb">
                                      <a href="#"><img src={`${item.image.url}`}  alt="Thumb"/></a>
                                  </div>
                                  <div className="info">
                                      <div className="meta">
                                          <ul>
                                              <li>
                                                  <a href="#"><i className="fas fa-user-circle"></i> {userData.about?.name}</a>
                                              </li>
                                              <li>
                                                  <a href="#"><i className="fas fa-comments"></i> 26 Comments</a>
                                              </li>
                                              <br/>
                                              {userData.about?.title}
                                          </ul>
                                      </div>
                                  <p>
                                    {userData.about?.subTitle}
                                  </p>
                                    
                                      <blockquote>
                                          {userData.about?.quote}
                                      </blockquote>
                                     
                                     <p>
                                        {userData.about?.description}
                                     </p>
                                      <h3>{item.title}</h3>
                                     
                                      <p>
                                        {item.description}
                                      </p>
                                  </div>
                              </div>
      
                                
                              <div className="post-author">
                                  <div className="thumb">
                                      <img src={`${userData.about?.avatar?.url}`} alt="Thumb"/>
                                  </div>
                                  <div className="content">
                                      <h4><a href="#">{userData.about?.name}</a></h4>
                                     <p>{userData.about?.description}</p>
                                  </div>
                              </div>
                                
      
                                
                              <div className="post-tags share">
                                  <div className="tags">
                                      <h4>Tags: </h4>
                                     {item.techStack?.map((tech,index) => ( <a key={index} href="#">{tech}</a>))}
                                
                                  </div>
      
                                  <div className="social">
                                      <h4>Share:</h4>
                                      <ul>
                                          <li>
                                              <a className="facebook" href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                          </li>
                                          <li>
                                              <a className="twitter" href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                                          </li>
                                          <li>
                                              <a className="pinterest" href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                                          </li>
                                          <li>
                                              <a className="linkedin" href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                          </li>
                                      </ul>  
                                  </div>
                              </div>
                                
      
                                
                              <div className="post-pagi-area">
                                  <div className="post-previous">
                                      <a href="#">
                                          <div className="icon"><i className="fas fa-angle-double-left"></i></div>
                                          <div className="nav-title"> Previus Post <h5>Discovery incommode</h5></div>
                                      </a>
                                  </div>
                                  <div className="post-next">
                                      <a href="#">
                                          <div className="nav-title">Next Post <h5>Discovery incommode</h5></div> 
                                          <div className="icon"><i className="fas fa-angle-double-right"></i></div>
                                      </a>
                                  </div>
                              </div>
                                
      
                                
                              <div className="blog-comments">
                                  <div className="comments-area">
                                      <div className="comments-title">
                                          <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                          <div className="comments-list">
                                    {userData.testimonials?.map( ( items,index) => ( items.enabled == true ? (       
                                              <div key={index} className="comment-item">
                                                  <div className="avatar">
                                                      <img src={`${items.image.url}`}  alt="Author"/>
                                                  </div>
                                                  <div className="content">
                                                      <div className="title">
                                                          <h5>{items.name} <span className="reply"><a href="#"><i className="fas fa-reply"></i> Reply</a></span></h5>
                                                          <span>{items.position}</span>
                                                          <span>28 Feb, 2023</span>
                                    
                                                      </div>
                                                      <p>
                                                        {items.review}
                                                      </p>
                                                  </div>
                                              </div>):(
                                              <div key={index} className="comment-item reply">
                                                  <div className="avatar">
                                                      <img src={`${items.image.url}`}  alt="Author"/>
                                                  </div>
                                                  <div className="content">
                                                      <div className="title">
                                                          <h5>{items.name} <span className="reply"><a href="#"><i className="fas fa-reply"></i> Reply</a></span></h5>
                                                          <span>{items.position}</span>
                                                          <span>15 Mar, 2023</span>
                                                      </div>
                                                     <p>
                                                        {items.review}
                                                        </p>
                                                  </div>
                                              </div> )))} 
                                          </div>
                                      </div>
                                      <div className="comments-form">
                                          <div className="title">
                                              <h3>Leave a comments</h3>
                                          </div>
                                          <form action="#" className="contact-comments">
                                              <div className="row">
                                                  <div className="col-md-6">
                                                      <div className="form-group">
                                                            
                                                          <input name="name" className="form-control" placeholder="Name *" type="text"/>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-6">
                                                      <div className="form-group">
                                                            
                                                          <input name="email" className="form-control" placeholder="Email *" type="email"/>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-12">
                                                      <div className="form-group comments">
                                                            
                                                          <textarea className="form-control" placeholder="Comment"></textarea>
                                                      </div>
                                                      <div className="form-group full-width submit">
                                                          <button className="btn btn-animation dark border" type="submit">Post Comment</button>
                                                      </div>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                                
                          </div>
                      </div>
                  </div>
              </div>
                
                ))}
          </div>
            
      
           
          <div id="contact" className="contact-area shape-less default-padding overflow-hidden">
              <h2 className="text-shade">Contact</h2>
              <div className="container">
                  <div className="contact-content">
                      <div className="row align-center">
      
      
                          <div className="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                              <div className="form-box">
                                  <h2>Let's talk?</h2>
                                  <p>
                                      {userData.about?.quote}
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
      
                          <div className="col-lg-4 offset-lg-1 info">
                              <div className="content">
                                  <ul>
                                      <li className="contact-info-list wow fadeInUp">
                                          <div className="icon">
                                              <i className="fas fa-envelope-open-text"></i>
                                          </div>
                                          <div className="info">
                                              <p>Our Email</p>
                                              <h5>
                                                  <a href={`mailto:${userData.email}`}>{userData.email}</a> 
                                              </h5>
                                          </div>
                                      </li>
                                      <li className="contact-info-list wow fadeInUp" data-wow-delay="300ms">
                                          <div className="icon">
                                              <i className="fas fa-map-marker-alt"></i>
                                          </div>
                                          <div className="info">
                                              <p>Address</p>
                                              <h5>
                                                  {userData.about?.address}
                                              </h5>
                                          </div>
                                      </li>
                                      <li className="contact-info-list wow fadeInUp" data-wow-delay="500ms">
                                          <div className="icon">
                                              <i className="fas fa-headphones-alt"></i>
                                          </div>
                                          <div className="info">
                                              <p>Phone</p>
                                              <h5>
                                                  <a href={`tel:${userData.about?.phoneNumber}`}>{userData.about?.phoneNumber}</a>
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
        
          </>
    );
}

export default Home;
