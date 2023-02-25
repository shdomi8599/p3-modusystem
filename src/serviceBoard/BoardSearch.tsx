import React, { useState } from "react";
import { stringKeyObj } from "../type";
type propsData = {
    updateFilterData: (data: stringKeyObj) => void;
    changeDataType: (type: string) => void;
    checkNowPage: (number: number) => void
}

const BoardSearch = ({ updateFilterData, changeDataType, checkNowPage }: propsData) => {
    //선택된 옵션 체크
    const [select, setSelect] = useState('제목')
    const selectOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelect(e.target.value)
    }
    //인풋값 업데이트
    const [value, setValue] = useState('')
    const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    //검색 버튼 이벤트
    const filterEvent = () => {
        const data = { select, value }
        updateFilterData(data)
        checkNowPage(1)
        changeDataType('filtered')
        setValue('')
    }
    //인풋에서 바로 enter키로 검색버튼이 실행되도록
    const onCheckEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            filterEvent()
        }
    }
    //옵션값,카테고리값,인풋값
    const options = ["제목", "작성자", "내용"]
    return <div id="service_board_search">
        <select onChange={selectOption} style={{ width: '100px' }} name="" id="">
            {options.map(option => <option key={option}>{option}</option>)}
        </select>
        <input onKeyDown={onCheckEnter} onChange={updateValue} style={{ width: '150px', margin: '0 10px' }} type="text" />
        <button onClick={filterEvent} style={{ padding: '2px' }}>검색</button>
    </div>
}

export default BoardSearch;