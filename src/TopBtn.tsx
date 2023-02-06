import React, { useEffect, useRef, useState } from "react";

const TopBtn = () => {



    const moveTop = () => {
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    const [scrollY, setScrollY] = useState(0)

    window.addEventListener('scroll', () => { scrollEvent() });

    const scrollEvent = () => {
        setScrollY(window.scrollY)
    }

    return <>
        {scrollY > 400 &&
            <div id="top_btn_box">
                <img onClick={moveTop} id="top_btn" src={"../images/upward-arrow.png"} />
            </div>}
    </>
}

export default TopBtn;