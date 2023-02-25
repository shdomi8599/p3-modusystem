import React, { useEffect, useRef, useState } from "react"
import Product from "./Product"
import { product } from "../type"
type propsData = {
    productList: { [key: string]: product[] };
    offEvent: boolean;
}

const ProductList = ({ productList, offEvent }: propsData) => {
    //화살표가 좌측이나 우측끝에서 없어지기 위한 state
    const [page, setPage] = useState(0)
    //디테일 페이지 state
    const [isDetail, setIsDetail] = useState(false);
    //디테일 페이지의 상태를 변경하는 함수
    const isDetailHandeler = (boolean: boolean) => {
        setIsDetail(boolean)
    }
    const [list] = Object.keys(productList)
    const product = productList[list];
    const target = useRef<HTMLDivElement>(null);
    //off이벤트값이 변경되면 디테일 페이지가 사라지도록 도와주는 함수 
    useEffect(() => {
        setIsDetail(false);
    }, [offEvent])
    //디테일이 켜져있을땐 거리 계산이 내가 원한방식대로 되지않길래 비동기 함수를 추가해서 먼저 디테일이 꺼지고 나서 이동하도록 기능 구현
    async function detailOff() {
        setIsDetail(false);
    }
    const offAndRight = () => {
        detailOff().then(() => {
            target.current?.scrollTo({ left: target.current?.scrollLeft + target.current?.scrollWidth / target.current?.childElementCount, top: 0, behavior: "smooth" });
            if (product.length - 1 > page) {
                setPage(page + 1)
            }
        })
    }
    const offAndLeft = () => {
        detailOff().then(() => {
            target.current?.scrollTo({ left: target.current?.scrollLeft - target.current?.scrollWidth / target.current?.childElementCount, top: 0, behavior: "smooth" });
            if (page !== 0) {
                setPage(page - 1)
            }
        })
    }
    return <div id="productList_box" >
        <div id="line_box">
            {list === "차량차단기" || list === "리모콘" || list === "차량번호인식" || list === "주차부스" ||
                <>
                    {page !== 0 &&
                        <div id="left_arrow">
                            <img onClick={offAndLeft} src={"http://localhost:3001/uploads/아이콘/left-arrow.png"} alt='left' />
                        </div>
                    }
                    {product.length - 1 > page &&
                        <div id="right_arrow">
                            <img onClick={offAndRight} src={"http://localhost:3001/uploads/아이콘/right-arrow.png"} alt='right' />
                        </div>}
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