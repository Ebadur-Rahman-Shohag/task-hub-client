import React from "react";
import TopRatedCard from "../TopRatedCard/TopRatedCard";

function TopRated() {
    return (
        <div className="bg-[#1E2939] w-full py-20">
            {/* title and description */}
            <div className="w-full flex flex-col justify-center items-center gap-4 text-white">
                <h1 className="text-4xl font-bold">Featured Tasks</h1>
                <p className="text-lg">
                    Discover exciting opportunities from clients around the world
                </p>
            </div>
            {/* cards container */}
            <div className='w-full grid grid-cols-3 gap-4 py-10  max-w-6xl mx-auto'>
                <TopRatedCard />
                <TopRatedCard />
                <TopRatedCard />

            </div>
        </div>
    );
}

export default TopRated;