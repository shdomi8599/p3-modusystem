import React, { useEffect } from 'react';
import { navLiList } from './Data/type';
import NavLi from './NavLi';

const Header = ({offEventHandelr}:{offEventHandelr:()=>void;}) => {

    const navLiList: navLiList = [
        { 회사소개: ["인사말", "조직도", "찾아오시는길"] },
        { 제품소개: ["차량차단기", "리모콘", "RF카드방식", "주차권발행기", "차량번호인식기", "요금계산기", "주차부스", "신호관제", "기타제품"] },
        { 주요설치현황: ["설치현황", "사진자료"] },
        { 고객서비스: ["자료실", "공지사항", "게시판"] },
        { 온라인견적: ["견적의뢰"] }
    ]

    //wrap_main값을 null로 인식할때가 있어서 useEffect를 통해 한번더 체크 
    let wrap_main = document.querySelector("#wrap_main")
    useEffect(() => {
        wrap_main = document.querySelector("#wrap_main")
    }, [])

    const moveTop = () => {
        offEventHandelr()
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
        wrap_main && wrap_main.scrollTo({ left: 0, top: 0, behavior: "smooth" });
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
                {navLiList.map((x, i) => <NavLi categori={x} key={i} offEventHandelr={offEventHandelr}/>)}
            </ul>
        </nav>
        <div className='w0_5'></div>
    </header>
}

export default Header;