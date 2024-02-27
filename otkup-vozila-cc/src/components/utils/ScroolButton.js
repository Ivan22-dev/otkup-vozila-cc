import React from 'react'; 
import {FaArrowCircleUp} from 'react-icons/fa'; 
import { CustomButton } from './Styles'; 
  
function ScrollButton ({handleClickOpen}){ 
  return ( 
    <CustomButton> 
     <FaArrowCircleUp onClick={handleClickOpen}  
     style={{display:  'inline' }} /> 
    </CustomButton> 
  ); 
} 
  
export default ScrollButton; 