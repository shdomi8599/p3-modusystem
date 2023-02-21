import React, { useState } from "react";
import { question, reference } from "../type";
type propsData = {
    data: reference | question;
    message: string;
    passwordHandeler: () => void;
    checkHandeler: () => void;
    editHandeler: () => void
}

const PasswordForm = ({ data, message, passwordHandeler, checkHandeler, editHandeler }: propsData) => {
    const [value, setValue] = useState('')
    const inputData = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return <div id="password_form">
        {data.password === value ?
            <span style={{ fontSize: '15px', color: 'blue' }}>비밀번호가 일치합니다</span>
            :
            <span style={{ fontSize: '15px', color: 'red' }}>비밀번호가 일치하지 않습니다.</span>}
        <div id="password_input_box">
            <input value={value} onChange={inputData} type="password" placeholder="비밀번호를 입력해주세요." />
        </div>
        <div id="password_delete">
            {data.password === value ?
                message === '삭제하기' ?
                    <form method="post" action={`http://localhost:3001/service/${data.id}?_method=DELETE`} target='blankifr'>
                        <button onClick={checkHandeler}>{message}</button>
                    </form> :
                    <>
                        <button onClick={editHandeler}>수정하기</button>
                    </>
                :
                <button onClick={passwordHandeler}>취소하기</button>
            }
        </div>
    </div>
}

export default PasswordForm;