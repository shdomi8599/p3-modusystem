import React, { useState } from "react"
import ProductContent from "./ProductContent"
import ContentDetail from "./ContentDetail"
import { product } from "./Data/productData"

const Product = ({ product, list }: { product: product, list: string }) => {

    const [isDetail, setIsDetail] = useState(false);

    const isDetailHandeler = (boolean: boolean) => {
        setIsDetail(boolean)
    }

    const [detailData, setDetailData] = useState({})

    const pushDetailData = (data: {}) => {
        setDetailData(data)
    }

    return <>
        {isDetail && <ContentDetail isDetailHandeler={isDetailHandeler} detailData={detailData} />}
        <div className="product">
            <div className="product_img_box">
                <img id="product_img" src={"../images/차단기원형바.jpg"} />
            </div>
            <div className="product_contents_box">
                <div id="product_contents_top">
                    <span>{product.id}</span>
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