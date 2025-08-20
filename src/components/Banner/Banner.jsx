import React from "react";
import { Link } from "react-router";

function Banner() {
    return (
        <>
            <div className="bg-black carousel w-full min-h-[calc(100vh-160px)]">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-white">
                        <h1 className="text-5xl font-bold">Post Your Tasks Easily - 1</h1>
                        <p className="text-2xl">
                            Get quality work done quickly and efficiently
                        </p>
                        <p className="text-xl">
                            Post your project requirements and receive competitive bids from
                            experts
                        </p>
                        <div className="space-x-4 mt-4">
                            <Link to="browse-task" className="px-10 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Find Tasks</Link>
                            <Link
                                to="register"
                                className="px-10 py-3 border-2 border-white text-white rounded-md hover:text-black hover:bg-white"
                            >
                                Join As Freelancer
                            </Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-white">
                        <h1 className="text-5xl font-bold">Post Your Tasks Easily - 2</h1>
                        <p className="text-2xl">
                            Get quality work done quickly and efficiently
                        </p>
                        <p className="text-xl">
                            Post your project requirements and receive competitive bids from
                            experts
                        </p>
                        <div className="space-x-4 mt-4">
                            <Link to="browse-task" className="px-10 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Find Tasks</Link>
                            <Link
                                to="register"
                                className="px-10 py-3 border-2 border-white text-white rounded-md hover:text-black hover:bg-white"
                            >
                                Join As Freelancer
                            </Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-white">
                        <h1 className="text-5xl font-bold">Post Your Tasks Easily - 3</h1>
                        <p className="text-2xl">
                            Get quality work done quickly and efficiently
                        </p>
                        <p className="text-xl">
                            Post your project requirements and receive competitive bids from
                            experts
                        </p>
                        <div className="space-x-4 mt-4">
                            <Link to="browse-task" className="px-10 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Find Tasks</Link>
                            <Link
                                to="register"
                                className="px-10 py-3 border-2 border-white text-white rounded-md hover:text-black hover:bg-white"
                            >
                                Join As Freelancer
                            </Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-white">
                        <h1 className="text-5xl font-bold">Post Your Tasks Easily - 4</h1>
                        <p className="text-2xl">
                            Get quality work done quickly and efficiently
                        </p>
                        <p className="text-xl">
                            Post your project requirements and receive competitive bids from
                            experts
                        </p>
                        <div className="space-x-4 mt-4">
                            <Link to="browse-task" className="px-10 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">Find Tasks</Link>
                            <Link
                                to="register"
                                className="px-10 py-3 border-2 border-white text-white rounded-md hover:text-black hover:bg-white"
                            >
                                Join As Freelancer
                            </Link>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;