import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const QuestionForm = ({ formHandler }: { formHandler: () => void }) => {
    const navigate = useNavigate()
    const submitEvent = (e: FormEvent) => {
        e.preventDefault();
        navigate('/service')
    }
    return <form id="question_form" method="post" action="http://localhost:3001/service">
        <div id="question_form_top">
            <div style={{ paddingBottom: '10px' }}>
                <button onClick={formHandler}>뒤로가기</button>
            </div>
            <div >
                <div>{`<질문게시판>`}</div>
                <div ><input name="title" type="text" placeholder="제목을 입력해주세요." /></div>
            </div>
        </div>
        <div id="row_line" style={{ padding: '15px 0' }}></div>
        <div id="question_form_middle">
            <textarea name="content" id="question_textarea" placeholder="내용을 입력해주세요." />
        </div>
        <div id="question_form_bottom">
            <button onClick={submitEvent}>질문 등록</button>
        </div>
    </form>
}

export default QuestionForm;