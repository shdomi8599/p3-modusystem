import React, { useState } from "react";
import { question, reference } from "../type";

const ServiceBottomRow = ({ data, categori }: { data: reference | question, categori: string }) => {
    const [view, setView] = useState(data.view)
    const viewCount = () => {
        setView(view + 1)
    }
    console.log(data)
    return <>
        {categori === '공지사항' ? <></> : <>
            <div id="service_row">
                <div id="row_tag">
                    {categori}
                </div>
                <div id="row_title" onClick={viewCount}>
                    {data.title}
                    {categori === '자료실' && <img style={{ width: '15px', marginLeft: '5px' }} src={"http://localhost:3001/uploads/아이콘/floppy-disk.png"} alt='disk' />}
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
            <div id="row_line"></div></>}
    </>
}

export default ServiceBottomRow;