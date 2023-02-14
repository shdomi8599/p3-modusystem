import React, { useEffect, useState } from "react"
import { getProduct } from "../api/getProduct";
import { allProduct } from "../type";
import ProductList from "./ProductList";

const ProductListSection = ({ offEvent }: { offEvent: boolean }) => {
    const [productList, setProductList] = useState<allProduct | []>([])
    useEffect(() => {
        getProduct().then(res => {
            setProductList(res)
        })
    }, [])
    return <div id="productList_section">
        {productList.map((productList, i) => <ProductList key={i} productList={productList} offEvent={offEvent} />)}
    </div>
}

export default ProductListSection