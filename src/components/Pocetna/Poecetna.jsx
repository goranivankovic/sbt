
import pocetnaStyle from '../../CSS/Pocetna/Poectna.module.css'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'
import room3 from '../../assets/kuhinja2.jpg'
import room4 from '../../assets/krevet.jpg'

import { motion, useScroll, useTransform } from 'framer-motion';

import { useState } from 'react';
function Poecetna() {
  const [animateDiv, setanimateDiv] = useState(false)


    const [slika, setslika] = useState(room1)

function toogle1() {
    setslika(room1)
  setanimateDiv(!animateDiv)

}

function toogle2() {
    setslika(room2)
  setanimateDiv(!animateDiv)

}

function toogle3() {
  setslika(room3)
  setanimateDiv(!animateDiv)
  
}

function toogle4() {
  setslika(room4)
  setanimateDiv(!animateDiv)
  
}

  return (
    <div className={pocetnaStyle.main} id='pocetna'>

       <div className={pocetnaStyle.firstDiv}>

         <div className={pocetnaStyle.brojevi}>
              <div onClick={toogle1}>1<span></span></div>
              <div onClick={toogle2}>2<span></span></div>
              <div onClick={toogle3}>3<span></span></div>
              <div onClick={toogle4}>4<span></span></div>

         </div>


       </div>


            <motion.div className={pocetnaStyle.secondDiv}
              initial={{ opacity:0}}
          animate={{ x:[-500,0] ,opacity:[0,1]}}
          transition={{
            duration:2.4,
            ease: "easeInOut",
            repeat: 0,
            repeatType: "loop",
            repeatDelay: 2
          }}
            >
               <div>IZRADA <span  style={{color:"#d69d32"}}>NAMEŠTAJA</span>  PO MERI</div>
              <div>IDEJA <span style={{color:"#d69d32"}}>DI</span>ZAJN</div>
              <div><span style={{color:"#d69d32"}}>RE</span>ALIZACIJA</div> 
           
            </motion.div>


      <motion.img 
       transition={{ duration: 1.1 }} 
       animate={{ width: animateDiv ? ['0%','100%'] : '100%' ,opacity: animateDiv ? [0,1] : 1}}
        src={slika}  alt=""  className={pocetnaStyle.imgDiv}/>

    </div>
  )
}

export default Poecetna