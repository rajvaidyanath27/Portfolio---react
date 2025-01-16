import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaFigma } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
   initial: { y: -10},
   animate: {
      y: [20, -20],
      transition: {
         duration: duration,
         ease: "linear",
         repeat: Infinity,
         repeatType: 'reverse',
      }
   }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{ opacity :1,y:0}}
        initial={{ opacity: 0,y: -100}}
        tranistion={{duration:2}}
         className="my-20 text-center text-4xl ">Technologies</motion.h1>
        <motion.div
        whileInView={{opacity: 1,x:0}}
        initial={{opacity: 0,x: -100}}
        tranistion={{duration: 1.5}}
         className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">  
               <DiMongodb className="text-5xl text-green-800"/>
            </motion.div>

            <motion.div
             variants={iconVariants(1.3)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">  
               <SiExpress className="text-5xl text-green-400"/>
            </motion.div>

            <motion.div
             variants={iconVariants(1.6)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">  
               <FaReact className="text-5xl text-cyan-400"/>
            </motion.div>

            <motion.div
             variants={iconVariants(1.9)}
             initial="initial"
             animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">  
               <FaNodeJs className="text-5xl text-green-400"/>
            </motion.div>

            <motion.div
             variants={iconVariants(2.3)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">  
               <SiMysql className="text-5xl text-blue-800"/>
            </motion.div>

            <motion.div
             variants={iconVariants(2.6)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">  
               <TbBrandFramerMotion className="text-5xl text-red-800"/>
            </motion.div>

            <motion.div
             variants={iconVariants(2.8)}
             initial="initial"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">  
               <FaFigma className="text-5xl text-pink-600"/>
            </motion.div>
            
        </motion.div>
    </div>
  );
};

export default Technologies
