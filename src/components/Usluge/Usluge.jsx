import uslugeStyle from '../../CSS/Usluge/Usluge.module.css'
import pult from '../../assets/pult.jpg'
import pult2 from '../../assets/room3.jpg'
import kombi from '../../assets/kombi.jpg'

import { useState } from 'react';


function Usluge() {
    const [laz, setlaze] = useState(false)
   const [laz2, setlaze2] = useState(false)
      const [laz3, setlaze3] = useState(false)

  const handleMouseEnter = () => setlaze(true);
  const handleMouseLeave = () => setlaze(false);

  const handleMouseEnter2 = () => setlaze2(true);
  const handleMouseLeave2 = () => setlaze2(false);  

const handleMouseEnter3 = () => setlaze3(true);
const handleMouseLeave3 = () => setlaze3(false);  

  return (
    <div className={uslugeStyle.main} id='usluge'>


        <div className={uslugeStyle.firstDiv}>Usluge koje pružamo... </div>




        <div className={uslugeStyle.secondDiv} >

      
        <div className={uslugeStyle.boxesThreee}>




            <div   className={uslugeStyle.box}

      style={{

          transform: laz ? 'translateX(400px) scale(1.2)' : 'translateX(0) scale(1)',
              zIndex : laz ? 15: 6,
          transition: 'transform 1.5s ease',
        }}

            >
                <img src={pult} alt="" />
                <div>Izrada kuhinja po meri</div>
                <div>
                    Naša radionica specijalizovana je za izradu kuhinjskih plakara koji savršeno odgovaraju vašem prostoru i stilu. 
                    Koristimo kvalitetne materijale, savremene okove i preciznu obradu kako bismo obezbedili dugotrajnost i funkcionalnost. 
                    Svaki element se izrađuje po tačnim dimenzijama, uz mogućnost izbora boja, dekora i rasporeda koji odgovara vašim potrebama.
                </div>

            </div>




            <div   className={uslugeStyle.box}
                  style={{

          transform: laz2 ? 'translateX(530px) scale(1.2)' : 'translateX(0) scale(1)',
          transition: 'transform 1.5s ease',
             zIndex : laz2 ? 15: 5,
        }}
            >
                <img src={pult2} alt="" />
                <div>Plakari po meri</div>
                <div>
                    Izrađujemo plakare koji se savršeno uklapaju u vaš prostor i stil života.
                    Bilo da vam je potreban garderober, ugradni plakar, ili multifunkcionalni ormarić, svaki komad se pravi po tačnim dimenzijama, uz pažljivo birane materijale i završnu obradu.
                     Nudimo širok izbor dekora, mehanizama i rasporeda unutrašnjosti – od kliznih vrata do pametnih sistema za odlaganje.
               </div>

            </div>


          <div   className={uslugeStyle.box}

                style={{

          transform: laz3 ? 'translateX(600px) scale(1.2)' : 'translateX(0) scale(1)',
       zIndex : laz3 ? 15: 4,
          transition: 'transform 1.5s ease',
        }}
          >
                <img src={kombi} alt="" />
                <div>Transport i montaža</div>
                <div>
                   Obezbeđujemo siguran i efikasan transport vašeg nameštaja od proizvodnje do montaže. 
                   Svaki komad se pažljivo pakuje i prenosi uz maksimalnu zaštitu od oštećenja.
                   Naš tim vodi računa o svakom detalju – od utovara do isporuke – kako bi vaš nameštaj stigao tačno, bezbedno i u savršenom stanju.
                 </div>

            </div>    


       </div>     


      
      <div className={uslugeStyle.brojevi}>
        <div  
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ><span> </span> 01</div>

        <div
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave2}
        ><span> </span> 02</div>

        <div
         onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave3}
        ><span> </span> 03</div>

      </div>



    
</div>
   

    </div>
  )
}

export default Usluge