
import navStyle from '../../CSS/Nav/Nav.module.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaFile ,FaPhoneAlt ,FaInstagram ,FaFacebook  } from "react-icons/fa";
import SBT from '../../assets/SBT.png'
import { useState } from "react";

import { motion, useScroll, useTransform } from 'framer-motion';

import { FaChartBar } from "react-icons/fa";

import { ImCross } from "react-icons/im";


function Nav() {
   const[laz2,setLaz2]=useState(false)


const[laz3,setLaz3]=useState(false)
const[laz4,setLaz4]=useState(false)



   
function toogle() {
setLaz3(!laz3)
setLaz4(!laz4)

}



  return (

<div>








    <div className={navStyle.main}>


<div   className={navStyle.slika} >
   <img src={SBT} alt="" />

</div>

{laz3 ?

    <div className={navStyle.nav960}>
       <a onClick={toogle} href="#pocetna">POČETNA</a>
       <a onClick={toogle}  href="#onama">O NAMA</a>
       <a onClick={toogle} href="#usluge">USLUGE</a>
       <a onClick={toogle} href="#transport">TRANSPORT</a>
        <a onClick={toogle} href="#dekori">DEKORI</a>
        <a onClick={toogle} href="#galerija">GALERIJA</a> 
       <a onClick={toogle} href="#kontakt">KONTAKT</a>
      
     
   
    </div>

    : ""}




<motion.svg width="55" className={navStyle.bars} height="43" viewBox="0 0 64 43" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toogle}>
<g id="Frame 3">
<motion.path 
    initial={{ scale: 1 }}
          animate={{ rotate: !laz4 ? 0 : -45 , y : !laz4 ? 0 :10}}
          transition={{ duration: 1.1 }}

id="Line 20" d="M6.5 6H68.5"  stroke="#d69d32"  strokeWidth="7"/>
<motion.line 
    initial={{  scale: 1 }}
          animate={{ rotate : !laz4 ? 0 : 45 }}
          transition={{ duration: 1.1}}

 id="Line 20_2" x1="6" y1="20.5" x2="68" y2="20.5" stroke="#d69d32" strokeWidth="7"/>

{!laz4 ? <motion.path id="Line 20_3" d="M6 35H54" stroke="#f9a825" strokeWidth="7" 


  initial={{ x:0}}
          animate={{ x:[0,20,0] }}
          transition={{
            duration:2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 2
          }}

/> :''}
</g>
</motion.svg> 












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