import React, { useState } from "react";
import { stringKeyObj } from "../type";
import BoardBottom from "./BoardBottom";
import BoardPage from "./BoardPage";
import BoardSearch from "./BoardSearch";
import BoardTop from "./BoardTop";
import QuestionForm from "./QuestionForm";

const ServiceBoard = () => {
    const serviceCategori = ['자료실', '공지사항', '질문게시판']
    const [form, setForm] = useState(false)
    const formHandler = () => {
        setForm(!form)
    }
    const [nowPage, setNowPage] = useState(1)
    const checkNowPage = (number: number) => {
        setNowPage(number)
    }
    const [categori, setCategori] = useState('공지사항')
    const categoriHandler = (name: string) => {
        setNowPage(1)
        setCategori(name)
    }
    const changeCategori: stringKeyObj = {
        '공지사항': 'announcement',
        '질문게시판': 'question',
        '자료실': 'reference'
    }
    const nowList = changeCategori[categori]
    return <section id="service">

        <div>
            <div id="service_categori">
                {serviceCategori.map(categori =>
                    <button onClick={() => { categoriHandler(categori) }} key={categori}>{categori}</button>)}
            </div>
            <div id="service_board">
            {form && <QuestionForm formHandler={formHandler}/>}
                <div id="service_board_header">
                    <span>{categori}</span>
                    <span>{nowPage}페이지</span>
                </div>
                <BoardTop nowPage={nowPage} categori={categori} />
                <BoardBottom nowList={nowList} nowPage={nowPage} categori={categori} />
                {categori === '질문게시판' && <button id="addQuestionBtn" onClick={formHandler}>글쓰기</button>}
                <BoardPage nowList={nowList} checkNowPage={checkNowPage} />
                <BoardSearch />
            </div>
        </div>
    </section>
}

export default ServiceBoard;