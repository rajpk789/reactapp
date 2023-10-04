import React from 'react'
import { AiOutlineBank } from "react-icons/ai";
import { AiOutlineBarcode } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
function page() {
  return (
    <div className=''>
      <div className="bg-blend-overlay bg-black bg-opacity-50 py-40 bg-no-repeat bg-cover bg-right bg-[url(/01.png)]">
        <h1 className="text-5xl font-bold text-white text-center">Contact Us</h1>
      </div>
      <div className="bg-black text-white px-4 md:px-20">
        <div className="md:px-20 bg-black py-5 text-center text-white">
          <h1 className="font-extrabold text-4xl my-10">Contact <span className="text-orange-300 italic">Us</span></h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center bg-white text-black p-7 hover:-translate-y-2 duration-300">
            <div className="text-orange-300 text-6xl justify-center flex">
              <AiOutlineMessage />
            </div>
            <h1 className="text-xl font-bold">Chat With Us</h1>
            <p className="py-2">Chat with us anytime! We're always happy to help you resolve any questions or issues</p>
            <h1 className="font-bold text-lg py-3">Live Chats</h1>
          </div>
          <div className="text-center bg-white text-black p-7 hover:-translate-y-2 duration-300">
            <div className="text-orange-300 text-6xl justify-center flex">
              <AiOutlineBank />
            </div>
            <h1 className="text-xl font-bold">Completed Projects</h1>
            <p className="py-2">We are a team of experts whose goal is to create something that you love.</p>
            <h1 className="font-bold text-lg py-3">Know More</h1>
          </div>
          <div className="text-center bg-white text-black p-7 hover:-translate-y-2 duration-300">
            <div className="text-orange-300 text-6xl justify-center flex">
              <AiOutlineBarcode />
            </div>
            <h1 className="text-xl font-bold">Customer Supports</h1>
            <p className="py-2">We are committed to providing you the best support possible.</p>
            <h1 className="font-bold text-lg py-3">Call Now</h1>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
      <div className="bg-black text-white md:px-20">
        <div className="md:px-20 bg-black py-5 text-center text-white">
          <p className="text-orange-300">GET IN TOUCH</p>
          <h1 className="font-extrabold text-4xl my-10">Have A Questions Drop <span className="text-orange-300 italic">Us Line!</span></h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className=" bg-white text-black col-span-2 p-7 hover:-translate-y-2 duration-300">
            <div className="grid grid-cols-2 gap-8 ">
              <div className="">
                <input className='bg-gray-200 py-3 px-1 w-full ps-3' placeholder='Your Name*' type="text" />
              </div>
              <div className="">
                <input className='bg-gray-200 py-3 px-1 w-full ps-3' placeholder='Your Phone*' type="text" />
              </div>
              <div className="">
                <input className='bg-gray-200 py-3 px-1 w-full ps-3' placeholder='Email Address*' type="text" />
              </div>
              <div className="">
                <input className='bg-gray-200 py-3 px-1 w-full ps-3' placeholder='Subject*' type="text" />
              </div>
            </div>
            <div className="my-8">
              <textarea name="" id="" rows={10} className="bg-gray-200 ps-3 w-full" placeholder='Your massage*'></textarea>
            </div>
            <p className="">The captcha code is: <span className="p-3 italic bg-black text-white">d74qn</span></p>
            <p className="pt-4">Please enter the captcha code: </p>
            <textarea name="" id="" className="bg-gray-200 ps-3 " placeholder='Enter Your Code*'></textarea>

          </div>

          <div className=" bg-white text-black h-fit p-7 hover:-translate-y-2 duration-300">
            <div className="text-orange-300 text-6xl">
              <AiOutlineBarcode />
            </div>
            <h1 className="text-xl font-bold">Let’s Call Or Email</h1>
            <p className="py-2">info@rnrbuildtech.com</p>
            <div className="text-orange-300 text-6xl">
              <AiOutlineBarcode />
            </div>
            <h1 className="text-xl font-bold">Be Creative Our Team</h1>
            <p className="py-2">+91 9880580763</p>
            <div className="text-orange-300 text-6xl">
              <AiOutlineBarcode />
            </div>
            <h1 className="text-xl font-bold">Call Or Message</h1>
            <p className="py-2">+91 9880580763</p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 py-14 gap-8">
          <div className=" bg-white text-black h-fit p-7 hover:-translate-y-2 duration-300">
            <div className="text-orange-300 text-6xl float-left me-4">
              <AiOutlineBarcode />
            </div>
            <h1 className="text-xl font-bold">Address</h1>
            <p className="py-2">889 , 1st Floor, J N Road, BEML 4th Stage, Rajarajeshwari Nagar,Bengaluru 560098</p>
          </div>
          <div className=" bg-white text-black h-fit p-7 hover:-translate-y-2 duration-300">
            <div className="text-orange-300 text-6xl">
              <AiOutlineBarcode />
            </div>
            <h1 className="text-xl font-bold">Call Us On</h1>
            <p className="py-2">+91-9880580763</p>
          </div>
          <div className=" bg-white text-black h-fit p-7 hover:-translate-y-2 duration-300">
            <div className="text-orange-300 text-6xl ">
              <AiOutlineBarcode />
            </div>
            <h1 className="text-xl font-bold">Email Us On</h1>
            <p className="py-2">info@rnrbuildtech.com</p>
          </div>
        </div>

      </div>
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14009.43381070529!2d77.0309388!3d28.6190171!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05627b8284cd%3A0x8bd60bbbb772b89c!2sYashah%20Media%20%7C%20Best%20Digital%20Marketing%20Service%20in%20Dwarka%20Delhi%20%7C%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1696011211465!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
    </div>
  )
}

export default page