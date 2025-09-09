
import footerStyle from '../../CSS/Footer/Footer.module.css'

import { FaInstagram ,FaFacebook  } from "react-icons/fa";

import { useState } from 'react';

function Footer() {

  const [datum, setDatum] = useState(new Date().getFullYear())

  return (
    <div className={footerStyle.main}>



        <div className={footerStyle.firstDiv}>

            <div>S<span style={{color:"#d69d32"}}>B</span>T</div>

            <div>
                <a href="https://www.instagram.com/" target='_blank'> <FaInstagram /> </a> 
                <a href="https://www.facebook.com/" target='_blank'> <FaFacebook /> </a> 
              
               
               </div>
          
            
            </div>


        <div className={footerStyle.secondDiv}>
         <a href="https://ma-go.org/" target='_blank'><div> copyright @ {datum} ma<span style={{color:"#d69d32"}}>G</span>o</div></a> 
          <div>All rights reserved</div>

        </div>
 


    </div>
  )
}

export default Footer