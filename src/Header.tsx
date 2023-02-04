import React from 'react';

const Header = () => {
    return <header>
        <div id='nav_header' >
            <div id='nav_header_content'>
                <a className='nav_header' >로그인</a>
                <a className='nav_header' >로그인</a>
                <a className='nav_header' >로그인</a>
                <a id='nav_login'>로그인</a>
            </div>
            <div className='w0_5'></div>
        </div>
        <nav>
            <ul id='nav_ul'>
                <li className='nav_li' id="nav_title">
                    <img id="modu_logo" src={"../images/MODOO1.png"} />
                </li>
                <li className='nav_li'>
                    <a>회사소개</a>
                    <ul>
                        <li><a>인사말</a></li>
                        <li><a>조직도</a></li>
                        <li><a id='nav_last_a'>찾아오시는길</a></li>
                    </ul>
                </li>
                <li className='nav_li'>
                    <a>제품소개</a>
                    <ul>
                        <li><a>차량차단기</a></li>
                        <li><a>리모콘</a></li>
                        <li><a>RF카드방식</a></li>
                        <li><a>주차권발행기</a></li>
                        <li><a>차량번호인식기</a></li>
                        <li><a>요금계산기</a></li>
                        <li><a>주차부스</a></li>
                        <li><a>신호관제</a></li>
                        <li><a id='nav_last_a'>기타제품</a></li>
                    </ul>
                </li>
                <li className='nav_li'>
                    <a>주요설치현황</a>
                    <ul>
                        <li><a>설치현황</a></li>
                        <li><a id='nav_last_a'>사진자료</a></li>
                    </ul>
                </li>
                <li className='nav_li'>
                    <a>고객서비스</a>
                    <ul>
                        <li><a>자료실</a></li>
                        <li><a>공지사항</a></li>
                        <li><a id='nav_last_a'>게시판</a></li>
                    </ul>
                </li>
                <li className='nav_li'>
                    <a>온라인견적</a>
                    <ul>
                        <li><a id='nav_last_a'>견적의뢰</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div className='w0_5'></div>
    </header>
}

export default Header;