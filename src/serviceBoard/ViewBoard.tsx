import React from "react";
import { question, reference } from "../type";
type propsData = {
    data: reference | question;
    categori: string;
    viewBoardHandeler: () => void;
    indicate?: string
}

const ViewBoard = ({ data, categori, viewBoardHandeler, indicate }: propsData) => {
    const content = data.content.split('\n').map((line, i) => {
        return (<span key={i}>{line}<br /></span>)
    })
    return <div id="view_board">
        <div id="view_top">
            <div id="view_top_btn_box"><button onClick={viewBoardHandeler}>뒤로가기</button></div>
            <div className="view_top_content">
                {indicate ?
                    <>{`<${indicate}>`}</>
                    :
                    <>{`<${categori}>`}</>
                }
            </div>
            <div id="view_top_title" className="view_top_content">
                <h1>{data.title}</h1>
            </div>
            <div id="view_top_detail" className="view_top_content">
                <div>
                    <span>{data.author}</span>
                </div>
                <div id="view_top_detail">
                    <span>글 작성 : {data.createAt}</span>
                    <span>조회 : {data.view}</span>
                </div>
            </div>
        </div>
        <div id="row_line" style={{ padding: '15px 0' }}></div>
        <div id="view_content">
            {content}
        </div>
        <div id="view_bottom">
            {data.link &&
                <a href={data.link}><img style={{ width: '25px', marginLeft: '5px' }} src={"http://localhost:3001/uploads/아이콘/floppy-disk.png"} alt='disk' />
                    : {data.link}
                </a>}
        </div>
    </div>
}

export default ViewBoard;