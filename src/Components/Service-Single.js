import React,{useState,useEffect} from "react";
import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";


function ServiceSingle(){
    const [aabout,setAabout]=useState(
        {
           "phoneNumber": ""
            
    });

    const [ooneserv,setOoneserv]=useState(
        {
            "name": "",
            "charge": "",
            "desc": "",
            "enabled":"",
            "_id": "",
            "image": {
                "public_id": "",
                "url": ""
            }
        }
    )


    const [ttwoserv,setTtwoserv]=useState(
        {
            "name": "",
            "charge": "",
            "desc": "",
            "enabled":"",
            "_id": "",
            "image": {
                "public_id": "",
                "url": ""
            }
        }
    )

    const location= useLocation();
    console.log(location);
    const get=location.state?.item;
    const [item,setItem]=useState(get);
    useEffect(()=>{
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
      .then(response => response.json())
      .then(response => { setOoneserv(response.user.services[1]);
        setTtwoserv(response.user.services[5]);
        setAabout(response.user.about);
    });
             setItem(get);
            
    },[]
    )
    console.log(item);

    return(

        <>
        <Header></Header>
         
    <div  className="breadcrumb-area shadow dark bg-cover text-center text-light" style={{"backgroundImage": `url(${item.image.url})`}}>
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12 col-md-12">
                    <h1>{item.name}</h1>
                    <ul  className="breadcrumb">
                        <li><a href="home-light"><i  className="fas fa-home"></i> Home</a></li>
                        <li>Service</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
     

     
    <div  className="services-details-area default-padding">
        <div  className="container">
            <div  className="services-details-items">
                <div  className="row">
                    
                    <div  className="col-lg-8 services-single-content">
                        <div  className="thumb">
                            <img src={`${item.image.url}`}alt="Thumb"/>
                        </div>
                        <h2>Best influencer marketing services</h2>
                        <p>
                            We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology.
                        </p>
                        <div  className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                            <div  className="row">
                                <div  className="col-lg-4 col-md-6">
                                    <div  className="content">
                                        <h4>Included Services</h4>
                                        <ul  className="feature-list-item">
                                            <li>Monthly SEO Task</li>
                                            <li>24/7 Alltime Supporting</li>
                                            <li>Turbo Boosting</li>
                                            <li>Expert Team Members</li>
                                        </ul>
                                    </div>
                                </div>
                                <div  className="col-lg-8 col-md-6 mt-xs-30">
                                    <div  className="content">
                                        <h4>The Challange</h4>
                                        <p>
                                            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4>What we do?</h4>
                        <p>
                            Nam libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias. consequatur aut perferendis doloribus asperiores repellat. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.  pleasures have to be repudiated and annoyances accepted. 
                        </p>

                        <div  className="faq-style-one mt-40">
                            <h3  className="mb-25">Common Question for this project</h3>
                            <div  className="accordion" id="faqAccordion">
                                <div  className="accordion-item">
                                    <h2  className="accordion-header" id="headingOne">
                                        <button  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Where can I get analytics help?
                                        </button>
                                    </h2>
                                    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                        <div  className="accordion-body">
                                            <p>
                                                Bennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div  className="accordion-item">
                                    <h2  className="accordion-header" id="headingTwo">
                                        <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How much does data analytics costs?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo"  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                        <div  className="accordion-body">
                                        <p>
                                                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Cost : {item.charge} Only...
                                                      </p>
                                        </div>
                                    </div>
                                </div>
                                <div  className="accordion-item">
                                    <h2  className="accordion-header" id="headingThree">
                                        <button  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What kind of data is needed for analysis?
                                        </button>
                                    </h2>
                                    <div id="collapseThree"  className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                        <div  className="accordion-body">
                                            <p>
                                                Tennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now minute exact dear open to reaching out.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div  className="services-more mt-50">
                            <h3>Popular Services</h3>
                            <div  className="row">
                                <div  className="col-md-6">
                                    <div  className="item">
                                    <img src={`${ooneserv.image.url}`}/>
                                        <h4><a href="#">{ooneserv.name}</a></h4>
                                        <p>
                                            {ooneserv.desc}<br/> Charge : {ooneserv.charge}
                                        </p>
                                    </div>
                                </div>
                                <div  className="col-md-6">
                                    <div  className="item">
                                    <img src={`${ttwoserv.image.url}`}/>
                                        <h4><a href="#">{ttwoserv.name}</a></h4>
                                       <p>
                                        {ttwoserv.desc}<br/> Charge : {ttwoserv.charge}
                                       </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div  className="col-lg-4 services-sidebar">
                         
                        <div  className="single-widget services-list">
                            <h4  className="widget-title">Services List</h4>
                            <div  className="content">
                                <ul>
                                    <li  className="current-item"><a href="#">App Integration</a></li>
                                    <li><a href="#">Maxed Out Mobile Apps</a></li>
                                    <li><a href="#">Cybill Technologies</a></li>
                                    <li><a href="#">Hopper Technologies</a></li>
                                </ul>
                            </div>
                        </div>
                         
                        <div  className="single-widget quick-contact text-light" style={{"backgroundImage": `url(${item.image.url})`}}>
                            <div  className="content">
                                <i  className="fas fa-phone"></i>
                                <h4>Need any help?</h4>
                                <p>
                                    We are here to help our customer any time. You can call on 24/7 To Answer Your Question.
                                </p>
                                <h2>{aabout.phoneNumber}</h2>
                            </div>
                        </div>
                         
                        <div  className="single-widget brochure">
                            <h4  className="widget-title">Brochure</h4>
                            <ul>
                                <li><a href="#"><i  className="fas fa-file-pdf"></i> Download Brochure </a></li>
                                <li><a href="#"><i  className="fas fa-file-pdf"></i> Company Details </a></li>
                            </ul>
                        </div>
                         
                    </div>

                </div>
            </div>
        </div>
    </div>
     

        <Footer></Footer>
        </>
    );
}

export default ServiceSingle;