import React, { useEffect, useState } from "react";
import { question, reference } from "../type";

const EditBoard = ({ formHandler, data }: { formHandler: () => void; data: reference | question; }) => {
    const [check, setCheck] = useState(false)
    const checkHandeler = () => {
        setCheck(true)
    }
    useEffect(() => {
        if (check) {
            setTimeout(() => {
                window.location.replace('/service')
            }, 50)
            setCheck(false)
        }
    }, [check])
    //iframe과 form의 target을 통해 페이지 이동을 막고 setTimeout으로 의도적으로 지연시켜서 폼이 정상적으로 제출되게 만들었음
    //0.05초정도만 지연되도 정상적으로 데이터가 수신되는걸 확인함 
    return <form id="question_form_edit" method="post" action={`http://localhost:3001/service/${data.id}?_method=PATCH`} target='blankifr'>
        <div id="question_form_top">
            <div style={{ paddingBottom: '10px' }}>
                <button onClick={formHandler}>뒤로가기</button>
            </div>
            <div >
                <div>{`<질문게시판>`}</div>
                <div ><input name="title" type="text" placeholder="제목을 입력해주세요." defaultValue={data.title} /></div>
            </div>
        </div>
        <div id="row_line" style={{ padding: '15px 0' }}></div>
        <div id="question_form_middle">
            <textarea name="content" id="question_textarea" placeholder="내용을 입력해주세요." defaultValue={data.content} />
        </div>
        <div id="question_form_bottom">
            <button onClick={checkHandeler}>수정 완료</button>
        </div>
        <iframe title='myFrame' name='blankifr' style={{ display: 'none' }}></iframe>
    </form>
}

export default EditBoard;