import React,{useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsTelephoneForward } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
const s1 = new URL("../src/assets/images/s1.png", import.meta.url);
const s2 = new URL("../src/assets/images/s2.jpg", import.meta.url);
const s3 = new URL("../src/assets/images/s3.jpg", import.meta.url);
const s4 = new URL("../src/assets/images/s4.jpg", import.meta.url);
const s5 = new URL("../src/assets/images/s5.jpg", import.meta.url);
const s6 = new URL("../src/assets/images/s6.jpg", import.meta.url);
const linkedin = new URL("../src/assets/images/linkedin.png", import.meta.url);
const facebook = new URL("../src/assets/images/facebook.png", import.meta.url);
const instagram= new URL("../src/assets/images/instagram.png", import.meta.url);
const seo= new URL("../src/assets/images/seo.png", import.meta.url);

const DigitalMarketing = () => {
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
                    <h1 className='text-6xl text-center text-white mt-36'>Digital Marketing</h1>
                    <p className='text-center text-white text-xl'>Powering Your Digital Success with Unlock Your Digital Potential.Drive growth and maximize your online presence with strategic digital marketing solutions that deliver measurable results.
                    Explore Now</p>
                <marquee className="text-2xl mt-8 text-white">Social Meida Management✦Personal Branding ✦ Content Marketing✦ Email Marketing✦SEO service</marquee>
                </div>
            </div>

            <div className="py-10">
    <h1 className='text-3xl text-center mb-6'>Unlock Your Digital Potential</h1>
    <div className='flex flex-wrap justify-center gap-8'>
        {[
            { src: s1, title: "Social Media Marketing", desc: "Boost engagement and reach with targeted social media." },
            { src: s2, title: "Social Media Management", desc: "Efficiently handle social media platforms for maximum impact." },
            { src: s3, title: "Personal Branding", desc: "Founders use personal branding on social media to promote their brands." },
            { src: s4, title: "Content Marketing", desc: "Engage audiences with compelling and valuable content strategies." },
            { src: s5, title: "Email Marketing", desc: "Reach customers directly with personalized email campaigns." },
            { src: s6, title: "SEO Service", desc: "Increase online visibility and attract more organic traffic." }
        ].map((service, index) => (
            <div key={index} className='flex flex-col items-center mx-4 mt-4 max-w-xs'>
                <img className='w-full h-auto' src={service.src} alt={service.title} />
                <h2 className='text-center text-xl mt-2'>{service.title}</h2>
                <p className='text-center'>{service.desc}</p>
            </div>
        ))}
    </div>
</div>


<div className="py-5">
    <h1 className='text-3xl mt-24 mb-4 mx-5'>Social Media Marketing</h1>
    <p className='text-xl mb-4 mx-5'>
        In today’s digital world, social media isn’t just about sharing photos and updates; it’s a powerful tool for businesses to connect with their audience. Our social media marketing services are designed to elevate your brand’s presence across platforms like Facebook, Instagram, Twitter, and LinkedIn.
    </p>
    <p className='text-xl mb-4 mx-5'>
        We craft engaging content, run targeted ad campaigns, and interact with your audience to build meaningful relationships and drive results. From increasing brand awareness to generating leads and boosting sales, we harness the full potential of social media to help your business thrive in the online landscape. Let’s make your brand shine in the digital spotlight together!
    </p>

    <div className='bg-gradient-to-r from-blue-400 to-blue-950 h-auto py-8'>
        <h1 className='text-center text-3xl text-white mb-4'>Personal Branding</h1>
        <p className='text-center mx-5 text-white'>
            In today’s market, founders and owners are stepping up to personally promote their brands. 
            Instead of traditional marketing, they’re using platforms like Instagram, Facebook, and LinkedIn to share their stories and connect with audiences. 
            This approach not only builds trust but also creates a more authentic and relatable brand image. 
            Personal branding allows for organic growth and stronger engagement with potential customers. It’s a powerful way to showcase the passion and vision behind the brand.
        </p>
        <div className='flex flex-wrap gap-10 justify-center mt-10'> 
            <img className='w-32 sm:w-44' src={linkedin} alt="LinkedIn" />
            <img className='w-32 sm:w-44' src={facebook} alt="Facebook" />
            <img className='w-32 sm:w-44' src={instagram} alt="Instagram" />
        </div>
    </div>
</div>

{/* content marketing */}
<div>
    <h1 className='text-4xl mx-5'>Content Marketing Services</h1>
    <p className='text-xl mt-5 mx-5'>Want to grab attention, engage your audience, and drive results? That’s where our content marketing services come in. We’re not just talking about churning out blog posts or social media updates. We’re talking about creating compelling, valuable content that speaks directly to your audience’s needs and interests. Whether it’s informative articles, captivating videos, or eye-catching infographics, we’ve got you covered. We’ll help you craft a content strategy that builds brand authority, fosters trust, and drives action. Let’s tell your story in a way that resonates and gets results.</p>
</div>

<div>
    <h1 className='text-4xl mx-5 mt-10'>Email Marketing Services</h1>
    <p className='text-xl mt-5 mx-5'>Think email marketing is outdated? Think again. Email marketing remains one of the most effective ways to connect with your audience and drive results. With our email marketing services, we’ll help you craft attention-grabbing campaigns that land right in your customers’ inboxes. From compelling subject lines to personalized content, we’ll make sure your emails stand out and drive action. Whether you’re looking to promote a new product, nurture leads, or re-engage inactive subscribers, we’ve got the expertise to make it happen. Say hello to higher open rates, click-throughs, and conversions with our email marketing magic.</p>
    </div>

    <div className='flex'>
        <div><h1 className='text-4xl mt-10 mx-5'>Professional SEO Services</h1>
        <p className='mt-10 mx-5'>Elevate your online presence with our professional SEO services.<br/> We employ strategic tactics including keyword research, on-page optimization, and link<br/> building to improve your website’s visibility and attract more qualified leads. <br/>Let our team of experts optimize your digital presence and drive success in the digital realm.</p></div>
    
    <div><img className='w-[600px] mt-10' src={seo}/></div>
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
   
)}
export  default DigitalMarketing;