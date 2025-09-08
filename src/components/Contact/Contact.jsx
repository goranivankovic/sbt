import contactStyle from '../../CSS/Contact/Contact.module.css'

import { FaFile ,FaPhoneAlt ,FaInstagram ,FaFacebook  } from "react-icons/fa";
import { FaSquareGooglePlus } from "react-icons/fa6";

function Contact() {
  return (
    <div className={contactStyle.main} id='kontakt'>

        <div className={contactStyle.firstDiv}>
            <div> <FaFile className={contactStyle.icons} /> KONTAKT</div>
            <div> <FaPhoneAlt className={contactStyle.icons}  />  064 123 45 67</div>
            <div><FaSquareGooglePlus className={contactStyle.icons}  />  sbt@gmail.com</div>
            <div><FaInstagram className={contactStyle.icons}   />  @sbt123</div>
            <div><FaFacebook  className={contactStyle.icons}  />  /sbt.facebook</div>
  
        </div>

        <div className={contactStyle.contact} style={{color:'#ffc65dff'}}>KONTAKT</div>

        <div className={contactStyle.phoneBook}> <span>PHONEBOOK..</span></div>


    </div>
  )
}

export default Contact