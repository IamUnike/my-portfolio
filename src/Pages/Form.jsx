import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [pending, setPending] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const mailtoLink = `mailto:gideontech21@gmail.com?subject=${encodeURIComponent('In need of your service')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)}`;
      
        setPending(false);
      
        setTimeout(() => {
          window.location.href = mailtoLink;
          setPending(true)
        }, 1000);
      };
      

    return ( 
        <form className="w-5-6 p-4 mt-4 h-80 bg-transparent" onSubmit={handleSubmit}>

            <input type="text" className="cta-input" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />

            <input type="email" className="cta-input" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <textarea type="text" className="cta-input" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />

            <input type="submit" value={pending ? 'Send Message' : 'Sending...'} className="outline-none cursor-pointer text-sm w-3/4 mx-auto block rounded-md p-2 bg-purple-700 text-white duration-300 hover:bg-transparent hover:border-2 hover:border-purple-700 font-poppins" />

        </form>

     );
}
 
export default Form;