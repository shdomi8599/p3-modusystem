import React, { useRef, useState } from "react";
import Option from "../../components/Option";
import { allData } from "../../type";
import Privacy from "./Privacy";

//나중엔 div를 폼으로 변경해서 서버로 제출되도록 할까 고민중
const RequestBtnForm = ({ formHandeler, messageHandeler }: { formHandeler: () => void; messageHandeler: (text: string) => void }) => {

    const productList: string[] = ["차량차단기", "리모콘", "RF카드", "주차권발행기", "차량번호인식기", "요금계산기", "주차부스", "신호관제"]
    //주소찾기를 통해 주소가 선택될때마다 변경되기 위한 state
    const [address, setAdress] = useState<string | null>(null)
    const addressData = (data: string) => {
        setAdress(data)
        setAllData({ ...allData, address1: data })
    }
    //select에서 옵션들이 선택될때마다 저장해주는 배열 state
    const select = useRef<HTMLSelectElement>(null)
    const [option, setOption] = useState<string[]>([])
    const optionHandeler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (!option.includes(e.target.value)) {
            setOption([...option, e.target.value])
        }
        setAllData({ ...allData, option: option })
    }

    //Privacy컴포넌트의 데이터들을 저장하는 state
    const [allData, setAllData] = useState<allData>({})
    const allDataUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAllData({
            ...allData,
            [e.target.name]: e.target.value
        })
    }
    const textArea = useRef<HTMLTextAreaElement>(null)
    //버튼을 누르면 로컬스토리지에 저장하는 이벤트 
    const submitEvent = () => {
        if (!allData.id) {
            messageHandeler('이름을 적어주세요.')
        } else if (!allData.address1) {
            messageHandeler('주소를 선택해주세요.')
        } else if (!allData.address2) {
            messageHandeler('상세주소를 입력해주세요.')
        } else if (!allData.tel) {
            messageHandeler('연락처를 입력해주세요.')
        } else if (!allData.option) {
            messageHandeler('설치목록을 선택해주세요.')
        } else {
            formHandeler()
            messageHandeler('문의해주셔서 감사합니다.')
            localStorage.setItem('online', JSON.stringify(allData))
        }
    }

    return <div id="request_btn_form">
        <div id="exit_box">
            <img id="exit_x" alt="exit" src="http://localhost:3001/uploads/아이콘/free-icon-x-657059.png" onClick={formHandeler} />
        </div>
        <Privacy addressData={addressData} address={address} allDataUpdate={allDataUpdate} />
        <div className="hope">
            <div>
                <label id="select_label" htmlFor="">설치 희망목록 </label>
                <select name="" id="" ref={select} onChange={optionHandeler}>{productList.map(x => <Option name={x} key={x} />)}</select>
            </div>
            <div>
                {option && option.map((x: string, i: number) => <span key={x} className="product_icon" style={{ backgroundColor: `#388FE4` }}>{x}</span>)}
            </div>
        </div>
        <div className="additional">
            <div>
                <label htmlFor="">추가 전달 사항</label>
            </div>
            <div>
                <textarea name="content" ref={textArea} onChange={allDataUpdate}></textarea>
            </div>
        </div>
        <div className="btn_form_box">
            <button id="submit_btn" onClick={submitEvent}>신청하기</button>
        </div>
    </div>
}

export default RequestBtnForm;