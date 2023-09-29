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
      <div className="bg-black text-white px-20">
        <div className="px-20 bg-black py-5 text-center text-white">
          <h1 className="font-extrabold text-4xl my-10">Contact <span className="text-orange-300 italic">Us</span></h1>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center bg-white text-black p-7">
            <div className="text-orange-300 text-6xl justify-center flex">
              <AiOutlineMessage />
            </div>
            <h1 className="text-xl font-bold">Chat With Us</h1>
            <p className="py-2">Chat with us anytime! We're always happy to help you resolve any questions or issues</p>
            <h1 className="font-bold text-lg py-3">Live Chats</h1>
          </div>
          <div className="text-center bg-white text-black p-7">
            <div className="text-orange-300 text-6xl justify-center flex">
              <AiOutlineBank />
            </div>
            <h1 className="text-xl font-bold">Completed Projects</h1>
            <p className="py-2">We are a team of experts whose goal is to create something that you love.</p>
            <h1 className="font-bold text-lg py-3">Know More</h1>
          </div>
          <div className="text-center bg-white text-black p-7">
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
      <div className="bg-black text-white px-20">
        <div className="px-20 bg-black py-5 text-center text-white">
          <h1 className="font-extrabold text-4xl my-10">Contact <span className="text-orange-300 italic">Us</span></h1>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center bg-white text-black col-span-2 p-7">
            <div className="grid grid-cols-2 gap-8">
              <div className="">
                <input className='bg-gray-200 py-3 px-1 w-full' type="text" />
              </div>
              <div className="">
                <input className='bg-gray-200 py-3 px-1 w-full' type="text" />
              </div>
              <div className="">
                <input className='bg-gray-200 py-3 px-1 w-full' type="text" />
              </div>
              <div className="">
                <input className='bg-gray-200 py-3 px-1 w-full' type="text" />
              </div>
            </div>
          </div>

          <div className="text-center bg-white text-black p-7">
            <div className="text-orange-300 text-6xl justify-center flex">
              <AiOutlineBarcode />
            </div>
            <h1 className="text-xl font-bold">Customer Supports</h1>
            <p className="py-2">We are committed to providing you the best support possible.</p>
            <h1 className="font-bold text-lg py-3">Call Now</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default page