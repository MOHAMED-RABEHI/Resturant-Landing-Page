import React from 'react';
import {images} from'../../constants';
import './Header.css';
import {SubHeading} from'../../components'

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
     <div className='app__wrapper_info'>
     <SubHeading title="Chase the new flavour"/>
     <h1 className='app__header-h1'>THE KEY TO FINE DINING</h1>
       <p className='p__opensans' style={{margin:'2rem 0'}}>
       Sit tellus lobortis sed senectus vivamus molestie .
        Condimentum volutpat morbi facilisisquam scelerse
        spaien.Et,penatibus alinquam amet tellus
        
       </p>
       <button type='button' className='custom__button'>Explor Menu</button>
      </div>

     <div className='app__wrapper_img'>
      <img src={images.welcome} alt="" className='' />

     </div>
     
  </div>
  
  
);

export default Header;
