import React from "react";

const NavLiSmall = ({name,categori,id}:{name:string,categori:{},id:number})=>{

    const scrollList = [597, 1114, 1683, 2252, 2769, 3338, 3855, 4424]

    const moveEvent = () => {
        window.scrollTo({ left: 0, top: scrollList[id] - 50, behavior: "smooth" });
    }

    return<li>
    {Object.keys(categori)[0] === "제품소개" ? <a onClick={moveEvent}>{name}</a> : <a>{name}</a>}
</li>
}

export default NavLiSmall;