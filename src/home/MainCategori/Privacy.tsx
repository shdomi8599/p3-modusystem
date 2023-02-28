import React, { useRef } from "react";
import KakaoAdress from "./KakaoAdress";
type PropsData = {
    address: string | null,
    addressData: (data: string) => void,
    allDataUpdate: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const Privacy = ({ address, addressData, allDataUpdate }: PropsData) => {
    const name = useRef<HTMLInputElement>(null)
    const adress = useRef<HTMLInputElement>(null)
    const tel = useRef<HTMLInputElement>(null)

    return <>
        <div className="privacy">
            <label htmlFor="">이름</label><input type="text" id="name_input" placeholder="회사명/성함" ref={name} name={'id'} onChange={allDataUpdate} />
        </div>
        <div className="privacy" id="adress_input_box">
            <div>
                <label htmlFor="">주소</label><input id="adress_input" disabled value={address || ''} /><KakaoAdress addressData={addressData} />
            </div>
            <div>
                <input type="text" id="adress_input2" placeholder="상세주소" ref={adress} name={'address2'} onChange={allDataUpdate} />
            </div>
        </div>
        <div className="privacy">
            <label htmlFor="">연락처</label><input id="tel_input" type="text" placeholder="전화번호/이메일" ref={tel} name={'tel'} onChange={allDataUpdate} />
        </div>
    </>
}

export default Privacy;