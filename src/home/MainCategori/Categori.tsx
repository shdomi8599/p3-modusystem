import React from "react";
type PropsData = {
    id: number;
    offEventHandelr: () => void;
}
const Categori = ({ id, offEventHandelr }: PropsData) => {

    //카테고리안의 아이콘들을 누르면 좌표에 맞게 이동
    const scrollList = [597, 1114, 1683, 2252, 2769, 3338, 3855, 4424]
    const moveEvent = () => {
        offEventHandelr()
        window.scrollTo({ left: 0, top: scrollList[id] - 50, behavior: "smooth" });
    }

    return <li>
        <img onClick={moveEvent} className="main_categori_img" src={`http://localhost:3001/uploads/메인카테고리/product_list_${id + 1}.gif`} alt="" />
    </li>
}

export default Categori;