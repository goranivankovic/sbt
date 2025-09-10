
import navStyle from '../../CSS/Nav/Nav.module.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaFile ,FaPhoneAlt ,FaInstagram ,FaFacebook  } from "react-icons/fa";
import SBT from '../../assets/SBT.png'
import { useState } from "react";

import { motion, useScroll, useTransform } from 'framer-motion';
import { FaBarsStaggered } from "react-icons/fa6";

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

</div>

{laz3 ?

    <div className={navStyle.nav960}>
       <a href="#pocetna">POČETNA</a>
       <a  href="#onama">O NAMA</a>
       <a href="#usluge">USLUGE</a>
       <a href="#transport">TRANSPORT</a>
        <a href="#dekori">DEKORI</a>
        <a href="#galerija">GALERIJA</a> 
       <a href="#kontakt">KONTAKT</a>
      
     
   
    </div>

    : ""}



   {!laz4 ? <FaBarsStaggered style={{color:"#d69d32"}} className={navStyle.bars} onClick={toogle}/>  : 
     <ImCross  className={navStyle.bars} onClick={toogle} /> }
             


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