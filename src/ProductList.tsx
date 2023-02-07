import React, { useEffect, useRef, useState } from "react"
import Product from "./Product"
import { product } from "./Data/type"
type propsData = {
    productList: { [key: string]: product[] };
    offEvent: boolean;
}

const ProductList = ({ productList, offEvent }: propsData) => {

    //네비바를 통해 이동해도 detail창이 꺼지도록 하기 위한 useEffect


    //디테일 페이지 state
    const [isDetail, setIsDetail] = useState(false);

    const isDetailHandeler = (boolean: boolean) => {
        setIsDetail(boolean)
    }

    const [list] = Object.keys(productList)
    const product = productList[list];
    const target = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsDetail(false);
    }, [offEvent])

    //디테일이 켜져있을땐 거리 계산이 내가 원한방식대로 되지않길래 비동기 함수를 추가해서 먼저 디테일이 꺼지고 나서 이동하도록 기능 구현
    async function detailOff() {
        setIsDetail(false);
    }

    const rightEvent = () => {
        if (target !== null && target.current?.scrollWidth !== undefined) {
            target.current?.scrollLeft < target.current?.scrollWidth &&
                target.current?.scrollTo({ left: target.current?.scrollLeft + target.current?.scrollWidth / target.current?.childElementCount, top: 0, behavior: "smooth" });
        }
    }

    const offAndRight = () => {
        if (target !== null && target.current?.scrollWidth !== undefined) {
            target.current?.scrollLeft !== target.current?.scrollWidth && detailOff().then(rightEvent)
        }
    }

    const leftEvent = () => {
        target.current?.scrollLeft !== 0 &&
            target.current?.scrollTo({ left: target.current?.scrollLeft - target.current?.scrollWidth / target.current?.childElementCount, top: 0, behavior: "smooth" });
    }

    const offAndLeft = () => {
        target.current?.scrollLeft !== 0 && detailOff().then(leftEvent)
    }

    return <div id="productList_box">
        <div id="line_box">
            {list === "차량차단기" || list === "리모콘" || list === "차량번호인식" || list === "주차부스" ||
                <>
                    <div id="left_arrow">
                        <img onClick={offAndLeft} src={"../images/left-arrow.png"} />
                    </div>
                    <div id="right_arrow">
                        <img onClick={offAndRight} src={"../images/right-arrow.png"} />
                    </div>
                </>
            }
            <div className="w0_5b">
            </div>
        </div>
        <div className={"productList"} id={list} ref={target}>
            {product.map((product: product, i: number) => <Product key={i} product={product} isDetailHandeler={isDetailHandeler} isDetail={isDetail} />)}
        </div>
    </div>
}

export default ProductList