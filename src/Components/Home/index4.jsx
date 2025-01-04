import React from "react";
import { FaArrowRight, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Index4 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Animates only once when the element first comes into view
    threshold: 0.2, // Element enters when 20% of it is visible
  });

  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="p-20 bg-white">
      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left Column: Heading and Description */}
        <motion.div
          ref={ref}
          className="flex flex-col justify-center"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-7xl font-bold text-[#3b94a3] mb-8">
            Results{" "}
            <span className="text-black">
              You <br /> Can Measure
            </span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our customers experience incredible value when moving <br /> their
            quality and manufacturing processes to the <br />
            MediSence platform. Read their stories and see the <br />
            transformative value created by these major players in <br />
            the pharma, med device, and nutraceutical industries.
          </p>
          <motion.button
            className="text-white bg-[#3b94a3] px-8 py-3 rounded hover:bg-teal-700 self-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Case Studies <FaArrowRight className="inline-block ml-2" />
          </motion.button>
        </motion.div>

        {/* Right Column: Grid of Divs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            {
              company: "WELLINGTON FOODS",
              stat: "80%",
              desc: "Faster Review and Release",
              icon: <FaArrowUp className="inline-block mr-2" />,
              link: "#",
              color: "text-teal-600",
            },
            {
              company: "CARESTREAM",
              stat: "6-month",
              desc: "Modernization",
              icon: null,
              link: "#",
              color: "text-teal-600",
            },
            {
              company: "FAGRON",
              stat: "100%",
              desc: "Right-first-time Output",
              icon: null,
              link: "#",
              color: "text-teal-600",
            },
            {
              company: "DENDREON",
              stat: "50%",
              desc: "Reduction In Processes",
              icon: <FaArrowDown className="inline-block mr-2" />,
              link: "#",
              color: "text-teal-600",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              ref={ref}
              className="border p-6 rounded shadow flex flex-col justify-between h-full"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, delay: index * 0.2 },
                },
              }}
              whileHover={{ scale: 1.03 }}
            >
              <div>
                <h3 className="text-gray-500 mb-2">{item.company}</h3>
                <p className={`${item.color} text-4xl font-bold`}>
                  {item.icon} {item.stat}
                </p>
                <p className="text-black font-semibold">{item.desc}</p>
              </div>
              <a href={item.link} className="text-pink-600 mt-4 inline-block">
                Read Story <FaArrowRight className="inline-block ml-2" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index4;
