import React, { useState } from "react";
import { navLi } from "../type";
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
                    {Object.keys(categori)[0] !== '주요설치현황' && <img src={"http://localhost:3001/uploads/아이콘/triangle.png"} alt='triangle' />}
                </div>
            </div>
        </>}
        {Object.keys(categori)[0] === '주요설치현황' ?
            <a href="/photo">{Object.keys(categori)}</a>
            :
            Object.keys(categori)[0] === '고객서비스' ?
                <a href="/service">{Object.keys(categori)}</a>
                :
                <a href="#!">{Object.keys(categori)}</a>}
        <ul onMouseOut={downHandler}>
            {liList.map((x: string, i: number) =>
                <NavLiSmall name={x} key={i} categori={categori} id={liList.indexOf(x)} offEventHandelr={offEventHandelr} />)}
        </ul>
    </li>
}

export default NavLi