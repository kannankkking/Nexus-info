import React,{useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsTelephoneForward } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
const w1 = new URL("../src/assets/images/w1.jpg", import.meta.url);
const w2 = new URL("../src/assets/images/w2.jpg", import.meta.url);
const w3 = new URL("../src/assets/images/w3.jpg", import.meta.url);
const w4 = new URL("../src/assets/images/w4.jpg", import.meta.url);
const web = new URL("../src/assets/images/web.jpg", import.meta.url);
const commerece = new URL("../src/assets/images/e-commerce.jpg", import.meta.url);
const web_main = new URL("../src/assets/images/web main.jpg", import.meta.url);


 const Website_development = () => {
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
        <li><a href="/" className="hover:text-yellow-300">Home</a></li>
        <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
        <li><a href="#" className="hover:text-yellow-300">Products</a></li>
        <li className="relative group">
          <a href="#" className="hover:text-yellow-300">Services</a>
          <ul className="absolute left-0 hidden group-hover:block bg-gray-800 text-white p-2 rounded-md">
            <li className="hover:bg-gray-600 p-1"><a href="/digital">Digital Marketing</a></li>
            <li className="hover:bg-gray-600 p-1"><a href="/Website_development">Website Development</a></li>
          </ul>
        </li>
        <li><a href="/contact" className="hover:text-yellow-300">Contact Us</a></li>
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
            <li><a href="/" className="hover:text-yellow-300">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300">Products</a></li>
            <li className="relative group">
              <a href="#" className="hover:text-yellow-300">Services</a>
              <ul className="absolute left-0 hidden group-hover:block bg-gray-800 text-white p-2 rounded-md">
                <li className="hover:bg-gray-600 p-1"><a href="/digital">Digital Marketing</a></li>
                <li className="hover:bg-gray-600 p-1"><a href="/Website_development">Website Development</a></li>
              </ul>
            </li>
            <li><a href="/contact" className="hover:text-yellow-300">Contact Us</a></li>
          </ul>
        </div>
      )}
    </div>
            <div>
                <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... flex flex-col gap-10 h-[550px]">
                    <h1 className='text-6xl text-center text-white mt-36'>Website Development</h1>
                    <p className='text-center text-white text-xl'>Our Web Design and Development services are crafted to transform your online presence into a captivating and high-performance platform.</p>
                <marquee className="text-4xl mt-8 text-white">College Website✦Educational Website ✦Hospital Website✦ Email Marketing✦SEO service</marquee>
                </div>
            </div>

            <div>
                <h1 className='text-4xl mx-6 mt-6'>Website Design and Development</h1>
                <p className='mt-3 mx-6 text-xl'>Our experienced team of designers crafts custom web designs that reflect your brand identity and resonate with your target customers. We prioritize user experience, ensuring seamless navigation and responsiveness across all devices, from desktops to mobiles.</p>
                <div className='flex flex-wrap justify-center gap-14'>
        {[
            { src: w1, title: "Social Media Marketing", desc: "we specialize in crafting user-friendly websites that cater to businesses of all sizes." },
            { src: w2, title: "Social Media Management", desc: "Take your online store to the next level with our comprehensive ecommerce solutions." },
            { src: w3, title: "Personal Branding", desc: "Our website maintenance services ensure that your website remains up-to-date and secure." },
            { src: w4, title: "Content Marketing", desc: "Our website revamp services are designed to breathe new life into outdated websites." },
           
        ].map((service, index) => (
            <div key={index} className='flex flex-col items-center mx-4 mt-4 max-w-xs'>
                <img className='w-full h-auto' src={service.src} alt={service.title} />
                <h2 className='text-center text-xl mt-2'>{service.title}</h2>
                <p className='text-center'>{service.desc}</p>
            </div>
        ))}
    </div>
            
            
            </div>
   {/* website and design */}
            <div className='flex justify-evenly mt-20'>
                <div >
                    <img className="w-full h-56" src={web}/>
                </div>
            <div>
                <h1 className='text-4xl'>Web Development & Design</h1>
                <p>At Techy Software, we specialize in crafting user-friendly websites that cater to businesses of all sizes.<br/> Our team ensures that your website is optimized for both desktop<br/> and mobile devices, providing a seamless experience for potential<br/> customers browsing on-the-go. We employ cutting-edge SEO techniques to boost your website’s<br/> visibility on search engine results pages (SERPs), helping you attract organic<br/> traffic and increase conversions. Whether you’re a brick and mortar store looking to expand your online<br/> presence or a university in need of a modern website, we’ve got you covered.</p>
            </div>
            </div>


            {/* ecommerce solution */}
            <div className='flex justify-evenly mt-20'>
                <div >
                <h1 className='text-4xl mt-14 mx-10'>Ecommerce Solutions</h1>
                <p className='mt-3 mx-10'>Take your traditional store online and watch your sales from 1000 Rs<br/> to 1 lakh with our effective Ecommerce solutions.</p>
                <p className='mt-3 mx-10'>Take your online store to the next level with our comprehensive ecommerce solutions.<br/> From designing captivating web pages to implementing effective<br/>  search engine optimization (SEO) strategies</p>
                </div>
                <div >
                    <img className=" h-64 w-96" src={commerece}/>
                </div>
            </div>


            {/* website mainatanance */}
            <div className='flex justify-evenly mt-20'>
                <div >
                    <img className="w-full h-64" src={web_main}/>
                </div>
            <div>
                <h1 className='text-4xl'>Website Mainatance</h1>
                <p>Keep your website running smoothly with our maintenance services.<br/> We’ll handle the updates and tweaks,<br/> so you can focus on growing your business.<br/> Our team ensures that your website is optimized for both desktop<br/> and mobile devices, providing a seamless experience for potential<br/> Maintaining a strong online presence requires continuous effort. Our website<br/> maintenance services ensure that your website remains up-to-date and secure, <br/>providing peace of mind for business owners. </p>
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
                    <a href='https://www.facebook.com/techyitsolutionofficial/'target='_blank'><FaInstagramSquare className="hover:-translate-y-2 transition-all cursor-pointer" /></a>
                        <a href='https://www.linkedin.com/company/techy-softwares'target='_blank'><FaLinkedin className="hover:-translate-y-2 transition-all cursor-pointer" /></a>
                        <a><FaFacebook className="hover:-translate-y-2 transition-all cursor-pointer" /></a>
                    </div>
                </div>

                <div className="flex-1 mb-4 md:mb-0">
                    <h1 className="text-xl mb-3">Company</h1>
                    <ul className="flex flex-col space-y-2">
                        <a href='/about'><li className="hover:text-sky-300 cursor-pointer">About Us</li></a>
                        <a href='/digital'><li className="hover:text-sky-300 cursor-pointer">Services</li></a>
                        <a><li className="hover:text-sky-300 cursor-pointer">Products</li></a>
                        <a href='/contact'><li className="hover:text-sky-300 cursor-pointer">Contact Us</li></a>
                    </ul>
                </div>

                <div className="flex-1 mb-4 md:mb-0 w-32">
                    <h1 className="text-xl mb-3">Services</h1>
                    <ul className="flex flex-col space-y-2">
                        <a href="/digital"><li className="hover:text-sky-300 cursor-pointer">Digital Marketing</li></a>
                        <a href='/Website_development'><li className="hover:text-sky-300 cursor-pointer">Websites</li></a>
                        <a><li className="hover:text-sky-300 cursor-pointer">Creative Design</li></a>
                    </ul>
                </div>

                <div className="flex-1 ">
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




  )
}
export default Website_development;