import React from 'react'
import style from './Home.module.css'
import Carousel from '../Carousel/Carousel'

import About from '../About/About'

import Team from '../Team/Team'
import Testimonial from '../Testimonial/Testimonial'
import Services from '../Services/Services'
import Opinions from '../Opinions/Opinions'
import Page6 from '../Page6/Page6'
import Quest from '../Quest/Quest'
import Categories from '../Categories/Categories'


export default function Home() {
  
  return <>
  
    <Carousel/>
  
    <About/>
     <Services/>
    <Team/>
    <Testimonial/>
<Opinions/>
<Page6/>  
<Quest/>
<Categories/>
  </>
}
