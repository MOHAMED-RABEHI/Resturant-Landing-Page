import React from 'react';

import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import "./Findus.css"
const FindUs = () => (
  <div className='app__wrapper section__padding app__bg' id='contact'>
    <div className='app__wrapper_info'>
     <SubHeading title="Contact"/>
     <h1 className='headtext__cormorant'>Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Lane Ends Bung ,Whatcroft Hall
          Lane,rudheath,cw9 7SG
        </p>
        <p className='p__cormorant'
        style={{color:'#DCCA87',margin:'2rem 0'}}>Opening Hourse</p>
        <p className='p__opensans'>Mon - fri:10:00am - 02:00am</p>
        <p className='p__opensans'>Sat -Sun :10:00am -03:00am</p>
      </div>
      <button className='custom__button' style={{marginTop:"2rem"}}>Visit Us</button>

    </div>
        
 
    <div className='app__wrapper_img'>
      <img src={images.findus} alt="findus" />
        
    </div>
  </div>
);

export default FindUs;
