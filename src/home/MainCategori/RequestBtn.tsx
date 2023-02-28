import React, { useState } from "react";
import BlockPage from "../../components/BlockPage";
import RequestBtnForm from "./RequestBtnForm";

const RequestBtn = ({ messageHandeler }: { messageHandeler: (text: string) => void }) => {
    let body = document.querySelector('body')!
    const [form, setForm] = useState<boolean>(false)

    const formHandeler = () => {
        setForm(!form)
    }

    form ? body.style.overflow = 'hidden' : body.style.overflow = ''

    return <>
        {form && <>
            <RequestBtnForm formHandeler={formHandeler} messageHandeler={messageHandeler} />
            <BlockPage />
        </>}
        <div id="main_scroll_box" onClick={formHandeler}>
            <button id="request_btn">
                <div>
                    <span>
                        <p>온라인으로 견적신청</p><p>:)</p>
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