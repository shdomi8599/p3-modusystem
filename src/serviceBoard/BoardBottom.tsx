import React, { useEffect, useState } from "react";
import { getService } from "../api/getService";
import { question, reference, stringKeyObj } from "../type";
import ServiceBottomRow from "./ServiceBottomRow";

const BoardBottom = ({ categori }: { categori: string }) => {
    const changeCategori: stringKeyObj = {
        '공지사항': 'announcement',
        '질문게시판': 'question',
        '자료실': 'reference'
    }

    const nowList = changeCategori[categori]
    console.log(nowList)
    const [list, setList] = useState<reference[] | question[] | []>([])
    //위에서 상태를 전달받으면 그걸 검색해서 표시
    useEffect(() => {
        getService(nowList).then(res => {
            setList(res)
        })
    }, [nowList])
    return <div id="service_board_bottom">
        {list.map(data =>
            <ServiceBottomRow data={data} categori={categori} key={data.id} />)}
    </div>
}

export default BoardBottom;
