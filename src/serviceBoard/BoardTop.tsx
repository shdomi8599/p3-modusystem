import React, { useEffect, useState } from "react";
import { getService } from "../api/getService";
import { announcement, stringKeyObj } from "../type";
import ServiceRow from "./ServiceTopRow";

const BoardTop = ({categori}:{categori:string}) => {
    const headerList: stringKeyObj =
    {
        "board_top_title": '제목',
        "board_top_author": '작성자',
        "board_top_date": '작성일',
        "board_top_view": '조회수'
    }
    const [announcement, setAnnouncement] = useState<announcement[] | []>([])
    //위에서 상태를 전달받으면 그걸 검색해서 표시
    useEffect(() => {
        getService('announcement').then(res => {
            setAnnouncement(res)
        })
    }, [])
    const style = {flex:'0.1'}
    return <div id="service_board_top" style={style}>
        <div id="board_top_header">
            {Object.keys(headerList).map(key => <div id={key} key={key}>{headerList[key]}</div>)}
        </div>
        <div id="row_line"></div>
        {announcement.map(announcement => <ServiceRow announcement={announcement} key={announcement.id} />)}
    </div>
}

export default BoardTop;