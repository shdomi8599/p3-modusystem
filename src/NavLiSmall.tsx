import React from "react";
type propsData = {
    name: string, categori: {};
    id: number, offEventHandelr: () => void
}

const NavLiSmall = ({ name, categori, id, offEventHandelr }: propsData) => {

    const scrollCategoriList = [597, 1114, 1683, 2252, 2769, 3338, 3855, 4424]

    const moveCategoriEvent = () => {
        offEventHandelr()
        window.scrollTo({ left: 0, top: scrollCategoriList[id] - 50, behavior: "smooth" });
    }

    const scrollIntroList = [1940, 3880, 6000]

    const wrap_main = document.querySelector("#wrap_main")

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