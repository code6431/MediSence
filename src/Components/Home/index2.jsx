import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Index2 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  const textControls = useAnimation();
  const [textRef, textInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
    if (textInView) {
      textControls.start('visible');
    }
  }, [controls, inView, textControls, textInView]);

  const movementPercentages = [60, 100, 70, 120]; // Increased movement percentages

  return (
    <div className="bg-white overflow-hidden relative mb-10">
      <motion.div
        className="bg-gray-600 flex justify-between items-center p-9 relative"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0, transition: { duration: 2 } }, // Slowed down to 2 seconds
        }}
      >
        <div className="absolute top-2 left-4 text-white font-semibold text-lg">
          Trusted By
        </div>

        {['company1.png', 'company2.png', 'company3.png', 'company4.png', 'company5.png'].map((src, index) => (
          <motion.img
            key={index}
            src={`/Images/${src}`}
            alt={`Company ${index + 1}`}
            className="h-10 p-2 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 150 }} // Slower spring effect
          />
        ))}
      </motion.div>

      <motion.div
        className="p-8 text-center grid grid-cols-2 gap-8"
        ref={textRef}
        initial="hidden"
        animate={textControls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 1.5 } }, // Slowed down to 1.5 seconds
        }}
      >
        <div className="text-left ml-[7rem] mt-[4rem]">
          <h1 className="text-7xl font-bold">Testing That</h1>
          <h1 className="text-6xl leading-[5rem] font-bold text-teal-600">Ensures Health <br /> Security</h1>
          <p className="text-gray-600 mt-4">
            Delivering accurate and timely test results is crucial <br /> in the healthcare industry. Our Medicare testing <br /> services provide reliable results, ensuring <br /> the best care and compliance with regulations.
          </p>
        </div>

        <div className="flex flex-col justify-center items-start space-y-8 mt-[4rem] ml-[7rem]">
          {['Accuracy', 'Speed', 'Reliability', 'Compliance'].map((text, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              initial="hidden"
              animate={textControls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.9, duration: 1.2 } }, // Slowed down with longer delays
              }}
            >
              <div className="w-80 h-[4rem] bg-gray-300 relative rounded-full">
                <motion.div
                  className={`w-1/4 h-full rounded-full ${index % 2 === 0 ? 'bg-purple-600' : 'bg-pink-500'}`}
                  animate={{
                    x: ['0%', `${movementPercentages[index]}%`, '0%'], // Increased movement percentages
                  }}
                  transition={{
                    x: {
                      repeat: Infinity, // Infinite repeat
                      repeatType: 'loop', // Loop the animation
                      duration: 2, // Duration of the full loop
                      ease: 'easeInOut' // Smooth easing
                    },
                  }}
                />
              </div>
              <p className={`${index % 2 === 0 ? 'text-purple-600' : 'text-pink-500'} font-bold flex items-center`}>
                <ArrowRightIcon className="h-5 w-5 mr-2" /> {text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="fixed right-[-8rem] bottom-7 mb-[8rem] mr-8"
        initial="hidden"
        animate={controls}
        whileHover={{ scale: 1.05, rotate: -90 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 2 } }, // Slowed down to 2 seconds
        }}
      >
        <button className="bg-yellow-400 p-2 transform rotate-90 font-bold flex items-center rounded-lg">
          Connect with Our Team <ArrowRightIcon className="h-[20%] w-3 ml-2" />
        </button>
      </motion.div>
    </div>
  );
};

export default Index2;
