import React from 'react';
import { navLiList } from '../type';
import NavLi from './NavLi';

const MainNav = ({ offEventHandelr }: { offEventHandelr: () => void; }) => {
    const navLiList: navLiList = [
        { 회사소개: ["인사말", "조직도", "찾아오시는길"] },
        { 제품소개: ["차량차단기", "리모콘", "RF카드방식", "주차권발행기", "차량번호인식기", "요금계산기", "주차부스", "신호관제"] },
        { 주요설치현황: [] },
        { 고객서비스: ["자료실", "공지사항", "질문게시판"] },
    ]
    //최상단 페이지로 이동하면서 메인지도 리셋시켜주는 함수
    let wrap_main = document.querySelector("#wrap_main")!
    const moveTop = () => {
        offEventHandelr()
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        wrap_main.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }
    return <>
        <header>
            <div id='nav_header' >
                <div id='nav_header_content'>
                </div>
                <div className='w0_5'></div>
            </div>
            <nav>
                <ul id='nav_ul'>
                    <li className='nav_li' id="nav_title">
                        <img onClick={moveTop} id="modu_logo" src={"http://localhost:3001/uploads/로고/MODOO1.png"} alt={'logo'} />
                    </li>
                    {navLiList.map((x, i) => <NavLi categori={x} key={i} offEventHandelr={offEventHandelr} />)}
                </ul>
            </nav>
            <div className='w0_5'></div>
        </header>
    </>
}

export default MainNav;