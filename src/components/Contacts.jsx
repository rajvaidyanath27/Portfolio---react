import { motion } from "framer-motion";
import Swal from 'sweetalert2'

const Contacts = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b0db9507-f7c1-44d6-96b3-9bf577922f18");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    console.log(res);

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent!",
        icon: "success"
      });
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h1
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:1}}
       
         className="my-10 text-center text-5xl">Get <span className="text-orange-500">in Touch</span></motion.h1>
        <motion.h3
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:1.5}}
         className="text-center font-light bg-gradient-to-r from-pink-500 via-slate-700 to-purple-900 bg-clip-text text-2xl tracking-tight text-transparent">Send me a message and lets schedule a call</motion.h3>

<motion.form onSubmit={onSubmit}
 whileInView={{opacity:1, y:0}}
 initial={{opacity:0, y:100}}
 transition={{duration:1.5}}
 className="bg-gradient-to-b from-purple-700  to-orange-800 p-6 rounded-2xl shadow-md  mt-10 max-w-md mx-auto">
  <div className="input-box mb-4">
    <input
      type="text"
      name="firstname"
      className="field w-full p-3 border text-black border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="First Name"
      required
    />
  </div>

  <div className="input-box mb-4">
    <input
      type="text"
      name="lastname"
      className="field w-full p-3 border text-black border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Last Name"
      required
    />
  </div>

  <div className="input-box mb-4">
    <input
      type="email"
      name="email"
      className="field w-full p-3  border-gray-300 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Email"
      required
    />
  </div>

  <div className="input-box mb-4">
    <input
      type="text"
      name="phone"
      className="field w-full p-3 border text-black border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Phone"
      required
    />
  </div>

  <div className="input-box mb-4">
    <textarea
      className="field w-full p-3 border border-gray-300 text-black rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      placeholder="Your Message"
      name="message"
      rows="4"
      required
    ></textarea>
  </div>

  <div className="flex justify-center">
  <button
    type="submit"
    className="w-60 bg-orange-700 text-white py-3  rounded-2xl hover:bg-orange-600 transition duration-200"
  >
    Send Message
  </button>
  </div>

</motion.form>


        
      
    </div>
  )
}

export default Contacts
