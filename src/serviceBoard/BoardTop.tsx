import React, { useEffect, useState } from "react";
import { getService } from "../api/getService";
import { announcement, stringKeyObj } from "../type";
import ServiceRow from "./ServiceRow";
type propsData = {
    nowPage: number;
    categori: string
}

const BoardTop = ({ nowPage, categori }: propsData) => {
    const indicate = '공지사항'
    const headerList: stringKeyObj =
    {
        "board_top_title": '제목',
        "board_top_author": '작성자',
        "board_top_date": '작성일',
        "board_top_view": '조회수'
    }
    const [announcement, setAnnouncement] = useState<announcement[]>([])
    //위에서 상태를 전달받으면 그걸 검색해서 표시
    useEffect(() => {
        setAnnouncement([])
        getService('announcement').then(res => {
            setAnnouncement(res)
        })
    }, [])
    return <div id="service_board_top">
        <div id="board_top_header">
            {Object.keys(headerList).map(key => <div id={key} key={key}>{headerList[key]}</div>)}
        </div>
        <div id="row_line"></div>
        {nowPage === 1 && announcement.map(announcement =>
            <ServiceRow categori={categori} indicate={indicate} data={announcement} key={announcement.id} />)}
    </div>
}

export default BoardTop;