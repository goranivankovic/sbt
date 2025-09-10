

import transportStyle from '../../CSS/Transport/Transport.module.css'


import { FaLongArrowAltRight } from "react-icons/fa";
import { useRef,useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Transport() {

useEffect(() => {
AOS.init();


}, [])

  

  return (
    <div className={transportStyle.main} id='transport'>

        <div className={transportStyle.firstDiv}>Transport robe...</div>



        <div className={transportStyle.secondDiv}>

            <div className={transportStyle.secondDivText}>
                <div>S<span style={{color:'#d69d32'}}>B</span>T – Prevoz i transport robe</div>
                <div

                data-aos="fade-up"
                data-aos-offset="400"
               data-aos-delay="100"
               data-aos-duration="1500"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
                data-aos-once="false"

                >
                 SBT je porodična firma koja se bavi prevozom i transportom robe na teritoriji Srbije. 
                  Sa više godina iskustva u drumskom saobraćaju, trudimo se da svakom klijentu pružimo pouzdanu i tačnu uslugu. 
            </div>


             <div>
                Radimo sa manjim kapacitetima, ali sa velikom posvećenošću.
                Svaka pošiljka nam je važna, a odnos sa klijentima gradimo na poverenju i tačnosti.
                 Za više informacija ili dogovor oko transporta, slobodno nas kontaktirajte.
             </div>

        </div>




            <div className={transportStyle.secondDivImg}></div>




</div>

                 <div className={transportStyle.threedDiv}>

                    <div>BRZO</div> <FaLongArrowAltRight className={transportStyle.transportIcons}/>
                    <div>EFIKASNO</div><FaLongArrowAltRight className={transportStyle.transportIcons} />
                    <div>POUZDANO</div><FaLongArrowAltRight className={transportStyle.transportIcons} />
                    <div>SIGURNO</div>

                    
                 </div>
            
       

    </div>
  )
}

export default Transport