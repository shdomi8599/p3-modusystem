import React, { useEffect, useState } from "react";
import PasswordForm from "./PasswordForm";
import { question, reference } from "../type";
import EditBoard from "./EditBoard";
type propsData = {
    data: reference | question;
    categori: string;
    viewBoardHandeler: () => void;
    indicate?: string;
    view: number
}

const ViewBoard = ({ data, categori, viewBoardHandeler, indicate, view }: propsData) => {
    const [edit, setEdit] = useState(false)
    const editHandeler = () => {
        setEditPassword(false)
        setEdit(!edit)
    }
    //삭제하기 비번폼
    const [deletePassword, setDeletePassword] = useState(false)
    const passwordHandeler = () => {
        setDeletePassword(!deletePassword)
    }
    //수정하기 비번폼
    const [editPassword, setEditPassword] = useState(false)
    const editPasswordHandeler = () => {
        setEditPassword(!editPassword)
    }
    //의도적으로 지연시키고 새로고침되는 효과를 주기위한 state
    const [check, setCheck] = useState(false)
    const checkHandeler = () => {
        setCheck(true)
    }
    //새로고침효과로 사용자에게 데이터가 변화된 걸 알리기 위한 effect
    useEffect(() => {
        if (check) {
            setTimeout(() => {
                window.location.replace('/service')
            }, 50)
            setCheck(false)
        }
    }, [check])
    //줄바꿈 적용
    const content = data.content.split('\n').map((line, i) => {
        return (<span key={i}>{line}<br /></span>)
    })
    return <div id="view_board">
        {edit && <EditBoard formHandler={editHandeler} data={data} />}
        <div id="view_top">
            {deletePassword
                && <PasswordForm passwordHandeler={passwordHandeler} data={data} message={'삭제하기'} checkHandeler={checkHandeler} editHandeler={editHandeler} />}
            {editPassword
                && <PasswordForm passwordHandeler={editPasswordHandeler} data={data} message={'수정하기'} checkHandeler={checkHandeler} editHandeler={editHandeler} />}
            <div id="view_top_btn_box">
                <div>
                    <button onClick={viewBoardHandeler}>뒤로가기</button>
                </div>
                {categori === '질문게시판' &&
                    <div id="edit_btn_box">
                        <button onClick={passwordHandeler}>삭제하기</button>
                        <button onClick={editPasswordHandeler}>수정하기</button>
                    </div>}
            </div>
            <div className="view_top_content">
                {indicate ?
                    <>{`<${indicate}>`}</>
                    :
                    <>{`<${categori}>`}</>
                }
            </div>
            <div id="view_top_title" className="view_top_content">
                <h1>{data.title}</h1>
            </div>
            <div id="view_top_detail" className="view_top_content">
                <div>
                    <span>{data.author}</span>
                </div>
                <div id="view_top_detail">
                    <span>글 작성 : {data.createAt}</span>
                    <span>조회 : {view}</span>
                </div>
            </div>
        </div>
        <div id="row_line" style={{ padding: '15px 0' }}></div>
        <div id="view_content">
            {content}
        </div>
        <div id="view_bottom">
            {data.link &&
                <a href={data.link}><img style={{ width: '25px', marginLeft: '5px' }} src={"http://localhost:3001/uploads/아이콘/floppy-disk.png"} alt='disk' />
                    : {data.link}
                </a>}
        </div>
        <iframe title='myFrame' name='blankifr' style={{ display: 'none' }}></iframe>
    </div>
}

export default ViewBoard;