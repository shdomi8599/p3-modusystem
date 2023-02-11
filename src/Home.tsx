import React from "react";
import TopBtn from "./Header/TopBtn";
import Main from "./Main/Main";
import ProductListSection from "./ProductListSection/ProductListSection";

const Home = ({offEvent,offEventHandelr}:{offEvent:boolean,offEventHandelr:()=>void}) => {
    
    return <>
        <Main offEventHandelr={offEventHandelr} />
        <TopBtn offEventHandelr={offEventHandelr} />
        <ProductListSection offEvent={offEvent} />
    </>
}

export default Home;