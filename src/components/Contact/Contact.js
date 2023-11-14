import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Toast from '../toast/toast'

//import contact dat
import { contact } from '../../data'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const[loading,setLoading] = useState(false)

  const [toggleToast, setToggleToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastColor, setToastColor] = useState('DEFAULT');

  const showToast = (newMessage, newColor = 'DEFAULT') => {
    setToastMessage(newMessage);
    setToastColor(newColor);
    setToggleToast(true);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const {data} = await axios.post(`https://isaacanasonye-api.onrender.com/api/contact`, formData)
      setLoading(false)
      showToast(data?.message, "SUCCESS");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    } catch (error) {
      showToast(error?.response?.data.message, 'DANGER');
      setLoading(false)
    }
  };

  



  return (
    <section
      className='section px-[1rem] bg-tertiary'
      id='contact'>

<Toast
        setToggleToast={setToggleToast}
        toastColor={toastColor}
        toastMessage={toastMessage}
        toggleToast={toggleToast}
      />


      <div className='container mx-auto'>
        {/* section title */}
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title
                before:content-contact relative
                before:absolute before:opacity-40
                bfore:-top-7 before:-left-40 before:hidden
                before:lg-block
                '>
            Contact me
          </h2>
          <p className='subtitle'>
            I'm open to collaboration and new opportunities.
            If you're interested in working together or just want to connect, feel free to reach out. Let's build something extraordinary!
          </p>
        </div>

        <div className='flex flex-col lg:gap-x-8 lg:flex-row'>
          {/* info */}
          <div className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'>
            {
              contact.map((item, index) => {
                const { icon, title, subtitle, description } = item;
                return <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0'>
                    {icon}
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p className='mb-1'>{subtitle}</p>
                    <p className='text-accent font-normal'>{description}</p>
                  </div>
                </div>
              })
            }
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className='space-y-8 w-full max-w-[780pc]'>
            <div className='flex gap-8'>
              <input name='name' onChange={handleChange} value={formData.name} className='input' placeholder='Your name' type='text' />
              <input name='email' onChange={handleChange} value={FormData.email} className='input' placeholder='Your email' type='text' />
            </div>
            <input name='subject' onChange={handleChange} value={formData.subject} type='text' className='input' placeholder='Subject' />
            <textarea name='message' onChange={handleChange} value={formData.message} className='textarea' placeholder='Your message'>
            </textarea>

            <div className='flex items-center  w-full  '>
              <button disabled={loading} type='submit' className={`${loading?'btn-loading':'btn btn-lg bg-accent hover-bg-accent-hover'}`}>
                Contact me
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </section>
  )
}

export default Contact
