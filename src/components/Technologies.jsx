import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaDocker } from "react-icons/fa";

import { motion } from "framer-motion";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";

const iconVariants = (duration) => ({
   initial: { y: -10},
   animate: {
      y: [15, -15],
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
        initial={{ opacity: 0,y: -150}}
        tranistion={{duration:1.5}}
         className="my-20 text-center text-5xl ">Tech<span className="text-orange-500">nologies</span></motion.h1>
        
        <motion.div
  whileInView={{ opacity: 1, x: 0 }}
  initial={{ opacity: 0, x: -100 }}
  transition={{ duration: 1.5 }}
  className="flex flex-col items-center justify-center gap-4"
>
  {/* Row 1: 6 Icons */}
  <div className="flex flex-wrap justify-center gap-4">
    <motion.div variants={iconVariants(1)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <DiMongodb className="text-5xl text-green-800" />
    </motion.div>
    <motion.div variants={iconVariants(1.3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <SiExpress className="text-5xl text-green-400" />
    </motion.div>
    <motion.div variants={iconVariants(1.6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <FaReact className="text-5xl text-cyan-400" />
    </motion.div>
    <motion.div variants={iconVariants(1.9)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <FaNodeJs className="text-5xl text-green-400" />
    </motion.div>
    <motion.div variants={iconVariants(2.3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <SiMysql className="text-5xl text-blue-800" />
    </motion.div>
    <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <TbBrandFramerMotion className="text-5xl text-red-800" />
    </motion.div>
  </div>

  {/* Row 2: 4 Icons */}
  <div className="flex flex-wrap justify-center gap-4">
    <motion.div variants={iconVariants(2.6)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <FaDocker className="text-5xl text-cyan-400" />
    </motion.div>
    <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <SiRedux className="text-5xl text-blue-600" />
    </motion.div>
    <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <SiTailwindcss className="text-5xl text-cyan-400" />
    </motion.div>
    <motion.div variants={iconVariants(2.8)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
      <SiNextdotjs className="text-5xl text-gray-200" />
    </motion.div>
  </div>
</motion.div>

    </div>
  );
};

export default Technologies
