import "./App.css"
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsTelephoneForward } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom"
const angular = new URL("../src/assets/images/Angular-1.svg", import.meta.url);
const android = new URL("../src/assets/images/Android-1.svg", import.meta.url);
const codelgniter = new URL("../src/assets/images/Codelgniter.svg", import.meta.url);
const laravel = new URL("../src/assets/images/laravel-1.svg", import.meta.url);
const magento = new URL("../src/assets/images/Magento.svg", import.meta.url);
const mysql = new URL("../src/assets/images/Mysql.svg", import.meta.url);
const oracle = new URL("../src/assets/images/Oracle.svg", import.meta.url);
const php = new URL("../src/assets/images/Php.svg", import.meta.url);
const Shopify = new URL("../src/assets/images/Shopify-1.svg", import.meta.url);
const swift = new URL("../src/assets/images/Swift-1.svg", import.meta.url);
const Woocommerce = new URL("../src/assets/images/Woocommerce-1.svg", import.meta.url);
const Wordpress = new URL("../src/assets/images/Wordpress.svg", import.meta.url);
const social = new URL("../src/assets/images/social-media-1.png", import.meta.url);
const keyword = new URL("../src/assets/images/keyword.png", import.meta.url);
const graphic = new URL("../src/assets/images/graphic-design.png", import.meta.url);
const profile = new URL("../src/assets/images/profil.jpg", import.meta.url);
import { FaBars, FaTimes } from 'react-icons/fa';



