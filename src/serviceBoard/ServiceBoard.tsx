import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { filterAuthor, filterContent, filterTitle, question, reference, stringKeyObj } from "../type";
import BoardBottom from "./BoardBottom";
import BoardPage from "./BoardPage";
import BoardSearch from "./BoardSearch";
import BoardTop from "./BoardTop";
import QuestionForm from "./QuestionForm";
import { getService } from "../api/getService";
import { dateSlice } from "../function/dateSlice";

const ServiceBoard = () => {
    const location = useLocation()
    const serviceCategori = ['자료실', '공지사항', '질문게시판']
    //필터와 일반형 데이터들을 구분지어서 받을수 있도록
    const [dataType, setDataType] = useState('common')
    const changeDataType = (type: string) => {
        setDataType(type)
    }
    //필터 검색이벤트로 생성되는 데이터
    const [filterData, setFilterData] = useState<stringKeyObj | undefined>(undefined)
    const updateFilterData = (data: stringKeyObj | undefined) => {
        setFilterData(data)
    }
    //폼 ON/OFF
    const [form, setForm] = useState(false)
    const formHandler = () => {
        setForm(!form)
    }
    //현재 페이지를 체크
    const [nowPage, setNowPage] = useState(1)
    const checkNowPage = (number: number) => {
        setNowPage(number)
    }
    //카테고리에 맞게 게시판을 이동
    const [categori, setCategori] = useState('질문게시판')
    const categoriHandler = (name: string) => {
        setDataType('common')
        setNowPage(1)
        setCategori(name)
    }
    //한글 카테고리를 영문 카테고리로 치환
    const changeCategori: stringKeyObj = {
        '공지사항': 'announcement',
        '질문게시판': 'question',
        '자료실': 'reference'
    }
    const nowList = changeCategori[categori]
    //api데이터 보관
    const [list, setList] = useState<reference[] | question[]>([])
    //카테고리 숫자와 데이터 숫자를 파악하기 위함
    const [announcementCount, setAnnouncement] = useState(0)
    const [listCount, setListCount] = useState<number[]>([])
    useEffect(() => {
        setForm(false)
        if (location.state) {
            //네비를 통해 들어온다면 그 카테고리에 맞게 재설정
            window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
            const id = location.state.id;
            setCategori(id)
        }
        //데이터 타입이 일반일때
        if (dataType === 'common') {
            setList([])
            getService(nowList)
                .then(res => {
                    setList(dateSlice(res, announcementCount, nowPage))
                    setListCount(Array(Math.ceil((res.length + announcementCount) / 10)).fill(1).map((x, i) => x + i))
                })
            getService(`announcement`).then(res => {
                setAnnouncement(res.length)
            })
        }
        //검색으로 데이터를 찾게될때
        if (dataType === 'filtered' && filterData) {
            setList([])
            getService(nowList)
                .then(res => {
                    if (filterData.select === '제목') {
                        const data = res.filter((x: filterTitle) => x.title.includes(filterData.value))
                        setList(dateSlice(data, announcementCount, nowPage))
                        setListCount(Array(Math.ceil((data.length + announcementCount) / 10)).fill(1).map((x, i) => x + i))
                    }
                    if (filterData.select === '작성자') {
                        const data = res.filter((x: filterAuthor) => x.author.includes(filterData.value))
                        setList(dateSlice(data, announcementCount, nowPage))
                        setListCount(Array(Math.ceil((data.length + announcementCount) / 10)).fill(1).map((x, i) => x + i))
                    }
                    if (filterData.select === '내용') {
                        const data = res.filter((x: filterContent) => x.content.includes(filterData.value))
                        setList(dateSlice(data, announcementCount, nowPage))
                        setListCount(Array(Math.ceil((data.length + announcementCount) / 10)).fill(1).map((x, i) => x + i))
                    }
                })
        }
    }, [categori, location.state, nowList, nowPage, dataType, filterData, announcementCount])
    return <section id="service">
        <div>
            <div id="service_categori">
                {serviceCategori.map(categori =>
                    <button onClick={() => { categoriHandler(categori) }} key={categori}>{categori}</button>)}
            </div>
            <div id="service_board">
                {form && <QuestionForm formHandler={formHandler} />}
                <div id="service_board_header">
                    <span>{categori}</span>
                    <span>{nowPage}페이지</span>
                </div>
                <BoardTop nowPage={nowPage} categori={categori} />
                <BoardBottom categori={categori} list={list} />
                {categori === '질문게시판' && <button id="addQuestionBtn" onClick={formHandler}>질문 등록</button>}
                <BoardPage checkNowPage={checkNowPage} listCount={listCount} />
                <BoardSearch updateFilterData={updateFilterData} changeDataType={changeDataType} checkNowPage={checkNowPage} />
            </div>
        </div>
    </section>
}

export default ServiceBoard;