import React from 'react'
import Hero from '../Components/Hero'
import Testimonials from '../Components/Testimonials'
import Services from '../Components/Services'
import StandOutDesigns from '../Components/StandOutDesigns'
import BoostYourUI from '../Components/Features'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";


const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <StandOutDesigns/>
      <BoostYourUI/>
      <Testimonials/>
      
    </div>
  )
}

export default Home
