import React from 'react'
import { motion } from 'framer-motion'
import Form from './Form'
import ImageSlider from './ImageSlider'
import AnimatedWordCycle from '@/components/ui/animated-text-circle'

const Hero = () => {
  // Variants for text animation
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  return (
    <motion.div
    id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className='h-full w-full pt-24 pb-10 md:pt-28 bg-white overflow-hidden px-4 sm:px-6'
    >
      <div className='sm:px-6 lg:px-20 inset-0 h-full w-full'>
        <div className='flex flex-col lg:flex-row items-center lg:items-end justify-center gap-8 lg:gap-10 h-full w-full'>

          {/* Left Content */}
          <motion.div
            variants={textVariants}
            className='w-full lg:max-w-[60%] h-full pt-4 md:pt-10 text-center'
          >
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >

              {/* Desktop Heading */}
              <div className=''>
                <motion.h1
                  variants={textVariants}
                  className='text-2xl md:text-4xl md:mt-10 text-center font-bold text-black md:leading-[55px] tracking-tight'
                >
                  Become a High-Paid <br className='md:hidden' />

                  <span className='hidden md:inline px-2 py-1 mx-2 bg-orange-500 rounded-md text-white '>
                    <AnimatedWordCycle
                      words={[
                        "Developer",
                        "Designer",
                        "Programmer",
                        "Engineer",
                        "Coder",
                      ]}
                      interval={3000}
                      className={"text-white"}
                    />
                  </span>
                   <span className='md:hidden px-2 py-1 mx-2 bg-orange-500 rounded-md text-white '>
                    Devloper
                  </span>

                  <br className='hidden md:block' />

                  <span className='text-gray-700'>
                    Non IT Background ?
                  </span>
                </motion.h1>
              </div>

              {/* Mobile Heading */}
              {/* <div className='lg:hidden'>
                <motion.h1
                  variants={textVariants}
                  className='text-[28px] sm:text-4xl leading-[38px] sm:leading-[50px] text-center font-bold text-black tracking-tight'
                >
                  Become a High-Paid Full Stack Developer
                  <span className='text-gray-700 block mt-2'>
                    Non IT Background ?
                  </span>
                </motion.h1>
              </div> */}

            </motion.div>

            {/* Image Slider */}
            <motion.div
              variants={textVariants}
              id='hero-slider'
              className='w-full h-full mt-6'
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
                className='rounded-2xl overflow-hidden shadow-xl border border-orange-200'
              >
                <ImageSlider />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5
            }}
            id='form'
            className='w-full lg:max-w-[40%]'
          >
            <div className='w-full'>
              <Form />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default Hero