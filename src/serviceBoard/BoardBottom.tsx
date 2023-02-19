import React, { useEffect, useState } from "react";
import { getService } from "../api/getService";
import { question, reference } from "../type";
import ServiceBottomRow from "./ServiceRow";
type propsData = {
    nowList: string;
    nowPage: number;
    categori: string
}

const BoardBottom = ({ nowList, nowPage, categori }: propsData) => {
    const [list, setList] = useState<reference[] | question[] | []>([])
    //위에서 상태를 전달받으면 그걸 검색해서 표시
    useEffect(() => {
        setList([]);
        getService(nowList, nowPage).then(res => {
            setList(res)
        })
    }, [nowList, nowPage])
    return <div id="service_board_bottom">
        {list.map(data =>
            <ServiceBottomRow data={data} categori={categori} key={data.id} />)}
    </div>
}

export default BoardBottom;
