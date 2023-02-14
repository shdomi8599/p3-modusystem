import React, { useEffect, useState } from "react";
import Categori from "./Categori"
import NotificationMessage from "../../components/NotificationMessage";
import RequestBtn from "./RequestBtn";
import RequestForm from "./RequestForm";

const MainCategori = ({ offEventHandelr }: { offEventHandelr: () => void; }) => {
    const imgList: number[] = Array(8).fill(1).map((x, i) => x + i)
    const [message, setMessage] = useState<boolean>(false)
    const [content, setContent] = useState<string>('')

    //메세지 데이터와 메세지의 상태를 바꿔주는 함수
    const messageHandeler = (text: string) => {
        setContent(text)
        setMessage(!message)
    }

    //메세지가 사라지도록 도와주는 함수
    useEffect(() => {
        if (content === '문의해주셔서 감사합니다.') {
            setTimeout(() => {
                setMessage(false)
            }, 1500)
        }
        setTimeout(() => {
            setMessage(false)
        }, 1000)
    }, [message, content])

    return <section id="main">
        <div id="main_top_content_box">
            <div id="main_text_box">
                맡겨주세요<p />모두시스템에게
            </div>
            <RequestBtn messageHandeler={messageHandeler} />
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