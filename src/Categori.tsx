import React from "react";

const Categori = ({ id }: { id: number }) => {


    return <li>
        <img className="main_categori_img" src={`../images/product_list_${id + 1}.gif`} alt="" />
    </li>
}

export default Categori;