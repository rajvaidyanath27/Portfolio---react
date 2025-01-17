import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:1.5}} 
        className="my-20 text-center text-5xl">Proj<span className="text-orange-500">ects</span></motion.h1>
        <div>
           {PROJECTS.map((project, index) => (

             <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0,x:-100}}
                  transition={{duration:2}}
                 className="w-full lg:w-1/4">
                 <img src={project.image} width={300} height={300} className="mb-6 rounded-2xl" alt={project.title} />
                </motion.div>

                <motion.div
                  whileInView={{opacity:1, x:0}}
                  initial={{opacity:0,x:100}}
                  transition={{duration:2}}
                 className="w-full max-w-xl lg:w-3/4">
                 <h6 className="mb-2 mt-5 ml-8 font-semibold">{project.title}</h6>
                 <p className="mb-4  mt-8 ml-8 text-neutral-400">{project.description}</p>
                 {project.technologies.map((tech , index) => (
                    <span key={index} className="mr-2 mt-4  ml-8 rounded bg-neutral-900 px-2 py-1 tech-sm font-medium text-purple-800">
                        {tech}
                    </span>
                 ))}
                 </motion.div>

             </div>

           ))};
        </div>
      
    </div>
  )
}

export default Projects
