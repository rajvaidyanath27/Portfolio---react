import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";

// Container animation for smooth transitions
const container = (delay) => ({
  hidden: { opacity: 0, x: -100, scale: 0.8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Raj Baidyanath
            </motion.h1>

            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              MERN Stack Developer
            </motion.span>
            
            <a href="https://pixahive.com/photo/get-lost-illustration/" target="_blank" rel="noopener noreferrer">
              <motion.button
                   variants={container(1)}
                   initial="hidden"
                   animate="visible"
                    className="bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-purple-500 hover:to-pink-400 transition-all duration-300 mt-3"
                    >
                      My Resume
              </motion.button>
            </a>


            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-light text-5xl tracking-tighter bg-gradient-to-r from-orange-800 via-orange-300 to-pink-400 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: 100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="h-80 rounded"
              src={profilePic}
              alt="Raj"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
