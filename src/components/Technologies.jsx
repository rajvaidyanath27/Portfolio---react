import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl ">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">  
               <DiMongodb className="text-5xl text-green-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">  
               <SiExpress className="text-5xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">  
               <FaReact className="text-5xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">  
               <FaNodeJs className="text-5xl text-green-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">  
               <SiMysql className="text-5xl text-blue-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">  
               <TbBrandFramerMotion className="text-5xl text-red-800"/>
            </div>
            
        </div>
    </div>
  );
};

export default Technologies
