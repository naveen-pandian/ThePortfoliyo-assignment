import React,{useState,useEffect} from "react";
import Header from "./header";
import Footer from "./footer";
import { useLocation } from "react-router-dom";


function BlogSingle(){
    const location= useLocation();
    console.log(location);
    const getss=location.state?.itemss;
    const [itemss,setItemss]=useState(getss);
    useEffect(()=>{
             setItemss(getss);
    },[]
    )
    console.log(itemss);
    return(
        <>
        <Header></Header>
        
    <div  className="breadcrumb-area shadow dark bg-cover text-center text-light"  style={{"backgroundImage": `url(${itemss.image.url})`}}>
        <div  className="container">
            <div  className="row">
                <div  className="col-lg-12 col-md-12">
                    <h1>{itemss.name}</h1>
                    <ul  className="breadcrumb">
                        <li><a href="home-light"><i  className="fas fa-home"></i> Home</a></li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    

    
    <div  className="blog-area single full-blog right-sidebar full-blog default-padding">
        <div  className="container">
            <div  className="blog-items">
                <div  className="row">
                    <div  className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                        <div  className="blog-style-one item">

                            <div  className="blog-item-box">
                                
                                <div  className="thumb">
                                    <a href="#"><img src={`${itemss.image.url}`} alt="Thumb"/></a>
                                </div>
                                <div  className="info">
                                    <div  className="meta">
                                        <ul>
                                            <li>
                                                <i  className="fas fa-user"></i> <a href="#">{itemss.name}</a>
                                            </li>
                                            <li>
                                                <i  className="fas fa-calendar-alt"></i> 25 April, 2023
                                            </li>
                                            <br/>
                                            {itemss.position}
                                        </ul>
                                    </div>
                                    <p>
                                        {itemss.review}
                                    </p>
                                    <p>
                                        New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves. 
                                    </p>
                                    <blockquote>
                                        {itemss.review}
                                    </blockquote>
                                    <p>
                                        Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves. 
                                    </p>
                                    <h3>Conduct replied off led whether?</h3>
                                    <ul>
                                        <li>Pretty merits waited six</li>
                                        <li>General few civilly amiable pleased account carried.</li>
                                        <li>Continue indulged speaking</li>
                                        <li>Narrow formal length my highly</li>
                                        <li>Occasional pianoforte alteration unaffected impossible</li>
                                    </ul>
                                    <p>
                                        Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. Lorem ipsum dolor, sit amet consectetur adipisicing, elit. Iure, laudantium, tempore. Autem dolore repellat, omnis quam? Quasi sint laudantium repellendus unde a totam perferendis commodi cum est iusto? Minima, laborum. 
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                        <div  className="post-author">
                            <div  className="thumb">
                                <img src={`${itemss.image.url}`} alt="Thumb"/>
                            </div>
                            <div  className="info">
                                <h4><a href="#">{itemss.name}</a></h4>
                                <p>
                                    {itemss.review}
                                    </p>
                            </div>
                        </div>
                        

                        
                        <div  className="post-tags share">
                            <div  className="tags">
                                <h4>Tags: </h4>
                                <a href="#">Algorithm</a>
                                <a href="$">Data science</a> 
                            </div>

                            <div  className="social">
                                <h4>Share:</h4>
                                <ul>
                                    <li>
                                        <a  className="facebook" href="#" target="_blank"><i  className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a  className="twitter" href="#" target="_blank"><i  className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a  className="pinterest" href="#" target="_blank"><i  className="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a  className="linkedin" href="#" target="_blank"><i  className="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        

                        
                        <div  className="post-pagi-area">
                            <div  className="post-previous">
                                <a href="#">
                                    <div  className="icon"><i  className="fas fa-angle-double-left"></i></div>
                                    <div  className="nav-title"> Previus Post <h5>Discovery incommode</h5></div>
                                </a>
                            </div>
                            <div  className="post-next">
                                <a href="#">
                                    <div  className="nav-title">Next Post <h5>Discovery incommode</h5></div> 
                                    <div  className="icon"><i  className="fas fa-angle-double-right"></i></div>
                                </a>
                            </div>
                        </div>
                        

                        
                        <div  className="blog-comments">
                            <div  className="comments-area">
                                <div  className="comments-title">
                                    <h3>3 Comments On “Providing Top Quality Cleaning Related Services Charms.”</h3>
                                    <div  className="comments-list">
                                        <div  className="comment-item">
                                            <div  className="avatar">
                                                <img src={`${itemss.image.url}`} alt="Author"/>
                                            </div>
                                            <div  className="content">
                                                <div  className="title">
                                                    <h5>Bubhan Prova <span  className="reply"><a href="#"><i  className="fas fa-reply"></i> Reply</a></span></h5>
                                                    <span>28 Feb, 2022</span>
                                                </div>
                                                <p>
                                                    Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. 
                                                </p>
                                            </div>
                                        </div>
                                        <div  className="comment-item reply">
                                            <div  className="avatar">
                                                <img src={`${itemss.image.url}`} alt="Author"/>
                                            </div>
                                            <div  className="content">
                                                <div  className="title">
                                                    <h5>Mickel Jones <span  className="reply"><a href="#"><i  className="fas fa-reply"></i> Reply</a></span></h5>
                                                    <span>15 Mar, 2022</span>
                                                </div>
                                                <p>
                                                    Delivered ye sportsmen zealously arranging frankness estimable as. Nay any article enabled musical shyness yet sixteen yet blushes. Entire its the did figure wonder off. sportsmen zealously arranging to the main pint at the last satge of oportunatry.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div  className="comments-form">
                                    <div  className="title">
                                        <h3>Leave a comments</h3>
                                    </div>
                                    <form action="#"  className="contact-comments">
                                        <div  className="row">
                                            <div  className="col-md-6">
                                                <div  className="form-group">
                                                    
                                                    <input name="name"  className="form-control" placeholder="Name *" type="text"/>
                                                </div>
                                            </div>
                                            <div  className="col-md-6">
                                                <div  className="form-group">
                                                    
                                                    <input name="email"  className="form-control" placeholder="Email *" type="email"/>
                                                </div>
                                            </div>
                                            <div  className="col-md-12">
                                                <div  className="form-group comments">
                                                    
                                                    <textarea  className="form-control" placeholder="Comment"></textarea>
                                                </div>
                                                <div  className="form-group full-width submit">
                                                    <button  className="btn btn-animation dark border" type="submit">Post Comment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    
                    <div  className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                        <aside>
                            <div  className="sidebar-item search">
                                <div  className="sidebar-info">
                                    <form>
                                        <input type="text"  placeholder="Enter Keyword" name="text"  className="form-control"/>
                                        <button type="submit"><i  className="fas fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div  className="sidebar-item recent-post">
                                <h4  className="title">Recent Post</h4>
                                <ul>
                                    <li>
                                        <div  className="thumb">
                                            <a href="#">
                                                <img src={`${itemss.image.url}`} alt="Thumb"/>
                                            </a>
                                        </div>
                                        <div  className="info">
                                            <div  className="meta-title">
                                                <span  className="post-date">12 Feb, 2020</span>
                                            </div>
                                            <a href="#">Commanded household smallness delivered.</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div  className="thumb">
                                            <a href="#">
                                                <img src={`${itemss.image.url}`} alt="Thumb"/>
                                            </a>
                                        </div>
                                        <div  className="info">
                                            <div  className="meta-title">
                                                <span  className="post-date">05 Jul, 2022</span>
                                            </div>
                                            <a href="#">Future Plan & Strategy for Consutruction </a>
                                        </div>
                                    </li>
                                    <li>
                                        <div  className="thumb">
                                            <a href="#">
                                                <img src={`${itemss.image.url}`} alt="Thumb"/>
                                            </a>
                                        </div>
                                        <div  className="info">
                                            <div  className="meta-title">
                                                <span  className="post-date">29 Aug, 2020</span>
                                            </div>
                                            <a href="#">Melancholy particular devonshire alteration</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div  className="sidebar-item category">
                                <h4  className="title">category list</h4>
                                <div  className="sidebar-info">
                                    <ul>
                                        <li>
                                            <a href="#">national <span>69</span></a>
                                        </li>
                                        <li>
                                            <a href="#">national <span>25</span></a>
                                        </li>
                                        <li>
                                            <a href="#">sports <span>18</span></a>
                                        </li>
                                        <li>
                                            <a href="#">megazine <span>37</span></a>
                                        </li>
                                        <li>
                                            <a href="#">health <span>12</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div  className="sidebar-item gallery">
                                <h4  className="title">Gallery</h4>
                                <div  className="sidebar-info">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={`${itemss.image.url}`} alt="thumb"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={`${itemss.image.url}`} alt="thumb"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={`${itemss.image.url}`} alt="thumb"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={`${itemss.image.url}`} alt="thumb"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={`${itemss.image.url}`} alt="thumb"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={`${itemss.image.url}`} alt="thumb"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div  className="sidebar-item archives">
                                <h4  className="title">Archives</h4>
                                <div  className="sidebar-info">
                                    <ul>
                                        <li><a href="#">Aug 2020</a></li>
                                        <li><a href="#">Sept 2020</a></li>
                                        <li><a href="#">Nov 2020</a></li>
                                        <li><a href="#">Dec 2020</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div  className="sidebar-item social-sidebar">
                                <h4  className="title">follow us</h4>
                                <div  className="sidebar-info">
                                    <ul>
                                        <li  className="facebook">
                                            <a href="#">
                                                <i  className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li  className="twitter">
                                            <a href="#">
                                                <i  className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li  className="pinterest">
                                            <a href="#">
                                                <i  className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li  className="linkedin">
                                            <a href="#">
                                                <i  className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div  className="sidebar-item tags">
                                <h4  className="title">tags</h4>
                                <div  className="sidebar-info">
                                    <ul>
                                        <li><a href="#">Fashion</a>
                                        </li>
                                        <li><a href="#">Education</a>
                                        </li>
                                        <li><a href="#">nation</a>
                                        </li>
                                        <li><a href="#">study</a>
                                        </li>
                                        <li><a href="#">health</a>
                                        </li>
                                        <li><a href="#">food</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </aside>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    
        <Footer></Footer>
        </>
    );
}

export default BlogSingle;