import React from "react"
import { productList } from "./Data/productData"
import ProductList from "./ProductList";

const ProductListSection = () =>{
    return <div id="productList_section">
     {productList.map((productList, i) => <ProductList key={i} productList={productList} />)}
     </div>
}

export default ProductListSection