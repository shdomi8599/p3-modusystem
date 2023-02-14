import React from "react";

const Footer = () => {
    return <footer>
        <div id="footer_logo">
            <img id="modu_logo" src={"http://localhost:3001/uploads/로고/MODOO2.png"} alt='logo' />
        </div>
        <div id="footer_content">
            <div>
                <span>주소 : 서울특별시 송파구 오금동 133-8번지</span>
                <span>대표자 : 신정식</span>
                <span>사업자번호 : 206-19-78321</span>
                <span>대표전화 : 02-401-0050</span>
                <span>팩스번호 : 02-401-0046</span>
            </div>
            <div>
                <span>COPYRIGHT© 2007 모두시스템 ALL RIGHTS RESERVED.</span>
            </div>
        </div>
    </footer>
}

export default Footer;