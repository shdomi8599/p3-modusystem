import React from "react";

const BoardNav = () => {
    return <header>
        <div id='nav_header' >
            <div id='nav_header_content'>
            </div>
            <div className='w0_5'></div>
        </div>
        <nav>
            <ul id='nav_ul'>
                <li className='nav_li' id="nav_title">
                    <a id='photo_a' href='/'><img id="modu_logo" src={"http://localhost:3001/uploads/로고/MODOO1.png"} alt={'logo'} /></a>
                </li>
            </ul>
        </nav>
        <div className='w0_5'></div>
    </header>
}

export default BoardNav;