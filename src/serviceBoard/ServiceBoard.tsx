import React from "react";

const ServiceBoard = () => {
    return <section id="service">
        <div>
            <div id="service_categori">
            <button>자료실</button>
            <button>공지사항</button>
            <button>질문게시판</button>
            </div>
            <div id="service_board">
                <div id="service_board_header">전체글보기</div>
                <div id="service_board_top">공지</div>
                <div id="service_board_bottom">글</div>
                <div id="service_board_page">페이지</div>
                <div id="service_board_search">검색</div>
            </div>
        </div>
    </section>
}

export default ServiceBoard;