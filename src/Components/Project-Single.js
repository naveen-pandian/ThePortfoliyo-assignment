import React,{useEffect,useState} from "react";
import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";


function ProjectSingle(){

    const [aboutt,setaboutt]=useState(
        {
           "address": ""
            
    });

    const [oneservv,setoneservv]=useState(
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


    const [twoservv,setTwoservv]=useState(
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
    const gets =location.state?.items;
    const [items,setItems]=useState(gets);
    useEffect(()=>{

        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
        .then(response => response.json())
        .then(response => { setoneservv(response.user.services[1]);
          setTwoservv(response.user.services[5]);
          setaboutt(response.user.about);
      });
             setItems(gets);
    },[]
    )
    console.log(items);
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
                                            Date <span>25 February, 2023</span>
                                        </li>
                                        <li>
                                            Address <span>{aboutt.address}</span>
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
                            <h2>Ongoing Website Maintenance</h2>
                            <p>
                                Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoqu. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum.
                            </p>
                            <ul   className="check-list mt-40">
                                <li>
                                    <h4>WordPress Support</h4>
                                    <p>
                                        Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra.
                                    </p>
                                </li>
                                <li>
                                    <h4>Social Media Management</h4>
                                    <p>
                                        Energy nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div   className="main-content mt-40">
                    
                    <p>
                        Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her.  Facilisis inceptos nec, potenti nostra aenean lacinia varius semper ant nullam nulla primis placerat facilisis. Netus lorem rutrum arcu dignissim at sit morbi phasellus nascetur eget urna potenti cum vestibulum cras. Tempor nonummy metus lobortis. Sociis velit etiam, dapibus. Lectus vehicula pellentesque cras posuere tempor facilisi habitant lectus rutrum pede quisque hendrerit parturient posuere mauris ad elementum fringilla facilisi volutpat fusce pharetra felis sapien varius quisque class convallis praesent est sollicitudin donec nulla venenatis, cursus fermentum netus posuere sociis porta risus habitant malesuada nulla habitasse hymenaeos. Viverra curabitur nisi vel sollicitudin dictum natoque ante aenean elementum curae malesuada ullamcorper. vivamus nonummy nisl posuere rutrum
                    </p>
                    <div   className="row">
                        <div   className="col-lg-6 col-md-6">
                            <img src={`${oneservv.image.url}`} alt="Thumb"/>
                        </div>
                        <div   className="col-lg-6 col-md-6">
                        <img src={`${twoservv.image.url}`} alt="Thumb"/>
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

export default ProjectSingle;