import React, { useEffect, useState } from "react";
import Categori from "./Categori"
import NotificationMessage from "./NotificationMessage";
import RequestBtn from "./RequestBtn";
import RequestForm from "./RequestForm";

const MainCategori = ({ offEventHandelr }: { offEventHandelr: () => void; }) => {
    const imgList: number[] = Array(8).fill(1).map((x, i) => x + i)
    const [message, setMessage] = useState(false)
    const [content, setContent] = useState('')
    const messageHandeler = (text: string) => {
        setContent(text)
        setMessage(!message)
    }

    useEffect(() => {
        if (content === '문의해주셔서 감사합니다.') {
            setTimeout(() => {
                setMessage(false)
            }, 5000)
        }
        setTimeout(() => {
            setMessage(false)
        }, 3000)
    }, [message])

    return <section id="main">

        <div id="main_top_content_box">
            <div id="main_text_box">
                맡겨주세요<p />모두시스템에게
            </div>
            <RequestBtn />
        </div>
        {message && <NotificationMessage content={content} />}
        <div id="main_bottom_content_box">
            <div id="main_categori_box">
                <ul>
                    {imgList.map((x, i) => <Categori key={x} id={i} offEventHandelr={offEventHandelr} />)}
                </ul>
            </div>
            <div id="main_login_box">
                <RequestForm messageHandeler={messageHandeler} />
            </div>
        </div>
    </section>
}

export default MainCategori;