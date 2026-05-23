// import Hero from '@/component/Home'
import WhyChooseITCareer from '@/component/home-component/ChooseIT'
import ExploreCourses from '@/component/home-component/ExploreCourses'
import Hero from '@/component/home-component/Hero'
import ImageCarousel from '@/component/home-component/ImageCarousel'
import WhyChooseUs from '@/component/home-component/WhyChooseUs'
import AboutSection from '@/component/home-component/AboutSection'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import React from 'react'
import Testimonials from '@/component/home-component/Testimonials'
import ContactUs from '@/component/home-component/ContactUs'
import PlacementSection from '@/component/home-component/PlacementSection'


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ImageCarousel />
      <ExploreCourses />
      <PlacementSection/>
      <WhyChooseUs />
      {/* <WhyChooseITCareer /> */}
      <AboutSection/>
      <Testimonials/>
      <ContactUs/>
      <Footer />
      {/* <Navbar /> */}
    </div>
  )
}

export default Home