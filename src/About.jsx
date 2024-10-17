import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsTelephoneForward } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";


const About = () => {
    const [isOpen, setIsOpen] = useState(false);
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
                            <li><Link to="/contact" className="hover:text-yellow-300">Contact Us</Link></li>
                        </ul>
                    </div>
                )}
                <div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... flex flex-col gap-10 h-[550px]">
                        <h1 className='text-6xl text-center text-white mt-36'>About Us</h1>
                        <p className='text-center text-white text-xl'>At Techy Software, we are a passionate team of tech enthusiasts dedicated to empowering businesses in the digital landscape. Founded in [Year], our mission is to provide innovative solutions that enhance online presence and drive growth.</p>
                    </div>
                </div>
                <div className='text-center'>
                    <h1 className='mt-5 text-2xl'>Our Vision</h1>
                    <p className='text-xl mt-10'>We envision a world where every business, regardless of size, can harness the power of technology
                        to achieve their goals. We strive to be the go-to partner for businesses looking to thrive in an ever-evolving digital environment.</p>
                    <h1 className='mt-5 text-2xl'>Our Mission</h1>
                    <p className='text-xl mt-10'>Our mission is to deliver exceptional software solutions, tailored marketing strategies,
                        and creative designs that not only meet but exceed our clients' expectations. We are committed to providing measurable results that contribute to our clients' success.</p>
                </div>

                <div>
                    <h1 className='text-3xl mt-5 mx-10'>What We Offer</h1>
                    <p className=' mt-5 mx-10'>Web Development: Custom websites that are user-friendly and optimized for search engines.</p>
                    <p className=' mt-5 mx-10'>Digital Marketing: Comprehensive strategies including SEO, social media marketing, and email campaigns</p>
                    <p className=' mt-5 mx-10'>Branding & Design: Creative designs that reflect your brand's identity and values.</p>
                    <p className=' mt-5 mx-10'>Consultation Services: Personalized consultations to guide your business's digital transformation.</p>
                </div>


                <div>
                    <h1 className='text-3xl mt-5 mx-10'>Our Values</h1>
                    <p className=' mt-5 mx-10'>Innovation: We embrace change and encourage new ideas to stay ahead of the curve.</p>
                    <p className=' mt-5 mx-10'>Integrity: We believe in transparency and honesty in all our dealings.</p>
                    <p className=' mt-5 mx-10'>Collaboration: We work closely with our clients, treating them as partners in the process.</p>
                    <p className=' mt-5 mx-10'>Customer Success: Our clients' success is our success; we are dedicated to helping them achieve their goals.</p>
                </div>

                <div>
                    <h1 className='text-3xl mt-5 mx-10'>Why Choose Us?</h1>
                    <h3 className='mt-5 mx-10' >With over [X years] of experience, we have helped [X number] of clients achieve their digital marketing goals. Our team is equipped with the latest tools and techniques to ensure your business stays ahead of the competition.</h3>
                </div>


                <div>
                    <h1 className='text-3xl mt-5 mx-10'>Testimonials</h1>
                    <p className='mt-5 mx-10' >"Techy Software transformed our online presence and helped us reach our target audience effectively.
                        Their team is knowledgeable and supportive!" —..</p>
                </div>

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
            export default About;