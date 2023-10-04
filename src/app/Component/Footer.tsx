import React from 'react'
import { AiOutlineAppstore } from "react-icons/ai";
import Marquee from "react-fast-marquee";
export default function Footer() {
    return (
        <div className='bg-black flex-wrap'>
            <div className=" bg-orange-300 md:px-20 grid md:grid-cols-3 gap-10 py-10">
                <div className=""></div>
                <div className="">
                    <div className="float-left pe-4 text-5xl">
                        <AiOutlineAppstore />
                    </div>
                    <div className="">
                        <h1 className="text-2xl font-bold">Subscribe Newsletter</h1>
                        <p className="p-">stay in touch with us to get latest news.</p>
                    </div>
                </div>
                <div className="">
                    <input type="email" name='email' className='py-3' placeholder='Your Email Address' />
                    <button className='py-3 px-5 bg-black text-white border border-black'>Submit -</button>
                </div>
            </div>
            <div className="grid  md:grid-cols-3 gap-10 pb-14  px-20">
                <div className="p-4 py-10 border-white border md:-mt-28 bg-black h-min text-white">
                    <h1 className="text-2xl font-bold">Opening Hours</h1>
                    <div className="flex justify-between py-4">
                        <p className="">Mon-Friday</p>
                        <p className="">09:00 - 20:00</p>
                    </div>
                    <hr className="" />
                    <div className="flex justify-between py-4">
                        <p className="">Saturday</p>
                        <p className="">09:00 - 12:00</p>
                    </div>
                    <hr className="" />
                    <div className="flex justify-between py-4">
                        <p className="">Sunday</p>
                        <p className="">SundayClose</p>
                    </div>
                    <hr className="" />
                    <h1 className="text-2xl font-bold py-4">About Us</h1>
                    <div className="">RNR BUILDTECH have associated in wide range of services to construction industry.</div>

                </div>
                <div className="text-white">
                    <h1 className="text-2xl font-bold py-4">Our Services</h1>
                    <ul className="">
                        <li className="py-2">About Company</li>
                        <li className="py-2">Our Services</li>
                        <li className="py-2">Projects</li>
                        <li className="py-2">Blogs</li>
                        <li className="py-2">Faq</li>
                        <li className="py-2">Gallery</li>
                        <li className="py-2">COntact-Us</li>
                    </ul>
                </div>
                <div className="text-white">
                    <h1 className="text-2xl font-bold py-4">Recent Posts</h1>
                    <div className="float-left me-4">
                        <img src="./footer.jpg" alt="" />
                    </div>
                    <p className="py-1">Jan 27, 2023</p>
                    <p className="py-1">Myths and facts on vastu.</p>
                    <hr className="my-10" />
                    <div className="float-left me-4">
                        <img src="./footer.jpg" alt="" />
                    </div>
                    <p className="py-1">Dec 28, 2022</p>
                    <p className="py-1">Are you hiring a registered <br />company?</p>
                </div>
            </div>
            <Marquee direction="left"className="float-left"  ><img src="f.png" alt="" className='w-16' /></Marquee>
            <Marquee direction="right" className="float-right" ><img src="f1.png" alt="" className='w-16' /></Marquee>
            <hr className="text-white" />
            <div className="py-8 text-white ps-20">Copyright © 2023 RNR BuildTech</div>
        </div>
    )
}

