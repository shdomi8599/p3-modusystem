import React, { useEffect, useRef, useState } from "react";

const QuestionForm = ({ formHandler,  }: { formHandler: () => void;  }) => {
    const [check, setCheck] = useState(false)
    const areaTarget = useRef<HTMLTextAreaElement>(null)
    const authorTarget = useRef<HTMLInputElement>(null)
    const pwTarget = useRef<HTMLInputElement>(null)
    const titleTarget = useRef<HTMLInputElement>(null)
    const checkHandeler = () => {
        if (authorTarget.current?.value === '') {
            return authorTarget.current.focus()
        }
        if (pwTarget.current?.value === '') {
            return pwTarget.current.focus()
        }
        if (titleTarget.current?.value === '') {
            return titleTarget.current.focus()
        }
        if (areaTarget.current?.value === '') {
            return areaTarget.current.focus()
        }
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
    //체크가 끝나야만 정상 주소로 폼이 제출되도록해줌
    return <form id="question_form" method="post" action={check ? "http://localhost:3001/service" : ""} target='blankifr'>
        <div id="question_form_top">
            <div style={{ paddingBottom: '10px' }}>
                <button onClick={formHandler}>뒤로가기</button>
            </div>
            <div >
                <div>{`<질문게시판>`}</div>
                <div><input ref={authorTarget} id='question_author' name='author' type='text' placeholder='닉네임을 입력해주세요.' /></div>
                <div><input ref={pwTarget} id='question_pw' name='password' type='password' placeholder='비밀번호를 입력해주세요.' /></div>
                <div><input ref={titleTarget} id='question_title' name='title' type='text' placeholder='제목을 입력해주세요.' /></div>
            </div>
        </div>
        <div id="row_line" style={{ padding: '15px 0' }}></div>
        <div id="question_form_middle">
            <textarea ref={areaTarget} name="content" id="question_textarea" placeholder="내용을 입력해주세요." />
        </div>
        <div id="question_form_bottom">
            <button onClick={checkHandeler}>질문 등록</button>
        </div>
        <iframe title='myFrame' name='blankifr' style={{ display: 'none' }}></iframe>
    </form>
}

export default QuestionForm;