function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="bg-white font-serif">
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
                        <div className="absolute top-20 left-0 w-full bg-gray-800 text-white z-10 p-4 md:hidden">
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
                </div>

                <div className="sliding">

                </div>
                <marquee>
                    <div className="flex justify-center my-4 w-24 mt-14  gap-14 ">

                        <img src={angular} />
                        <img src={android} />
                        <img src={codelgniter} />
                        <img src={laravel} />
                        <img src={magento} />
                        <img src={mysql} />
                        <img src={oracle} />
                    </div>
                </marquee>


                <marquee direction="right">
                    <div className="flex justify-center my-4 w-24 mt-5 h-full  gap-14">
                        <img src={php} />
                        <img src={Shopify} />
                        <img src={swift} />
                        <img src={Woocommerce} />
                        <img src={Wordpress} />
                    </div>
                </marquee>

                {/* our services */}

                <div className="bg-blue-900 w-full py-10">
                    <h1 className="text-white text-3xl text-center">Our Services</h1>
                    <p className="text-white text-xl text-center mb-6">
                        Comprehensive Website Services to Ignite Your Online Success. Empower Your Business with Powerful Online Services from our Website.
                    </p>
                    <div className="flex flex-wrap justify-center">
                        {/* Service Card 1 */}
                        <div className="bg-white w-80 mx-5 rounded-2xl h-72 flex flex-col justify-center mt-6 transition-transform transform hover:scale-105">
                            <img className="w-16 mx-auto" src={social} alt="Digital Marketing" />
                            <h1 className="text-xl text-center mt-4">Digital Marketing</h1>
                            <p className="text-base text-center mx-4 mt-2">
                                Boost your online presence and connect with more people using our smart digital marketing strategies.
                            </p>
                            <Link to ="/digital" className="text-blue-900 text-center mt-4 hover:underline">Explore</Link>
                        </div>

                        {/* Service Card 2 */}
                        <div className="bg-white w-80 mx-5 rounded-2xl h-72 flex flex-col justify-center mt-6 transition-transform transform hover:scale-105">
                            <img className="w-16 mx-auto" src={keyword} alt="Web Development" />
                            <h1 className="text-xl text-center mt-4">Web Development</h1>
                            <p className="text-base text-center mx-4 mt-2">
                                We make attractive, easy-to-use websites that represent your brand well and help you reach more customers online.
                            </p>
                            <Link to="/Website_development" className="text-blue-900 text-center mt-4 hover:underline">Explore</Link>
                        </div>

                        {/* Service Card 3 */}
                        <div className="bg-white w-80 mx-5 rounded-2xl h-72 flex flex-col justify-center mt-6 transition-transform transform hover:scale-105">
                            <img className="w-16 mx-auto" src={graphic} alt="Graphic Design" />
                            <h1 className="text-xl text-center mt-4">Graphic Design</h1>
                            <p className="text-base text-center mx-4 mt-2">
                                We create eye-catching designs that make your brand stand out and leave a lasting impression.
                            </p>
                            <a className="text-blue-900 text-center mt-4 hover:underline">Explore</a>
                        </div>
                    </div>
                </div>

                <div className="relative hover:text-white">
                    <img className="w-full h-auto opacity-65 hover:opacity-100" src={profile} alt="Profile" />

                    <p className="absolute bottom-24 left-4 right-4 text-base md:text-lg md:mt-4 lg:text-xl text-center">
                        At Techy Software, we're here to assist you with all things digital.
                        Our team of young,<br /> forward-thinking individuals stays updated on the latest marketing and sales trends. <br />
                        Let us help grow your business exponentially, by a factor of 10.
                    </p>

                    <div className="absolute bottom-10 left-4 right-4 flex flex-col md:flex-row justify-center gap-2 md:gap-5 text-sm md:text-lg lg:text-xl text-center">
                        <h3>10+ Projects Done</h3>
                        <span className="hidden md:inline">|</span>
                        <h3>10+ Happy Clients</h3>
                       
                    </div>
                </div>



                <marquee className="bg-blue-400 p-3  text-lg">
                    ✦ University/College Website✦Educational Website ✦Hospital Website✦Tourism Website✦Digital Marketing Website✦Design Agency Website✦
                </marquee>

                <div className="flex flex-col md:flex-row mt-10 mb-10">
                    <div className="flex-1 mx-5">
                        <h1 className="text-3xl">Startup and Online Growth Consultation</h1>
                        <p className="mt-3">
                            In this one-on-one session, our founder will personally connect with you to share his expert insights on growing your business.
                            We’ll conduct special research tailored to your niche and offer tips that can propel your business forward.
                            This isn’t just generic advice – it’s actionable, personalized strategies to help you succeed.
                        </p>
                        <h3 className="mt-4">Increase Your Profit from ₹10,000 to ₹10 Lakhs</h3>
                        <p className="mt-4">
                            Ready to take your business to the next level? We’ll show you how to scale your profits from ₹10,000 to ₹10 Lakhs.
                            With our expert guidance, proven strategies, and personalized advice, you’ll be equipped to grow your revenue and achieve your financial goals.
                            Let’s turn your vision into reality!
                        </p>
                    </div>

                    <div className="flex-1 mx-5 mt-7 text-black">
                        <form className="flex flex-col w-full max-w-md" action="">
                            <label className="mt-2">Name:</label>
                            <input type="text" className="rounded-md h-10 border hover:outline" />
                            <label className="mt-2">Email:</label>
                            <input type="email" className="rounded-md h-10 border hover:outline" />
                            <label className="mt-2">Subject:</label>
                            <input type="text" className="rounded-md h-10 border hover:outline" />
                            <label className="mt-2">Message:</label>
                            <textarea className="h-24 rounded-md border hover:outline" />
                            <button className="bg-blue-800 p-2 mt-5 rounded-md w-20 text-white hover:-translate-y-2 transition hover:text-black">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                {/* footer */}
                <div>
                    <div className="bg-gradient-to-r from-blue-950 to-blue-400 text-white h-48">
                        <h1 className="text-3xl text-center mt-2">Start Building Awesome Website</h1>
                        <div className="flex flex-row gap-6 justify-center mt-10">
                            <Link to="/contact">    <button className="bg-transparent rounded-3xl w-28 border p-2  hover:bg-white hover:text-black hover:transition-all hover:scale-75">Get a</button></Link>
                            <Link to="+918398733171"><button className="bg-transparent rounded-3xl w-32 border p-2  hover:bg-white hover:text-black hover:transition hover:scale-75">Reach Us</button></Link>
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
                            <Link to='https://www.facebook.com/techyitsolutionofficial/' target='_blank'><FaFacebook className="hover:-translate-y-2 transition-all cursor-pointer" /></Link>
                            <Link to='https://www.linkedin.com/company/techy-softwares' target='_blank'><FaLinkedin className="hover:-translate-y-2 transition-all cursor-pointer" /></Link>
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
                        <div className="flex flex-col gap-3 ">
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
        </>
    )
}

export default App;
