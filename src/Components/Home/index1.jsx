import React from 'react';
import { motion } from 'framer-motion';

const Index1 = () => {
  return (
    <div className="relative flex flex-col min-h-screen p-4 bg-gray-800 mt-6 overflow-x-hidden overflow-y-hidden">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center mb-8 mt-11"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <motion.div
          className="inline-block text-gradient text-4xl md:text-6xl mt-11"
          style={{
            backgroundImage: 'linear-gradient(132deg, #FF5733, #33C1FF)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        >
          Advanced Healthcare
        </motion.div>

        <hr className="border-t-1 border-gray-300 mx-auto my-4" style={{ width: '60%' }} />

        <motion.div
          className="relative inline-block text-lg md:text-5xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        >
          <span
            className="absolute inset-0 text-transparent"
            style={{
              WebkitTextStroke: '0.5px #708090',
              lineHeight: '1.2',
              display: 'block'
            }}
          >
            Solutions for You
          </span>
          <span
            className="relative text-transparent"
            style={{
              color: 'transparent',
            }}
          >
            Solutions for You
          </span>
        </motion.div>
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-[-5rem] ml-[4rem]">
        <div className="md:w-1/2 text-center md:text-left">
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed md:leading-loose">
            Discover top-notch medical services, personalized care<br /> plans, and innovative treatments designed to enhance<br /> your well-being. Experience comprehensive healthcare <br /> solutions with our state-of-the-art technology and expert<br /> medical professionals.
          </p>
          <motion.button
            className="mt-6 ml-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-lg shadow-lg hover:from-teal-400 hover:to-blue-500 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </div>

        <div className="md:w-1/2 flex relative right-[20rem] top-[-2rem]">
          <motion.img
            src='/Images/graph.webp'
            alt="Graph"
            className='relative top-[1.7rem] left-[30rem]'
            style={{ width: '70%', height: '80%' }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          />
          <motion.img
            src='/Images/patter1.webp'
            alt="Pattern"
            className='relative top-[20rem] right-11'
            style={{ width: '90%', height: '60%' }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          />
          <motion.img
            src='/Images/Doctor.webp'
            alt="Doctor"
            className='relative right-[32rem] top-11'
            style={{ width: '45%', height: '45%' }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
          />
          <motion.img
            src='/Images/capsul.webp'
            alt="Capsule"
            className='relative right-[69rem] top-[20rem]'
            style={{ width: '70%', height: '50%' }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index1;
