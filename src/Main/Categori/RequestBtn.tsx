import React, { useEffect, useState } from "react";
import BlockPage from "../../Components/BlockPage";
import RequestBtnForm from "./RequestBtnForm";
let body = document.querySelector('body')!

const RequestBtn = () => {

    const [form, setForm] = useState(false)

    const formHandeler = () => {
        setForm(!form)
    }

    form ? body.style.overflow = 'hidden' : body.style.overflow = ''

    return <>
        {form && <>
            <RequestBtnForm formHandeler={formHandeler} />
            <BlockPage />
        </>}
        <div id="main_scroll_box" onClick={formHandeler}>
            <button id="request_btn">
                <div>
                    <span>
                        <p>온라인으로 의뢰하기</p><p>:)</p>
                    </span>
                </div>
                <div>
                    <span>
                        <p>감사합니다</p><p>:D</p>
                    </span>
                </div>
            </button>
        </div>
    </>
}

export default RequestBtn;