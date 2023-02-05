import React from "react";

const Categori = ({ id }: { id: number }) => {

    const scrollList= [597,1114,1683,2252,2769,3338,3855,4424]

    const moveEvent = () =>{
        window.scrollTo({ left: 0, top: scrollList[id]-50, behavior: "smooth" });
    }

    return <li>
        <img onClick={moveEvent} className="main_categori_img" src={`../images/product_list_${id + 1}.gif`} alt="" />
    </li>
}

export default Categori;