import React, { useEffect, useState } from "react";
import { getService } from "../api/getService";
type propsData = {
    nowList: string;
    checkNowPage: (number: number) => void
}

const BoardPage = ({ nowList, checkNowPage }: propsData) => {
    const [announcementCount, setAnnouncement] = useState(0)
    const [listCount, setListCount] = useState<number[] | []>([])
    //1페이지에선 공지가 표시되기때문에 공지 개수를 더한 값을 페이지 리스트에 표시하도록 해줌
    const createPageList = (count: number) => {
        setListCount(Array(Math.ceil((count + announcementCount) / 10)).fill(1).map((x, i) => x + i))
    }
    useEffect(() => {
        getService(`${nowList}Length`).then(res => {
            createPageList(res)
        })
        getService(`announcementLength`).then(res => {
            setAnnouncement(res)
        })
    })
    return <div id="service_board_page">
        {listCount.map(x => <span onClick={() => { checkNowPage(x) }} key={x}>{x}</span>)}
    </div>
}

export default BoardPage;