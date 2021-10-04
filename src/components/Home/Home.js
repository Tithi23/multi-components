import React from "react";
import MiddleItem from "../MiddleItem/MiddleItem";
import MoreItem from "../MoreItem/MoreItem";
import TopItem from "../TopItem/TopItem";

const Home = () => {
    return (
        <div >
            <h2>This Is Home Page</h2>
            <TopItem></TopItem>
            <MiddleItem></MiddleItem>
            <MoreItem></MoreItem>
        </div>
    );
};

export default Home;