
import galerijaStyle from '../../CSS/Nav/Nav.module.css'
import { MdOutlineEmail } from "react-icons/md";
import { FaFile ,FaPhoneAlt ,FaInstagram ,FaFacebook  } from "react-icons/fa";
import SBT from '../../assets/SBT.png'
import { useRef } from "react";


function Nav() {



  return (
    <div className={galerijaStyle.main}>

        <div className={galerijaStyle.firstDiv}>

            <div className={galerijaStyle.navItems}>
                <div> <span>sbt@gmail.com</span></div> 
                <div>/  064  123 45 67  /</div>
                <div>(RADNO VREME 08:00 - 20:00)</div>  
            </div>
            
        </div>

    <div className={galerijaStyle.mainNavbar}>
        
     

<div className={galerijaStyle.mainItems}>
 <img src={SBT} alt="" />
    
    <div>
       <a href="#pocetna">POČETNA</a>
       <a  href="#onama">ONAMA</a>
       <a href="#usluge">USLUGE</a>
       <a href="#transport">TRANSPORT</a>
       <a href="#kontakt">KONTAKT</a>
       <a href="#galerija">GALERIJA</a> 
      <a href="#dekori">DEKORI</a>
   
    </div>

</div>
      
      
      </div>


    </div>
  )
}

export default Nav