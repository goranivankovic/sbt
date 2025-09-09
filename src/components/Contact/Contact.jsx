import contactStyle from '../../CSS/Contact/Contact.module.css'

import { FaFile ,FaPhoneAlt ,FaInstagram ,FaFacebook  } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";

function Contact() {
  return (
    <div className={contactStyle.main} id='kontakt'>

        <div className={contactStyle.firstDiv}>
            <div> <FaFile className={contactStyle.icons} /> KONTAKT</div>
           <div> <FaPhoneAlt className={contactStyle.icons}  />  066  08 43 00</div>
           <div><FaSquareGooglePlus className={contactStyle.icons}  />  sbt@gmail.com</div>
           <a href="https://www.instagram.com/" target='_blank'><div><FaInstagram className={contactStyle.icons}   />  @sbt123</div></a>  
         <a href="https://www.facebook.com/" target='_blank'><div><FaFacebook  className={contactStyle.icons}  />  /sbt.facebook</div></a>   
  
        </div>

        <div className={contactStyle.contact}>KONTAKT</div>

        <div className={contactStyle.phoneBook}> <span>PHONEBOOK..</span></div>


    </div>
  )
}

export default Contact