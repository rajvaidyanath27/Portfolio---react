import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

// const container = (delay) => ({
//   hidden: { opacity: 0, x: -100, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     scale: 1,
//     transition: { delay, duration: 0.8, ease: "easeOut" },
//   },
// });

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span></h1>
        <div className="flex flex-wrap">
            <div className='w-full lg:w-1/2 lg:p-8'>
            <div className='flex items-center justify-center'>
                <motion.img
                // variants={container(0)}
                // initial="hidden"
                // animate="visible"
                whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:-200}}
          transition={{duration:1.5}}
                 className="rounded-2xl" src={aboutImg} alt="about" />
            </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex justify-center lg:justify-start">
                 <motion.p
                // initial={{ opacity: 0, x: 100, scale: 0.9 }}
                // animate={{ opacity: 1, x: 0, scale: 1 }}
                // transition={{
                //   duration: 1.5,
                //   ease: "easeInOut",
                //   delay: 0.5,
                // }}
                whileInView={{opacity:1, x:0}}
          initial={{opacity:0, x:200}}
          transition={{duration:1.5}}
                  className="my-2 mt-20 max-w-xl py-6 text-1.8xl leading-loose">{ABOUT_TEXT}</motion.p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About
