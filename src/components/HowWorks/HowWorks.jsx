import React from "react";
import HowWorksCard from "../HowWorksCard/HowWorksCard";

function HowWorks() {
    return (
        <section className="w-full py-20 bg-[#101828]">
            {/* title and description */}
            <div className="w-full flex flex-col justify-center items-center gap-4 text-white">
                <h1 className="text-4xl font-bold">How It Works</h1>
                <p className="text-lg">Get started in just a few simple steps</p>
            </div>
            {/* cards container */}
            <div className="w-full grid grid-cols-4 gap-4 py-10  max-w-6xl mx-auto">
                <HowWorksCard title="Post Your Task" description="Describe your project requirements and set your budget" color="bg-[#1C398E]" number="1" />
                <HowWorksCard title="Receive Bids" description="Get competitive proposals from qualified freelancers" color="bg-[#0D542B]" number="2" />
                <HowWorksCard title="Choose & Hire" description="Review profiles and select the best freelancer for your project" color="bg-[#733E0A]" number="3" />
                <HowWorksCard title="Get Results" description="Collaborate and receive high-quality work on time" color="bg-[#59168B]" number="4" />


            </div>
        </section>
    );
}

export default HowWorks;