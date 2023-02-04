import React from "react"
import Product from "./Product"
import { productRfList, productControlList, productList } from "./Data/productData"

const ProductList = () => {
    return <div id="productList">
        {productList.map(p => <Product key={p.id} detail={p} />)}
    </div>
}

export default ProductList