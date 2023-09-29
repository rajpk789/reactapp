"use client"
import Link from "next/link";
import { AiOutlineTable } from "react-icons/ai";
import { AiOutlineInsertRowBelow } from "react-icons/ai";
export default function Home() {
  return (
    <main className="min-h-scr" style={{ backgroundImage: 'url(./)', backgroundColor: '' }}>
      <div className="items-center h-screen grid ps-36" style={{ backgroundImage: 'url(./1.jpg)', backgroundColor: 'red' }}>
        <div className="">
          <h1 className="text-6xl font-extrabold text-white">We Build Your Dream</h1>
          <h1 className="text-6xl font-extrabold text-white">Home With <span className='italic text-amber-800' >Passion</span></h1>
          <button className="border-2 px-8 my-6 py-2 hover:bg-yellow-500">All Project</button>
        </div>
      </div>
      <section className="px-20 pb-10 bg-black">
        <div className="-mt-16 bg-transparent grid grid-cols-4 gap-4">
          <div className="col-span-2 p-11 bg-black shadow-lg shadow-white">

            <h1 className="text-3xl text-white">In Our Work We Have Pride, Quality Is What We Provide.We Build For Tomorrow</h1>
            <p className="text-white">RNR BUILDTECH have associated in wide range of services to construction industry. We reach the customers satisfaction from the current trending idea generation, planning to implementation of varieties of construction projects. From industrial construction, commercial complex and even the residential projects. Not only for the construction, RNR group is tangled in land development work and all types of civil work.</p>
          </div>
          <div className="bg-white p-11">

            <h1 className="text-3xl">House Construction Services</h1>
            <p className="">The variety of tasks that help create safe and comfortable living environment</p>
          </div>
          <div className="bg-white p-11">
            <h1 className="text-3xl">Interior Designing Services</h1>
            <p className="">We provide professional design services, including interior design and remodeling.</p>
          </div>
        </div>
        <section className="grid grid-cols-2 pt-48 text-white">
          <div className="">
            <h1 className="text-xl">ABOUT COMPANY</h1>
            <h1 className="text-4xl font-bold"><span className="text-orange-300 italic text-3xl">RNR Buildtech -</span> A Strong Foundation For Tomorrow</h1>
            <p className="text-orange-300">RNR BUILDTECH is a prominent player in the construction space and one of the top House Construction contractors in Bangalore. Though Bangalore has a vast majority of builders offering works of all sorts – Choosing Impact homes over others pays the best interest. We have an in-house team of experienced architects, Consultants, interior designers & Builders who can understand your perspective to bring things to life. </p>
            <button className="border-2 mx-3 px-8 my-6 py-2 hover:bg-yellow-500">Learn More</button>
            <button className="border-2 mx-3 px-8 my-6 py-2 hover:bg-yellow-500">Services</button>
          </div>
          <div className="ms-10">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/mKLrgVz2Xpk?si=yHNkjfdPoO3vAsEc" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </section>
        <div className="text-white text-center mt-10">
          <p className="">OUR SERVICES</p>
          <h1 className="text-4xl py-8 font-bold">You Dream It. We Will Build It.</h1>
        </div>
        <div className="text-white gap-7 grid grid-cols-3">
          <div className="px-4 py-10 text-center border border-orange-300">
            <div className="text-6xl justify-center flex text-orange-300">
              <AiOutlineTable />
            </div>
            <h1 className="text-3xl py-5">VILLAS & MANSION</h1>
            <p className="">RNR Buildtech is one of trusted home construction contractor in Bangalore. Our state-of-the-art villa construction services in Bangalore are a pride of Us.</p>
            <p className="text-orange-300 hover:text-inherit cursor-pointer pt-5">Learn More</p>
          </div>
          <div className="px-4 py-10 text-center border border-orange-300">
            <div className="text-6xl justify-center flex text-orange-300">
              <AiOutlineTable />
            </div>
            <h1 className="text-3xl py-5">RESIDENTIAL</h1>
            <p className="">Construction of Houses are the dreams of most of the individuals. The house becomes a home when it is according to the owner’s happiness and satisfaction.</p>
            <p className="text-orange-300 hover:text-inherit cursor-pointer pt-5">Learn More</p>
          </div>
          <div className="px-4 py-10 text-center border border-orange-300">
            <div className="text-6xl justify-center flex text-orange-300">
              <AiOutlineTable />
            </div>
            <h1 className="text-3xl py-5">TURN KEY PROJECTS</h1>
            <p className="">The Turnkey projects are the projects which are ready for immediate use. RNR provides the best services to Turn Key projects from Planning of civil construction.

            </p>
            <p className="text-orange-300 hover:text-inherit cursor-pointer pt-5">Learn More</p>
          </div>
          <div className="px-4 py-10 text-center border border-orange-300">
            <div className="text-6xl justify-center flex text-orange-300">
              <AiOutlineTable />
            </div>
            <h1 className="text-3xl py-5">INTERIORS DESIGNS</h1>
            <p className="">Interior designing is the most happening concept in today’s world. Designing the internal beauty of the structure is a very tedious task.</p>
            <p className="text-orange-300 hover:text-inherit cursor-pointer pt-5">Learn More</p>
          </div>
          <div className="px-4 py-10 text-center border border-orange-300">
            <div className="text-6xl justify-center flex text-orange-300">
              <AiOutlineTable />
            </div>
            <h1 className="text-3xl py-5">COMMERCIAL</h1>
            <p className="">RNR provides services for commercial projects and their designing. We give you the best suitable plan for the construction of the commercial buildings.</p>
            <p className="text-orange-300 hover:text-inherit cursor-pointer pt-5">Learn More</p>
          </div>
          <div className="px-4 py-10 text-center border border-orange-300">
            <div className="text-6xl justify-center flex text-orange-300">
              <AiOutlineTable />
            </div>
            <h1 className="text-3xl py-5">ARCHITECTURAL DESIGNS</h1>
            <p className="">Industries or the production units or the factories are the sources of income for the Government. Industrial machinery, tools, lumber production.</p>
            <p className="text-orange-300 hover:text-inherit cursor-pointer pt-5">Learn More</p>
          </div>
        </div>
      </section>
      <section className="bg-black flex pt-28">
        <div className="bg-white w-1/2 h-80 pt-16 ps-24">
          <p className="">ABOUT PROJECTS</p>
          <h1 className="text-5xl font-bold">Our Recent <span className="text-orange-300 italic"> Portfolio </span></h1>
        </div>
        <div className="ps-12 pt-32">
          <ul className="text-white flex gap-8">
            <li className="">ALL</li>
            <li className="">BUILDINGS</li>
            <li className="">HOUSES</li>
            <li className="">INTERIOR</li>
            <li className="">OFFICES</li>
          </ul>
        </div>
      </section>
      <section className=" bg-black pb-8  px-20 -mt-32">
        <div className="grid grid-cols-3 gap-6">
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (1).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (2).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (3).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (4).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (5).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (6).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (7).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (8).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (9).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
        </div>
        <div className="py-20 grid grid-flow-col px-4">
          <div className="text-white">
            <div className="text-orange-300 text-7xl pe-4 float-left">
              <AiOutlineInsertRowBelow />
            </div>
            <h1 className="text-5xl font-bold">15 +</h1>
            <p className="">Years Experience</p>
          </div>
          <div className="text-white">
            <div className="text-orange-300 text-7xl pe-4 float-left">
              <AiOutlineInsertRowBelow />
            </div>
            <h1 className="text-5xl font-bold">15 +</h1>
            <p className="">Years Experience</p>
          </div>
          <div className="text-white">
            <div className="text-orange-300 text-7xl pe-4 float-left">
              <AiOutlineInsertRowBelow />
            </div>
            <h1 className="text-5xl font-bold">15 +</h1>
            <p className="">Years Experience</p>
          </div>
          <div className="text-white">
            <div className="text-orange-300 text-7xl pe-4 float-left">
              <AiOutlineInsertRowBelow />
            </div>
            <h1 className="text-5xl font-bold">15 +</h1>
            <p className="">Years Experience</p>
          </div>
        </div>
        <div className="text-white"></div>
      </section>
      <section className="bg-black ">
        <div className="bg-[url('/a2.jpg')] bg-no-repeat">
          <div className="bg-white w-1/2 pt-16 ps-24">
            <p className="">WHY CHOOSE US</p>
            <h1 className="text-5xl font-bold py-5">Can Go To <span className="text-orange-300 italic"> Extra Miles </span>To Get Job Done!</h1>
            <div className="py-2">
              <h1 className="py-4 px-5 font-bold border border-black me-5 bg-orange-300 float-left">01</h1>
              <h1 className="text-xl font-bold">TIMELY COMPLETION</h1>
              <p className="py-3">Project will be delivered on time</p>
              <hr className="mt-6 w-5/6" />
            </div>
            <div className="py-2">
              <h1 className="py-4 px-5 font-bold border border-black me-5 bg-orange-300 float-left">02</h1>
              <h1 className="text-xl font-bold">QUALITY MATERIALS</h1>
              <p className="py-3">We use quality materials throughout the construction process</p>
              <hr className="mt-6 w-5/6" />
            </div>
            <div className="py-2">
              <h1 className="py-4 px-5 font-bold border border-black me-5 bg-orange-300 float-left">03</h1>
              <h1 className="text-xl font-bold">BUDGET FRIENDLY</h1>
              <p className="py-3">Our plans are budget friendly</p>
              <hr className="mt-6 w-5/6" />
            </div>
            <div className="py-2">
              <h1 className="py-4 px-5 font-bold border border-black me-5 bg-orange-300 float-left">04</h1>
              <h1 className="text-xl font-bold">SKILLED WORKFORCE</h1>
              <p className="py-3">We have highly skilled workforce at every level.</p>
              <hr className="mt-6 w-5/6" />
            </div>
            <div className="py-2">
              <h1 className="py-4 px-5 font-bold border border-black me-5 bg-orange-300 float-left">05</h1>
              <h1 className="text-xl font-bold">TRANSPARENCY</h1>
              <p className="py-3">Latest technology and strategies are used in our work</p>
              <hr className="mt-6 w-5/6" />
            </div>
            <div className="py-2">
              <h1 className="py-4 px-5 font-bold border border-black me-5 bg-orange-300 float-left">06</h1>
              <h1 className="text-xl font-bold">TECHNOLOGY</h1>
              <p className="py-3">Latest technology and strategies are used in our work</p>
              <hr className="mt-6 w-5/6" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black px-20">
        <div className="text-white  pt-20 grid grid-cols-2 gap-4">
          <div className="">
            <p className="">CUSTOMER TESTIMONIALS</p>
            <h1 className="text-5xl font-bold py-5">What Are They Saying <br /> About Our<span className="text-orange-300 italic"> Services</span></h1>
            <div className="py-2 bg-white text-black italic">
              <p className="p-10">Satisfied with their construction                                           for my home in HSR Layout Bangalore. Team                                               work is major advantage they have a good team co-ordination. They                                           keeps on                                               updating about the site works in WhatsApp and amount of work pending                                               which I                                                 liked the most. In Many other construction price will change regular                                                and they will
                ask for extra money but in this construction this was not happened                                             to me. They                                               have followed architectural and structural drawing correctly. They                                                 followed                                              everything as per the document. Totally my parents very much happy.                                              Our                                                 experience has been very good and hassle free.</p>
              <h1 className="font-bold pb-5 ps-14 text-orange-300">Shreenivash</h1>
              <hr className="" />
              <div className="ps-10 pb-4">
                <p className="py-2">If you have any questions contact with our team, or call</p>
                <Link className="font-bold" href="tel:+919880580763">+91-9880580763</Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-white">
            <div className="px-6 text-4xl bg-orange-300">Transforming The Creativity </div>
            <div className=""><img src="test.jpg" alt="" className="" /></div>
            <div className=""><img src="test2.png" alt="" className="" /></div>
            <div className="px-6 text-4xl bg-orange-300">Let's Renovate Incomplete!</div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/a2.jpg')] px-20 py-48 bg-no-repeat bg-cover">
        <div className="">
          <h1 className="font-bold p-2 ">WE’RE HERE TO HELP YOU</h1>
          <h1 className="text-6xl font-bold">We Offer The Most Complete</h1>
          <h1 className="text-6xl font-bold">House Renovating Services.</h1>
          <p className="text-orange-300">Constructor explains how you can enjoy high end flooring trends like textured wood and with new <br />
            laminate flooring. As the general contractor.</p>
        </div>
      </section>
      <section className="px-20 bg-black pb-28">
        <div className="p-10 text-center text-white">
          <p className="p-2">OUR BLOG</p>
          <h1 className="text-4xl font-bold">Our Recent News & Blog</h1>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (6).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (6).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
          <div className="">
            <div className=" overflow-hidden">
              <img src="./a (6).jpg" alt="" className="hover:scale-125 transition-all" />
            </div>
            <h1 className="w-full bg-white py-6 justify-around flex">Houses Interio</h1>
          </div>
        </div>
        <div className="py-10">
          <h1 className="text-4xl text-white font-bold">We Source <span className="text-orange-300"> From</span></h1>
          <div className="pt-10 grid grid-cols-6 gap-4">
            <div className="">
              <img src="b (1).jpeg" alt="" />
            </div>
            <div className="">
              <img src="b (1).jpg" alt="" />
            </div>
            <div className="">
              <img src="b (1).png" alt="" />
            </div>
            <div className="">
              <img src="b (2).jpg" alt="" />
            </div>
            <div className="">
              <img src="b (2).png" alt="" />
            </div>
            <div className="">
              <img src="b (3).jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}