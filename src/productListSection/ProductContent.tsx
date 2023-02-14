import React from "react";
import { detailData, product, productList } from "../type";
type propsData = {
    name: string;
    product: product;
    isDetailHandeler: (boolean: boolean) => void;
    pushDetailData: (data: detailData) => void;
}

const ProductContent = ({ name, product, isDetailHandeler, pushDetailData }: propsData) => {

    const productList: productList =
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

    //데이터가 저장되고 디테일 페이지가 off되도록 도와주는 함수
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