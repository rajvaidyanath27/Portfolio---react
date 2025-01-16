import { CONTACT } from "../constants";


const Footer = () => {
  return (
    <div className="border-b border-neutral-900 pb-10 font-bold leading-loose">
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="flex items-center justify-center gap-7">
           
            {CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Footer
