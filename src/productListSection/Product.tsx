import React, { useState } from "react"
import ProductContent from "./ProductContent"
import ContentDetail from "./ContentDetail"
import { product } from "../type"
import { detailData } from "../type"
type propsData = {
    product: product;
    isDetailHandeler: (boolean: boolean) => void;
    isDetail: boolean;
}

const Product = ({ product, isDetailHandeler, isDetail }: propsData) => {

    let [detailData, setDetailData] = useState<detailData>()

    //state안에 데이터를 저장하는 함수
    const pushDetailData = (data: detailData) => {
        setDetailData(data)
    }

    let imgBoxClass = "product_img_box";
    let contentsBoxClass = "product_contents_box";
    if (typeof product.img === 'object') {
        imgBoxClass = "product_img_box_booth";
        contentsBoxClass = "product_contents_box_booth"
    }
    return <>
        {detailData !== undefined && isDetail && <ContentDetail isDetailHandeler={isDetailHandeler} detailData={detailData} />}
        <div className="product" >
            <div className={imgBoxClass}>
                {typeof product.img === "string" && <img id="product_img" src={product.img} alt='product' />}
                {typeof product.img === 'object' && product.img.map(src => <img id="product_img" src={`http://localhost:3001/uploads/주차부스/${src}`} key={src} alt='booth' />)}
            </div>
            <div className={contentsBoxClass}>
                <div id="product_contents_top">
                    {typeof product.img === 'object' ? <span id="booth_id">{product.id}</span> : <span>{product.id}</span>}
                </div>
                <div id="product_contents_bottom">
                    {product.outline !== undefined &&
                        <ProductContent name={"개요"} isDetailHandeler={isDetailHandeler} product={product} pushDetailData={pushDetailData} />}
                    {product.characteristic !== undefined &&
                        <ProductContent name={"특징"} isDetailHandeler={isDetailHandeler} product={product} pushDetailData={pushDetailData} />}
                    {product.specification !== undefined &&
                        <ProductContent name={"사양"} isDetailHandeler={isDetailHandeler} product={product} pushDetailData={pushDetailData} />}
                    {product.optional !== undefined &&
                        <ProductContent name={"선택사양"} isDetailHandeler={isDetailHandeler} product={product} pushDetailData={pushDetailData} />}
                </div>
            </div>
        </div>
    </>
}

export default Product