import React from "react";
type propsData = {
    name: string, categori: {};
    id: number, offEventHandelr: () => void
}

const NavLiSmall = ({ name, categori, id, offEventHandelr }: propsData) => {
    //target들에게서 추출한 높이
    const scrollCategoriList = [597, 1114, 1683, 2252, 2769, 3338, 3855, 4424]

    //카테고리 제품소개안에 버튼들을 누르면 상세페이지가 off되고 페이지 스크롤이 이동하도록 도와주는 함수
    const moveCategoriEvent = () => {
        offEventHandelr()
        window.scrollTo({ left: 0, top: scrollCategoriList[id] - 50, behavior: "smooth" });
    }

    const scrollIntroList = [1940, 3880, 6000]
    const wrap_main = document.querySelector("#wrap_main")

    //메인 페이지 스크롤을 도와주는 함수
    const introEvent = () => {
        offEventHandelr()
        wrap_main && wrap_main.scrollTo({ left: scrollIntroList[id], top: 0, behavior: "smooth" });
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    return <li>
        {Object.keys(categori)[0] === "제품소개" ? <a onClick={moveCategoriEvent}>{name}</a>
            :
            Object.keys(categori)[0] === "회사소개" ? <a onClick={introEvent}>{name}</a> : <a>{name}</a>}
    </li>
}

export default NavLiSmall;