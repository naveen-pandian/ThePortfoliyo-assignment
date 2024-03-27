import './App.css';
import { Routes,Route, BrowserRouter} from 'react-router-dom';
import HomeLight from './Components/Home-Light';
import HomeDark from './Components/Home-Dark';
import HomeSlider from './Components/Home-Slider';
import ProjectSingle from './Components/Project-Single';
import ServiceSingle from './Components/Service-Single';
import BlogSingle from './Components/Blog-Single';
import ErrorPage from './Components/Error-Page';
import React,{useContext} from 'react';
import { ContextApi } from './Api/ContextApi';




function App() {

  return (
    <>

   
      <BrowserRouter basename='/ThePortfoliyo-assignment'>
  
      <Routes>
       
        <Route exact path='/' element={<HomeLight/>} />
        <Route  path='/home-light' element={<HomeLight/>}/>
        <Route  path='/home-dark' element={<HomeDark/>}/>
        <Route  path='/home-slider' element={<HomeSlider/>}/>
        <Route  path='/service-single' element={<ServiceSingle/>}/>
        <Route  path='/project-single' element={<ProjectSingle/>}/>
        <Route  path='/blog-single' element={<BlogSingle/>}/>
        <Route  path='*' element={<ErrorPage/>}/>
      
      </Routes>
      </BrowserRouter>
    
    </>
 
  );
}

export default App;
