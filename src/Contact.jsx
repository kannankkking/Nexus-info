import React, { useState } from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsTelephoneForward } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
const Contact = () => {
    const [isOpen, setIsOpen]=useState(false);
    return (
        <div>
            <div className="bg-yellow-300">
                <marquee className="marquee-text">
                    Websites at Rs 6999 ✦ Call Us and Get free ideas for your business growth ✦ 100+ Happy Clients ✦ 4.8/5 Customer Review ✦ 5000+ Active learners
                </marquee>
            </div>
            <div className="bg-gray-700 w-full h-20 text-white flex items-center justify-between px-4">
      <h1 className="text-lg font-semibold">Techy Software</h1>
      
      {/* Desktop Menu */}
     
<ul className="hidden md:flex gap-5 ml-auto items-center">
  <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
  <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
  <li><Link to="#" className="hover:text-yellow-300">Products</Link></li>
  <li className="relative group">
    <Link to="#" className="hover:text-yellow-300">Services</Link>
    <ul className="absolute left-0 hidden group-hover:block bg-gray-800 text-white p-2 rounded-md">
      <li className="hover:bg-gray-600 p-1"><Link to="/digital">Digital Marketing</Link></li>
      <li className="hover:bg-gray-600 p-1"><Link to="/website_development">Website Development</Link></li>
    </ul>
  </li>
  <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
</ul>
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
     
{isOpen && (
  <div className="absolute top-20 left-0 w-full bg-gray-800 text-white p-4 md:hidden">
    <ul className="flex flex-col gap-2">
      <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
      <li><Link to="/about" className="hover:text-yellow-300">About Us</Link></li>
      <li><Link to="#" className="hover:text-yellow-300">Products</Link></li>
      <li className="relative group">
        <Link to="#" className="hover:text-yellow-300">Services</Link>
        <ul className="absolute left-0 hidden group-hover:block bg-gray-800 text-white p-2 rounded-md">
          <li className="hover:bg-gray-600 p-1"><Link to="/digital">Digital Marketing</Link></li>
          <li className="hover:bg-gray-600 p-1"><Link to="/website_development">Website Development</Link></li>
        </ul>
      </li>
      <li><Link to="#contact" className="hover:text-yellow-300">Contact Us</Link></li>
    </ul>
  </div>
)}
    </div>
            <div>
                <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... flex flex-col gap-10 h-[550px]">
                    <h1 className='text-6xl text-center text-white mt-36'>Contact  Our Team</h1>
                    <p className='text-center text-white text-xl'>We are happy to give you a demo or answer any questions that you may have about our services.<br />
                        Please fill out the form below and our team will get back to you within 24 hours</p>
                  <a href='#form'>  <button className='w-28 p-1 bg-transparent border ml-[600px] text-xl text-white rounded-xl hover:bg-white hover:text-black hover:scale-90 transition-all'>Reach Us</button></a>
                </div>
            </div>

            {/* form */}
            <div className='bg-gray-100'>
                <h1 className='mt-3 text-4xl mx-10 mb-4'>Get in Touch</h1>
                <div className="mx-10 form ">
                    <form className="flex flex-col w-96 gap-8 " action="">
                        Name :<input type="text" className="rounded-md h-8 border hover:outline" />
                        Email :<input type="email" className="rounded-md h-8 border hover:outline" />
                        Subject :<input type="text" className="rounded-md h-8 border hover:outline" />
                        Message:<textarea className="h-8 rounded-md border hover:outline" />
                        <a></a><button className="bg-blue-800 p-2 mt-5 rounded-md w-20 text-white hover:-translate-y-2 transition hover:text-black">Send</button>
                    </form>
                </div>
            </div>


            {/* footer */}

            <div>
                <div className="bg-gradient-to-r from-blue-950 to-blue-400 text-white h-48">
                    <h1 className="text-3xl text-center mt-2">Start Building Awesome Website</h1>
                    <div className="flex flex-row gap-6 justify-center mt-10">
                        <a href="/contact">    <button className="bg-transparent rounded-3xl w-28 border p-2  hover:bg-white hover:text-black hover:transition-all hover:scale-75">Get a</button></a>
                        <a href="+918398733171"><button className="bg-transparent rounded-3xl w-32 border p-2  hover:bg-white hover:text-black hover:transition hover:scale-75">Reach Us</button></a>
                    </div>
                </div>
            </div>
            <div className="bg-blue-950 text-white flex flex-col md:flex-row p-4">
                <div className="flex-1 mb-4 md:mb-0">
                    <h1 className="text-3xl">Techy Software</h1>
                    <p className="mt-2">
                        We develop websites for your business, bringing your vision to life and propelling your business into the digital realm.
                    </p>
                    <div className="flex gap-9 text-2xl mt-5">
                    <Link to='https://www.facebook.com/techyitsolutionofficial/'target='_blank'><FaFacebook className="hover:-translate-y-2 transition-all cursor-pointer" /></Link>
                        <Link to='https://www.linkedin.com/company/techy-softwares'target='_blank'><FaLinkedin className="hover:-translate-y-2 transition-all cursor-pointer" /></Link>
                        <Link to='https://www.instagram.com/'><FaInstagramSquare className="hover:-translate-y-2 transition-all cursor-pointer" /></Link>
                    </div>
                </div>

                <div className="flex-1 mb-4 md:mb-0">
                    <h1 className="text-xl mb-3">Company</h1>
                    <ul className="flex flex-col space-y-2">
                        <Link to='/about'><li className="hover:text-sky-300 cursor-pointer">About Us</li></Link>
                        <Link to='/digital'><li className="hover:text-sky-300 cursor-pointer">Services</li></Link>
                        <Link to='/Website_development'><li className="hover:text-sky-300 cursor-pointer">Products</li></Link>
                        <Link to='/contact'><li className="hover:text-sky-300 cursor-pointer">Contact Us</li></Link>
                    </ul>
                </div>

                <div className="flex-1 mb-4 md:mb-0">
                    <h1 className="text-xl mb-3">Services</h1>
                    <ul className="flex flex-col space-y-2">
                        <Link to='/digital'><li className="hover:text-sky-300 cursor-pointer">Digital Marketing</li></Link>
                        <Link to='/Website_development'><li className="hover:text-sky-300 cursor-pointer">Websites</li></Link>
                        <Link to><li className="hover:text-sky-300 cursor-pointer">Creative Design</li></Link>
                    </ul>
                </div>

                <div className="flex-1">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <CiMail /> Still Need Help? Contact Us @ TechySoftware.in
                        </div>
                        <div className="flex items-center gap-2">
                            <BsTelephoneForward /> Direct Phone call: +918398733171
                        </div>
                        <div className="flex items-center gap-2">
                            <FaWhatsapp /> Chat With Us
                        </div>
                    </div></div>
            </div>
        </div>
    )
}
export default Contact;