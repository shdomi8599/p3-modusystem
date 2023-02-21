import React, { useEffect, useState } from "react";
import { question, reference } from "../type";
import ViewBoard from "./ViewBoard";
type propsData = {
    data: reference | question;
    categori: string;
    indicate?: string
}
const ServiceRow = ({ data, categori, indicate }: propsData) => {
    const [view, setView] = useState(data.view)
    const [viewBoard, setViewBoard] = useState(false)
    const viewBoardHandeler = () => {
        setViewBoard(!viewBoard)
    }
    const viewCount = () => {
        setView(view + 1)
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
        viewBoardHandeler()
    }
    //다른 글을보다가 카테고리를 눌렀을때 창이 꺼지도록 설정하는 effect
    useEffect(() => {
        setViewBoard(false)
    }, [categori])
    return <>
        {categori === '공지사항' && !indicate ? <></>
            :
            <>
                <div id="service_row">
                    {viewBoard &&
                        <ViewBoard key={data.id} data={data} categori={categori} viewBoardHandeler={viewBoardHandeler} indicate={indicate} view={view} />}
                    <div id="row_tag">
                        {indicate ? indicate : categori}
                    </div>
                    <div id="row_title" onClick={viewCount}>
                        {data.title}
                        {categori === '자료실' && !indicate &&
                            <img style={{ width: '15px', marginLeft: '5px' }} src={"http://localhost:3001/uploads/아이콘/floppy-disk.png"} alt='disk' />}
                    </div>
                    <div id="row_author">
                        {data.author}
                    </div>
                    <div id="row_date">
                        {data.createAt.slice(0, 10)}
                    </div>
                    <div id="row_view">
                        {view}
                    </div>
                </div>
                <div id="row_line"></div>
            </>}
    </>
}

export default ServiceRow;