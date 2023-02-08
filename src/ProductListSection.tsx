import React from "react"
import { productList } from "./Data/productData"
import ProductList from "./ProductList";

const ProductListSection = ({ offEvent }: { offEvent: boolean }) => {
    return <div id="productList_section">
        {productList.map((productList, i) => <ProductList key={i} productList={productList} offEvent={offEvent} />)}
    </div>
}

export default ProductListSection