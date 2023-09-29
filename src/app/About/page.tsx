import React from 'react'

function page() {
    return (
        <div className=''>
            <div className="bg-blend-overlay bg-black bg-opacity-50 py-40 bg-no-repeat bg-cover bg-right bg-[url(/abo.jpg)]">
                <h1 className="text-7xl font-bold text-white text-center">About Us</h1>
            </div>
            <div className="bg-black text-white">
                <div className="px-20">
                    <div className="grid grid-cols-2 gap-6 py-6">
                        <div className="p-4">
                            <p className="font-bold">ABOUT COMPANY</p>
                            <h1 className="font-bold text-4xl my-3">We Are The Best</h1>
                            <h1 className="font-bold text-4xl my-3 italic text-orange-300">House Construction</h1>
                            <h1 className="font-bold text-4xl my-3">Company In Bangalore.</h1>
                            <p className="my-5">RNR BUILDTECH is one of the finest house construction company and if you are looking for the best engineers, architects and modernized technology, you have indeed reached the right place.</p>
                        </div>
                        <div className="">
                            <img className='' src="./RNR.jpg" alt="" />
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-4xl py-3">About RNR Buildtech</h1>
                        <p className="py-3">RNR BUILDTECH is a prominent player in the construction space and one of the top House Construction contractors in Bangalore. Though Bangalore has a vast majority of builders offering works of all sorts – Choosing Impact homes over others pays the best interest. We have an in-house team of experienced architects, Consultants, interior designers & Builders who can understand your perspective to bring things to life.</p>
                        <p className="py-3">RNR BUILDTECH have associated in wide range of services to construction industry. We reach the customers satisfaction from the current trending idea generation, planning to implementation of varieties of construction projects. From industrial construction, commercial complex and even the residential projects. Not only for the construction, RNR group is tangled in land development work and all types of civil work.</p>
                        <p className="py-3">We assure our customers with our verified and reviewed customers whom we have served earlier with trust and reliability. We work for the trust, reliability and satisfaction of our customers and not just in case for profit. Over the years, RNR BUILDTECH was able to establish world-class benchmarks of engineering excellence, robust adherence to quality process, cutting edge technology and enduring customer relationships by delivering efficient construction solutions.</p>
                        <p className="py-3">The projects handled stand a tall testimony to RNR BUILDTECH commitment to quality, eye for details, technical excellence, aesthetic sense and passion for excellence.</p>
                    </div>
                    <div className="text-center py-32">
                        <div className="p">OUR CORE VALUES</div>
                        <h1 className="font-bold text-5xl py-3">Make The World Better Place</h1>
                        <h1 className="font-bold text-5xl py-3">With Construction Quality</h1>
                    </div>
                </div>
                <div className="bg-[url(/abo1.jpg)] text-center py-24 bg-blend-overlay bg-black bg-opacity-50 bg-no-repeat">
                    <div className="text-2xl">OUR PROCESS</div>
                    <h1 className="font-bold text-5xl py-3">A Goal Without A Plan</h1>
                    <h1 className="font-bold text-5xl py-3 italic text-orange-300">Is Just A Wish.</h1>
                </div>
            </div>
        </div>
    )
}

export default page