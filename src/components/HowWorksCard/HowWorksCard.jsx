import React from 'react'

function HowWorksCard({ title, description, color, number }) {
    console.log(color);
    return (
        <div className='flex flex-col gap-4 justify-center items-center py-4'>
            {/* number */}
            <div className={`w-16 h-16 rounded-full ${color} text-white flex justify-center items-center`}>
                <p>{number}</p>
            </div>
            {/* title */}
            <h1 className='text-2xl text-white'>{title}</h1>
            {/* description */}
            <p className='text-gray-400 text-base text-center'>{description}</p>
        </div>
    )
}

export default HowWorksCard