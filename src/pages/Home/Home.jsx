import React from "react";
import Banner from "../../components/Banner/Banner";
import Featured from "../../components/Featured/Featured";
import HowWorks from "../../components/HowWorks/HowWorks";
import TopRated from "../../components/TopRated/TopRated";

function Home() {
    return (
        <>
            <Banner />
            <Featured />
            <HowWorks />
            <TopRated />
        </>
    );
}

export default Home;
