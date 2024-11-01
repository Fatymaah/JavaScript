import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'

const Hero = () => {
    const transition = {duration:3,type:'spring'} 
  return (
    <div className={css.container}>
        {/* leftside */}
        <div className={css.h_sides}>
            <span className={css.text1}>Skin Protection Cream</span>

            <div className={css.text2}>
            <span>Trendy Collection</span>
            <span>Replenishes your skin with its anti aging agents, moisturises your skin leaving it smoooth</span>
            </div>
        </div>

        {/* middlesection */}
        <div className={css.wrapper}>
            <motion.div 
            initial={{bottom:'2rem'}}
            whileInView={{bottom:'0rem'}}
            transition={transition}
            className={css.blueCircle}></motion.div>
            <motion.img
            initial={{bottom:'-2rem'}}
            whileInView={{bottom:'0rem'}}
            transition={transition} 
            src={HeroImg} alt=""  width={600}/>

            <motion.div
            initial={{right:'4%'}}
            whileInView={{right:'2%'}}
            transition={transition} 
            className={css.cart2}>
                <RiShoppingBagFill/>

                <div className={css.signup}>
                    <span>Sign Up</span>

                    <div>
                    <BsArrowRight/>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* rightside */}
        <div className={css.h_sides}>
            <div className={css.traffic}>
                <span>1.5m</span>
                <span>Monthly Traffic</span>
            </div>
            <div className={css.customers}>
                <span>100k</span>
                <span>Happy Customers</span>
            </div>
        </div>


    </div>
  )
}

export default Hero