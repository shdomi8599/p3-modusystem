import React, { useState } from "react";
import { navLi } from "./Data/type";
import NavLiSmall from "./NavLiSmall";

const NavLi = ({ categori }: { categori: navLi }) => {

    const liList = categori[Object.keys(categori)[0]]

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
            {liList.map((x: string, i: number) => <NavLiSmall name={x} key={i} categori={categori} id={liList.indexOf(x)} />)}
        </ul>
    </li>
}

export default NavLi