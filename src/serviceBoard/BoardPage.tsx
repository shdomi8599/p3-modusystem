import React from "react";
type propsData = {
    checkNowPage: (number: number) => void;
    listCount: number[]
}

const BoardPage = ({ checkNowPage, listCount }: propsData) => {
    return <div id="service_board_page">
        {listCount.map(x => <span onClick={() => { checkNowPage(x) }} key={x}>{x}</span>)}
    </div>
}

export default BoardPage;