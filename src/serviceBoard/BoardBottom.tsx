import React from "react";
import { question, reference } from "../type";
import ServiceRow from "./ServiceRow";
type propsData = {
    categori: string;
    list: reference[] | question[];
}

const BoardBottom = ({ categori, list }: propsData) => {
    return <div id="service_board_bottom">
        {list.length === 0 ?
            <div style={{ marginTop: '150px' }}>일치하는 내용이 없습니다.</div>
            :
            list.map(data => <ServiceRow data={data} categori={categori} key={data.id} />)}
    </div>
}

export default BoardBottom;
