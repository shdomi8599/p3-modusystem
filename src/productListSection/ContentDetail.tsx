import React from "react";
import { detailData } from "../type";
type propsData = {
    isDetailHandeler: (boolean: boolean) => void;
    detailData: detailData
}
const ContentDetail = ({ isDetailHandeler, detailData }: propsData) => {

    const { id, name, content } = detailData
    //제품 상세페이지를 닫아주는 함수
    const closeEvent = () => {
        isDetailHandeler(false)
    }

    return <div id="detail_box">
        <div id="detail_page">
            <div id="detail_X_box">
                <img onClick={closeEvent} src={"http://localhost:3001/uploads/아이콘/free-icon-x-657059.png"} alt='x' />
            </div>
            <div className="detail_product_name">
                <span>{id}</span>
            </div>
            <div className="detail_name">
                <span>{name}</span>
            </div>
            <div className="detail_content">
                <ul>
                    {typeof content === "string" ? content : content?.map((x: any, i: any) => <li key={i}>{x}</li>)}
                </ul>
            </div>
        </div>
    </div>
}

export default ContentDetail;