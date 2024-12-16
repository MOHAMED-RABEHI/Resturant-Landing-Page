import React from 'react';
import {images} from'../../constants'
import{SubHeading}from"../../components"
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding '>
   <div className='app__wrapper app__wrapper_img app__wrapper__reverse'>
    <img src={images.chef}/>

   </div>
   <div className='app__wrapper_info'>
    <SubHeading title="Chef's Word"/>
    <h1 className='headtext__cormorant'>What We believe in</h1>
     
     <div className='app__chef-content'>
     <div className='app__chef-content_quote'>
      <img src={images.quote} alt="" />
      <p className='p__opensans'> food north asiia and midle china and korea and jbane </p>
     </div>
     <p className='p__opensans'>welcom to the best resturant in china we include 
      many food and jus and orders ttake your time to get best 
      food asiia take care and good eat you are welcom
     </p>
     </div>
     <div className='app__chef-sign'>
      <p>Kevin Luo</p>
      <p className='p__opensans'>chef & Founder</p>
      <img src={images.sign} alt="" />
     </div>
     
   </div>
  </div>
);

export default Chef;
