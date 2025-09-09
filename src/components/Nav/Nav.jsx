
import galerijaStyle from '../../CSS/Nav/Nav.module.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaFile ,FaPhoneAlt ,FaInstagram ,FaFacebook  } from "react-icons/fa";
import SBT from '../../assets/SBT.png'
import { useRef } from "react";

import { motion, useScroll, useTransform } from 'framer-motion';


function Nav() {



  return (
    <div className={galerijaStyle.main}>

        <div className={galerijaStyle.firstDiv}>

            <div className={galerijaStyle.navItems}>
                <div> <span>sbt@gmail.com</span></div> 
                <div>/  066  08 43 00  / </div>
                <div>(RADNO VREME 08:00 - 20:00)</div>  
            </div>
            
        </div>

    <div className={galerijaStyle.mainNavbar}>
        
     

 <motion.div className={galerijaStyle.mainItems}

              initial={{ opacity:0}}
              animate={{ x:[500,0] ,opacity:[0,1]}}
          transition={{
            duration:2.4,
            ease: "easeInOut",
            repeat: 0,
            repeatType: "loop",
            repeatDelay: 2
          }}>
 <motion.img 
               initial={{ x:0,rotate:0}}
              animate={{ x:[0,-40,0] ,rotate:[0,-10,0]}}
          transition={{
            duration:2.4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2
          }}
 src={SBT} alt="" />
    
    <div>
       <a href="#pocetna">POČETNA</a>
       <a  href="#onama">ONAMA</a>
       <a href="#usluge">USLUGE</a>
       <a href="#transport">TRANSPORT</a>
       <a href="#kontakt">KONTAKT</a>
       <a href="#galerija">GALERIJA</a> 
      <a href="#dekori">DEKORI</a>
   
    </div>

</motion.div>
      
      
      </div>


    </div>
  )
}

export default Nav