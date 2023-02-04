import React from "react"
import ProductContent from "./ProductContent"
import { type product } from "./Data/productData"

const Product = ({ detail }: { detail: product }) => {
    return <>
        <div className="w0_5b"></div>
        <div className="product">
            <div className="product_img_box">
                <img id="product_img" src={"../images/차단기원형바.jpg"} />
            </div>
            <div className="product_contents_box">
                <div id="product_contents_top">
                    <span>{detail.id}</span>
                </div>
                <div id="product_contents_bottom">
                    {detail.outline !== undefined && <ProductContent name={"개요"} />}
                    {detail.characteristic !== undefined && <ProductContent name={"특징"} />}
                    {detail.specification !== undefined && <ProductContent name={"사양"} />}
                    {detail.optional !== undefined && <ProductContent name={"선택사양"} />}
                </div>
            </div>
        </div>
    </>
}

export default Product