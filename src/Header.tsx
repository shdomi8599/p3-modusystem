import React from 'react';


const Header = () => {


    return <header>
        <div id='nav_header' >
            <div id='nav_header_content'> 모두시스템 로그인</div>
            <div className='w0_5'></div>
        </div>
        <nav>
            <ul id='nav_ul'>
                <li className='nav_li' id="nav_title">
                    <img id="modu_logo"src={"../images/MODOO1.png"} />  
                </li>
                <li className='nav_li'>회사소개</li>
                <li className='nav_li'>제품소개</li>
                <li className='nav_li'>주요설치현황</li>
                <li className='nav_li'>고객서비스</li>
                <li className='nav_li'>온라인견적</li>
                <li className='nav_li'>고객센터</li>
            </ul>
        </nav>
        <div className='w0_5'></div>
    </header>
}

export default Header;