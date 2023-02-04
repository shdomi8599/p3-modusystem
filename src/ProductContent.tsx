import React from "react";
import { product } from "./Data/productData";

const ProductContent = ({ name, product, isDetailHandeler, pushDetailData }:
    { name: string; product: product; isDetailHandeler: (boolean: boolean) => void; pushDetailData: (data: {}) => void; }) => {

    const productList: {
        [index: string]: string | string[] | undefined
    } =
    {
        "개요": product.outline,
        "특징": product.characteristic,
        "사양": product.specification,
        "선택사양": product.optional
    }

    const data = {
        id: product.id,
        name: name,
        content: productList[name]
    }

    const btnEvent = () => {
        pushDetailData(data)
        isDetailHandeler(true)
    }

    return <>
        <div className="product_contents_bottom_contents" onClick={btnEvent}>
            {name}
        </div>
    </>
}
export default ProductContent;