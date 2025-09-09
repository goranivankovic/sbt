
import { b, div } from 'motion/react-client'
import galerijaStyle from '../../CSS/Galerija/Galerija.module.css'


import kombi from '../../assets/kombi.jpg'
import krevet from '../../assets/krevet.jpg'
import kuhinja from '../../assets/kuhinja.jpg'
import kuhinja2 from '../../assets/kuhinja2.jpg'

import plakar from '../../assets/plakar.jpg'
import plakar2 from '../../assets/plakar2.jpg'
import pult from '../../assets/pult.jpg'

import room2 from '../../assets/room2.jpg'
import room3 from '../../assets/room3.jpg'
import room4 from '../../assets/room4.jpg'

import { useState } from 'react';

import { ImCross } from "react-icons/im";

import { motion, useScroll, useTransform } from 'framer-motion';

function Galerija() {

  const [broj, setBroj] = useState(0)
  const [toogleImg, settoogleImg] = useState(false)
  const niz=[room2,kombi,room3,room4,plakar2,krevet,plakar,kuhinja,kuhinja2,pult];
const [lazAnimate, setlazAnimate] = useState(false)



    const [laz, setlaze] = useState(false)
    const [laz2, setlaze2] = useState(false)
    const [laz3, setlaze3] = useState(false)

    const [laz4, setlaze4] = useState(false)
    const [laz5, setlaze5] = useState(false)
    const [laz6, setlaze6] = useState(false) 

    const [laz7, setlaze7] = useState(false)
    const [laz8, setlaze8] = useState(false)
    const [laz9, setlaze9] = useState(false)  
    const [laz10, setlaze10] = useState(false)      
   

  const handleMouseEnter = () => setlaze(true);
  const handleMouseLeave = () => setlaze(false);

  const handleMouseEnter2 = () => setlaze2(true);
  const handleMouseLeave2 = () => setlaze2(false);  

const handleMouseEnter3 = () => setlaze3(true);
const handleMouseLeave3 = () => setlaze3(false); 



  const handleMouseEnter4 = () => setlaze4(true);
  const handleMouseLeave4 = () => setlaze4(false);

  const handleMouseEnter5 = () => setlaze5(true);
  const handleMouseLeave5 = () => setlaze5(false);  

const handleMouseEnter6 = () => setlaze6(true);
const handleMouseLeave6 = () => setlaze6(false); 



  const handleMouseEnter7 = () => setlaze7(true);
  const handleMouseLeave7 = () => setlaze7(false);

  const handleMouseEnter8 = () => setlaze8(true);
  const handleMouseLeave8 = () => setlaze8(false);  

const handleMouseEnter9 = () => setlaze9(true);
const handleMouseLeave9 = () => setlaze9(false); 

const handleMouseEnter10 = () => setlaze10(true);
const handleMouseLeave10 = () => setlaze10(false)

function incrementRight() {
  if (broj >= 9) {
    setBroj(0)

    setlazAnimate(!lazAnimate)
    
  }else{

      setBroj(broj+1)
         setlazAnimate(!lazAnimate)
  }

  

  
}


function incrementLeft() {

 if( 0 == broj){ 
        setBroj(9)
     setlazAnimate(!lazAnimate)     
  }
  else   if (10 > broj) {
     setBroj(broj-1)
     setlazAnimate(!lazAnimate)  

  }


  
}





  return (
 
    <div id='galerija'>











  
  { !toogleImg ?



    <div className={galerijaStyle.main}>
        <div className={galerijaStyle.firstDiv}>Galerija...</div>


        <div className={galerijaStyle.secondDiv}>

            <div className={galerijaStyle.brojevi}> 

                <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >01<span></span>
                </div>

                 <div
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
                 >02<span></span>
                 </div>

                <div
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
                >03<span></span>
                </div>

                <div
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
                >04<span></span></div>

                <div
              onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
                >05<span></span></div>

                <div
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
                >06<span></span></div>

                 <div
                  onMouseEnter={handleMouseEnter7}
                onMouseLeave={handleMouseLeave7}               
                 >07<span></span></div>

                 <div
               onMouseEnter={handleMouseEnter8}
                onMouseLeave={handleMouseLeave8}   
                 >08<span></span></div>

                <div
               onMouseEnter={handleMouseEnter9}
                onMouseLeave={handleMouseLeave9}  

                >09<span></span></div>

                 <div
               onMouseEnter={handleMouseEnter10}
                onMouseLeave={handleMouseLeave10}  

                 >10<span></span></div>

              </div>


              <div className={galerijaStyle.imgDiv}> 
                <div className={galerijaStyle.i1} 
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(0)}}
               
          style={{

          transform: laz ? 'translateX(-100px) scale(1.4)' : 'translateX(0) scale(1)',
          zIndex : laz ? 15: 2,
          transition: 'transform 1s ease',
        }}
                ><img src={room2} alt=""
               
                
                /></div>

                <div className={galerijaStyle.i2}
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(1)}}
         style={{
          transform: laz2 ? 'translateX(-300px) scale(2)' : 'translateX(0) scale(1)',
           zIndex : laz2 ? 15: 2,
          transition: 'transform 1s ease',
        }}
                ><img src={kombi} alt="" /></div>

                <div className={galerijaStyle.i3}
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(2)}}
                                                        style={{

          transform: laz3 ? 'translateX(-100px) scale(1.4)' : 'translateX(0) scale(1)',
           zIndex : laz3 ? 15: 2,
          transition: 'transform 1s ease',
        }}    

                ><img src={room3} alt="" /></div>

                <div className={galerijaStyle.i4}
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(3)}}
         style={{
          transform: laz4 ? 'translateX(-100px) scale(1.4)' : 'translateX(0) scale(1)',
           zIndex : laz4 ? 15: 2,
          transition: 'transform 1s ease',
        }}

                ><img src={room4} alt="" /></div>

                <div className={galerijaStyle.i5}
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(4)}}
                         style={{
          transform: laz5 ? 'translateX(-300px) scale(2)' : 'translateX(0) scale(1)',
            height: laz5 ? '8rem' :'auto',
           zIndex : laz5 ? 15: 2,
          transition: 'transform 1s ease',
        }}

                ><img src={plakar2} alt="" /></div>

                <div className={galerijaStyle.i6}
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(5)}}
        style={{
          transform: laz6 ? 'translateX(-100px) scale(1.4)' : 'translateX(0) scale(1)',
          height: laz6 ? '8rem' :'auto',
           zIndex : laz6 ? 15: 2,
          transition: 'transform 1s ease',
        }}

                ><img src={krevet} alt="" /></div>

                <div className={galerijaStyle.i7}
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(6)}}
         style={{
          transform: laz7 ? 'translateX(-100px) scale(1.4)' : 'translateX(0) scale(1)',
           zIndex : laz7 ? 15: 2,
          transition: 'transform 1s ease',
        }}

                ><img src={plakar} alt="" /></div>

                <div className={galerijaStyle.i8}
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(7)}}
         style={{
          transform: laz8 ? 'translateX(-100px) scale(1.4)' : 'translateX(0) scale(1)',
           zIndex : laz8 ? 15: 2,
          transition: 'transform 1s ease',
        }}

                ><img src={kuhinja} alt="" /></div>


                <div className={galerijaStyle.i9}
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(8)}}
         style={{
          transform: laz9 ? 'translateX(-100px) scale(1.4)' : 'translateX(0) scale(1)',
           zIndex : laz9 ? 15: 2,
          transition: 'transform 1s ease',
        }}

                
                ><img src={kuhinja2} alt="" /></div>


                <div className={galerijaStyle.i10}
                  onClick={()=>{settoogleImg(!toogleImg) , setBroj(9)}}

             style={{
          transform: laz10 ? 'translateX(-100px) scale(2)' : 'translateX(0) scale(1)',
           zIndex : laz10 ? 15: 2,
          transition: 'transform 1s ease',
        }}           
                
                ><img src={pult} alt="" /></div>
                
                </div>


        </div>

    </div>




:


         <div className={galerijaStyle.toggleDiv}>

              



                 <div className={galerijaStyle.toggleDivImg}>

             


                  <button 
                  onClick={incrementLeft}
                  >{'<'}</button>
                   <motion.img
       transition={{ duration: 1.4 }} 
       animate={{ opacity: lazAnimate ? [0,1] : 1}}

                    src={niz[broj]} alt="" />

                   <button onClick={incrementRight}>{'>'}</button>



                   < ImCross className={galerijaStyle.crossIcon} onClick={()=>{settoogleImg(!toogleImg)}}/>

                 </div>


         </div>






      }











   </div> 
  )
}

export default Galerija