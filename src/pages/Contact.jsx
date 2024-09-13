import { Suspense, useRef, useState } from 'react'
import { Canvas } from "@react-three/fiber";
import emailjs from '@emailjs/browser'
import Loader from '../components/Loader';
import Fox from '../models/Fox';
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";
import { Link } from 'react-scroll';


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({name: '', email: '', message: ''})
  const { alert, showAlert, hideAlert } = useAlert();
  
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit')
  
    emailjs.send(
      // import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      'service_mpbq65c',
      // import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      'template_yqkso8r',
      {
        from_name: form.name,
        to_name: "Rachana",
        from_email: form.email,
        to_email: 'rachanasen1999@gmail.com',
        message: form.message
      },
      // import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      'j62ZLmLAUTfVfyzZ5'
    ).then(() => {
      setIsLoading(false);
      
      showAlert({ show: true, text: 'Message sent successfully!',
        type: 'success'
      })
      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('idle')
        
        setForm({ name: '', email: '', message: '' })
        
      }, [3000])
      

      // TODO: Hide an alert
    }).catch((error) => { // Add error parameter here
      setIsLoading(false);
      setCurrentAnimation('idle')
      showAlert({ show: true, text: 'I did not recieve your message ',
      type: 'danger'
    })
    });
  };
  
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
 
  return (

<>
<section className="min-h-screen flex flex-col justify-center items-center pt-12 pb-20 bg-white">
    

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-16 w-[80%]"> 
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[40%] flex flex-col bg-gray-100 p-5 shadow-md rounded">
        <h1 className="head-text">Get in Touch</h1>
        <form 
        className="w-full flex flex-col gap-7 mt-10"
        onSubmit={handleSubmit}>
          <label className="text-black-500 font-semibold">
            Name
            <input type="text"
            name="name"
            className="input"
            placeholder="Enter your name"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}

            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input type="email"
            name="email"
            className="input"
            placeholder="Enter your Email"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}

            />
          </label>

          <label className="text-black-500 font-semibold">
            message
            <textarea
            name="message"
            rows={4}
            className="textarea"
            placeholder="Let me know how can i help you!"
            required
            value={form.change}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}

            />
          </label>
          <button
          type="submit"
          className='btn'
          disabled={isLoading}
          onFocus={handleFocus}
          onBlur={handleBlur}
          >
            {isLoading ? 'Sending...' : 'Send message'}

          </button>

        </form>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hi, I’m <span className="text-gradient-to-r from-[#007aff] to-[#02baff]">a Mern Stack Developer</span>
        </h1>
        <p className="text-sm text-gray-600">
        Hi there! 👋 Whether you're an HR professional looking for a talented developer or someone interested in building a stunning website, you're in the right place. I’m passionate about creating unique digital experiences that captivate and convert. Let’s discuss how we can work together to bring your vision to life. Don’t hesitate to reach out!
        </p>
      </div>
   
        
      </div>

     
    </section>
</>




    


    
  )
}

export default Contact