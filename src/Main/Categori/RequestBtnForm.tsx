import React, { useState } from "react";
import KakaoAdress from "./KakaoAdress";
import Option from "../../Components/Option";
const productList: string[] = ["차량차단기", "리모콘", "RF카드", "주차권발행기", "차량번호인식기", "요금계산기", "주차부스", "신호관제"]

//나중엔 div를 폼으로 변경해서 서버로 제출되도록 할까 고민중
const RequestBtnForm = ({ formHandeler }: { formHandeler: () => void }) => {
    const [address, setAdress] = useState()

    const addressData = (data: any) => {
        setAdress(data)
    }
    
    return <div id="request_btn_form">
        <div id="exit_box">
            <img id="exit_x" src="../images/free-icon-x-657059.png" onClick={formHandeler} />
        </div>
        <div className="privacy">
            <label htmlFor="">이름</label><input type="text" id="name_input" placeholder="회사명/성함" />
        </div>
        <div className="privacy">
            <label htmlFor="">주소</label><input id="adress_input" disabled value={address} /><KakaoAdress addressData={addressData} />
        </div>
        <div className="privacy">
            <label htmlFor="">연락처</label><input id="tel_input" type="text" placeholder="전화번호/이메일" />
        </div>
        <div className="hope">
            <label id="select_label" htmlFor="">설치 희망목록 </label>
            <select name="" id="">{productList.map(x => <Option name={x} key={x} />)}</select>
        </div>
        <div className="additional">
            <label htmlFor="">추가 전달 사항</label><input type="text" />
        </div>
        <div className="btn_form_box">
            <button>신청</button>
        </div>
    </div>
}

export default RequestBtnForm;