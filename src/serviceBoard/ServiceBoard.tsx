import React, { useState } from "react";
import BoardBottom from "./BoardBottom";
import BoardPage from "./BoardPage";
import BoardSearch from "./BoardSearch";
import BoardTop from "./BoardTop";

const ServiceBoard = () => {
    const serviceCategori = ['자료실', '공지사항', '질문게시판']
    const [categori,setCategori]= useState('질문게시판')
    const categoriHandler = (name:string)=>{
        setCategori(name)
    }

    //글이 한 페이지에 10개씩만 있어야 보기좋음
    return <section id="service">
        <div>
            <div id="service_categori">
                {serviceCategori.map(categori => <button onClick={()=>{categoriHandler(categori)}} key={categori}>{categori}</button>)}
            </div>
            <div id="service_board">
                <div id="service_board_header">공지사항</div>
                <BoardTop categori={categori}/>
                <BoardBottom categori={categori}/>
                <BoardPage/>
                <BoardSearch/>
            </div>
        </div>
    </section>
}

export default ServiceBoard;