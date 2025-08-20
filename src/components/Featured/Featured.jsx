import React from 'react'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router'

function Featured() {
    return (
        <>
            {/* main container */}
            <section className='bg-[#1E2939] w-full py-20'>
                {/* title and description */}
                <div className='w-full flex flex-col justify-center items-center gap-4 text-white'>
                    <h1 className='text-4xl font-bold'>Featured Tasks</h1>
                    <p className='text-lg'>Discover exciting opportunities from clients around the world</p>
                </div>
                {/* cards container */}
                <div className='w-full grid grid-cols-3 gap-4 py-10  max-w-6xl mx-auto'>
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                    <FeaturedCard />
                </div>
                {/* view all task button */}
                <div className='w-full flex justify-center'>
                    <Link to="/browse-task" className='px-10 py-3 bg-[#1447E6] text-white rounded-md flex items-center gap-2'>
                        View All Tasks
                        <FiArrowRight className="inline-block" />
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Featured