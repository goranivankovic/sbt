
import navStyle from '../../CSS/Nav/Nav.module.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaFile ,FaPhoneAlt ,FaInstagram ,FaFacebook  } from "react-icons/fa";
import SBT from '../../assets/SBT.png'
import { useState } from "react";

import { motion, useScroll, useTransform } from 'framer-motion';
import { div } from 'motion/react-client';


function Nav() {
   const[laz2,setLaz2]=useState(false)



   
function toogle() {
  if (!laz2) {
    let bars =document.getElementById('bars')
bars.style.transition='900ms'
bars.style.transform='rotate(360deg)'
bars.style.transformOrigin='center'

    setLaz2(!laz2)
    setIsOpen(isOpen => !isOpen)
     setShowBars(!showBars)  

  }else{
        let bars =document.getElementById('bars')
bars.style.transition='900ms'
bars.style.transform='rotate(-360deg)'
bars.style.transformOrigin='center'

    setLaz2(!laz2)
    setIsOpen(isOpen => !isOpen)
     setShowBars(!showBars) 

  }

}



  return (

<div>








    <div className={navStyle.main}>

        <div className={navStyle.firstDiv}>

            <div className={navStyle.navItems}>
                <div> <span> sbt@gmail.com </span></div> 
                <div>|  066  08 43 00   |</div>
                <div>(RADNO VREME 08:00 - 20:00)</div>  
            </div>
            
        </div>

    <div className={navStyle.mainNavbar}>
        
     

 <motion.div className={navStyle.mainItems}

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
       <a  href="#onama">O NAMA</a>
       <a href="#usluge">USLUGE</a>
       <a href="#transport">TRANSPORT</a>
        <a href="#dekori">DEKORI</a>
        <a href="#galerija">GALERIJA</a> 
       <a href="#kontakt">KONTAKT</a>
      
     
   
    </div>

</motion.div>
      
      
      </div>


    </div>


 {laz2 ?   

  
     <div>asda</div>

  :""}    









   </div> 
  )
}

export default Nav