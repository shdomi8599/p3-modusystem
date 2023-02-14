import React, { useState } from "react";

const TopBtn = ({ offEventHandelr }: { offEventHandelr: () => void }) => {

    //최상단으로 이동하면서 디테일 페이지가 꺼지도록 도와주는 함수
    const moveTop = () => {
        offEventHandelr()
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    const [scrollY, setScrollY] = useState(0)
    window.addEventListener('scroll', () => { scrollEvent() });
    //버튼이 일정 스크롤에서만 생성되도록 스크롤 데이터를 수집하기 위한 함수
    const scrollEvent = () => {
        setScrollY(window.scrollY)
    }

    return <>
        {scrollY > 400 &&
            <div id="top_btn_box">
                <img onClick={moveTop} id="top_btn" src={"http://localhost:3001/uploads/아이콘/upward-arrow.png"} alt='top_btn' />
            </div>}
    </>
}

export default TopBtn;