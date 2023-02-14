import React from "react";
import TopBtn from "../header/TopBtn";
import Main from "./Main";
import ProductListSection from "../productListSection/ProductListSection";

const Home = ({ offEvent, offEventHandelr }: { offEvent: boolean, offEventHandelr: () => void }) => {

    return <>
        <Main offEventHandelr={offEventHandelr} />
        <TopBtn offEventHandelr={offEventHandelr} />
        <ProductListSection offEvent={offEvent} />
    </>
}

export default Home;