import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import HomeLight from './Components/Home-Light';
import HomeDark from './Components/Home-Dark';
import HomeSlider from './Components/Home-Slider';
import ProjectSingle from './Components/Project-Single';
import ServiceSingle from './Components/Service-Single';
import BlogSingle from './Components/Blog-Single';
import ErrorPage from './Components/Error-Page';
import React from 'react';


function App() {
      
  return (
    <>
      <BrowserRouter basename='/ThePortfoliyo-assignment'>
 
      <Routes>
       
        <Route exact path='/' element={<HomeLight/>} />
        <Route exact path='/home-light' element={<HomeLight/>}/>
        <Route exact path='/home-dark' element={<HomeDark/>}/>
        <Route exact path='/home-slider' element={<HomeSlider/>}/>
        <Route exact path='/service-single' element={<ServiceSingle/>}/>
        <Route exact path='/project-single' element={<ProjectSingle/>}/>
        <Route exact path='/blog-single' element={<BlogSingle/>}/>
        <Route exact path='*' element={<ErrorPage/>}/>
      
      </Routes>
      </BrowserRouter>

    </>
 
  );
}

export default App;
