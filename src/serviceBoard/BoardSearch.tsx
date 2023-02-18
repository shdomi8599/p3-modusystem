import React from "react";

const BoardSearch = () => {
    return <div id="service_board_search">
        <select style={{ width: '100px' }} name="" id="">
            <option value="">제목</option>
            <option value="">작성자</option>
            <option value="">내용</option>
        </select>
        <input style={{ width: '150px', margin:'0 10px' }} type="text" />
        <button style={{ padding:'2px' }}>검색</button>
    </div>
}

export default BoardSearch;