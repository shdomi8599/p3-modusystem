import React, { useState } from "react";
import { navLi } from "../Data/type";
import NavLiSmall from "./NavLiSmall";

const NavLi = ({ categori, offEventHandelr }: { categori: navLi, offEventHandelr: () => void }) => {

    const liList = categori[Object.keys(categori)[0]]

    //카테고리에 삼각형이 표시되거나 사라지도록 도와주는 함수
    const [triangle, setTriangle] = useState(false)
    const overHandler = () => {
        setTriangle(true)
    }
    const downHandler = () => {
        setTriangle(false)
    }

    return <li className='nav_li' onMouseOver={overHandler} onMouseOut={downHandler}>
        {triangle && <>
            <div id='nav_triangle_box'>
                <div id='nav_triangle'>
                    <img src={"../images/triangle.png"} />
                </div>
            </div>
        </>}
        <a>{Object.keys(categori)}</a>
        <ul onMouseOut={downHandler}>
            {liList.map((x: string, i: number) =>
                <NavLiSmall name={x} key={i} categori={categori} id={liList.indexOf(x)} offEventHandelr={offEventHandelr} />)}
        </ul>
    </li>
}

export default NavLi