

import onamaStyle from '../../CSS/Onama/Onama.module.css'
import { GiOnTarget } from "react-icons/gi";

import { useRef,useEffect } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css'; 



function Onama() {
  
useEffect(() => {
AOS.init();


}, [])

  

  return (
    <div id='onama'>
        <div className={onamaStyle.main}>

            <div className={onamaStyle.firstDiv}>Ovo je naša priča...</div>

            {/* SECOND DIV */}
            <div className={onamaStyle.secondDiv} >

                <div className={onamaStyle.secondDivText} 
                data-aos="fade-up"
                data-aos-offset="400"
               data-aos-delay="100"
               data-aos-duration="1500"
               data-aos-easing="ease-in-out"
              data-aos-mirror="true"
                  // data-aos-once="false"

                >
                    <div>S<span style={{color:'#d69d32'}}>B</span>T – mesto gde se preciznost susreće </div>
                    <div>sa pouzdanošću.</div>
                    <div>
                         Mi smo domaća firma posvećena izradi kvalitetnog nameštaja po meri i pružanju profesionalnih usluga transporta robe širom Srbije i regiona. 
                         Naša misija je da spojimo funkcionalnost, estetiku i efikasnost – bilo da opremate svoj dom, poslovni prostor ili tražite siguran način da vaša roba stigne na odredište.
                          
                    </div>

                    <div>
                        Istovremeno, naš sektor za transport robe garantuje sigurnu, brzu i efikasnu dostavu – bilo da se radi o lokalnim rutama ili međunarodnim pošiljkama. 
                          Posedujemo pouzdan vozni park i fleksibilne opcije koje se prilagođavaju vašim zahtevima.
                    </div>

                </div>


                 {/* SLIKA */}
                <div className={onamaStyle.secondDivImg}></div>

            </div>

                  {/* THREED DIV */}
            <div className={onamaStyle.threeddDiv}>


                  {/* SLIKA */}
                <div className={onamaStyle.threeddDivImg}></div>

                <div className={onamaStyle.threeddDivText}

               data-aos="fade-up"
                data-aos-offset="400"
               data-aos-delay="100"
               data-aos-duration="1500"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
                  data-aos-once="false"

                
                >
                    <div>DIZAJN  <span style={{color:'#d69d32'}}> DOSTAVA </span> KVALITET </div>
                    <div> </div>
                    <div>
                       
                       U firmi SBT, spoj tradicije i savremenog pristupa čini temelj našeg poslovanja. 
                      Već godinama uspešno poslujemo u dve ključne oblasti – izradi nameštaja po meri i transportu robe, pružajući klijentima kompletnu uslugu od ideje do realizacije.
                     Naš tim čine iskusni majstori, dizajneri i logističari koji razumeju potrebe savremenog tržišta.  
                          
                    </div>

                    <div>
                       Svaki komad nameštaja koji izađe iz naše radionice nosi pečat preciznosti, kvaliteta i estetike. 
                       Bilo da opremate stan, kuću, kancelariju ili lokal, mi stvaramo rešenja koja se uklapaju u vaš prostor i stil života.

                    </div>

                </div>




            </div>


           <div className={onamaStyle.fourDiv}

               data-aos="fade-up"
                data-aos-offset="100"
               data-aos-delay="100"
               data-aos-duration="1500"
               data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                  data-aos-once="true"


           >
            <div><GiOnTarget className={onamaStyle.fourDivIcon}  style={{color:"red"}} /> Naše vrednosti:</div>

            <div>
              Kvalitet – ne pravimo kompromise kada je u pitanju izrada i materijali.
              Pouzdanost – isporuka na vreme i bez stresa.
              Prilagodljivost – svaki klijent je jedinstven, baš kao i naše rešenje.
            </div>

            <div>
             Transparentnost – jasna komunikacija i fer cene.
             U SBT-u ne verujemo u generička rešenja. Verujemo u posvećenost, detalje i dugoročne odnose. 
             Naša najveća nagrada je zadovoljstvo klijenata koji nam se vraćaju – i preporučuju nas dalje.
            </div>
            <div>
              Inovacija – stalno pomeramo granice kako bismo ponudili više. 
              Partnerstvo – ne radimo za klijente, već sa njima.
               Rast – zajedno gradimo uspeh, korak po korak.
            </div>

          </div>



        </div>


    </div>
  )
}

export default Onama