import React from 'react';
import { navLiList } from './Data/type';
import NavLi from './NavLi';

const Header = () => {

    const navLiList: navLiList = [
        { 회사소개: ["인사말", "조직도", "찾아오시는길"] },
        { 제품소개: ["차량차단기", "리모콘", "RF카드방식", "주차권발행기", "차량번호인식기", "요금계산기", "주차부스", "신호관제", "기타제품"] },
        { 주요설치현황: ["설치현황", "사진자료"] },
        { 고객서비스: ["자료실", "공지사항", "게시판"] },
        { 온라인견적: ["견적의뢰"] }
    ]

    const moveTop = ()=>{
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

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
                    <img onClick={moveTop} id="modu_logo" src={"../images/MODOO1.png"} />
                </li>
                {navLiList.map((x, i) => <NavLi categori={x} key={i} />)}
            </ul>
        </nav>
        <div className='w0_5'></div>
    </header>
}

export default Header;