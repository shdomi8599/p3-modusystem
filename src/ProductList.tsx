import React, { useRef } from "react"
import Product from "./Product"
import { product } from "./Data/type"

const ProductList = ({ productList }: { productList: { [key: string]: product[] } }) => {
    const [list] = Object.keys(productList)
    const product = productList[list];
    const target = useRef<HTMLDivElement>(null);

    console.log(target.current?.childElementCount)




    //블로그 올릴때 꼭 올려야하는 부분 !!!!!!!!!!
    //아고라 스테이츠 자바스크립트로 구현할때보다 몇배는 쉬워진 작업 

    const rightEvent = () => {
        if (target !== null && target.current?.scrollWidth !== undefined) {
            target.current?.scrollLeft < target.current?.scrollWidth &&
                target.current?.scrollTo({ left: target.current?.scrollLeft + target.current?.scrollWidth / target.current?.childElementCount, top: 0, behavior: "smooth" });
        }
    }

    const leftEvent = () => {
        target.current?.scrollLeft !== 0 &&
            target.current?.scrollTo({ left: target.current?.scrollLeft - target.current?.scrollWidth / target.current?.childElementCount, top: 0, behavior: "smooth" });
    }

    return <div id="productList_box">
        <div id="line_box">
            {list === "차량차단기" || list === "리모콘" || list === "차량번호인식" || list === "주차부스" ||
                <>
                    <div id="left_arrow">
                        <img onClick={leftEvent} src={"../images/left-arrow.png"} />
                    </div>
                    <div id="right_arrow">
                        <img onClick={rightEvent} src={"../images/right-arrow.png"} />
                    </div>
                </>
            }
            <div className="w0_5b">
            </div>
        </div>
        <div className={"productList"} id={list} ref={target}>
            {product.map((product: product, i: number) => <Product key={i} product={product} list={list} />)}
        </div>
    </div>
}

export default ProductList