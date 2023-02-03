import React from "react"
import Categori from "./Categori"

const Main = () => {
    const imgList: number[] = Array(8).fill(1).map((x, i) => x + i)

    return <section id="main">
        <div id="main_top_content_box">
            <div id="main_text_box">모두시스템에선<p /> 이런 작업을 해요</div>
            <div id="main_scroll_box">박스</div>
        </div>
        <div id="main_bottom_content_box">
            <div id="main_categori_box">
                <ul>
                    {imgList.map((x, i) => <Categori key={x} id={i} />)}
                </ul>
            </div>
            <div id="main_login_box">로그인 박스</div>
        </div>
    </section>
}

export default Main