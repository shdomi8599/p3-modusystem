import React, { FormEvent, useRef } from "react";
import emailjs from '@emailjs/browser';

const MailForm = ({ messageHandeler }: { messageHandeler: (text: string) => void }) => {
    const form = useRef<HTMLFormElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const textRef = useRef<HTMLTextAreaElement>(null)

    //이메일 제출 시 유효성검사 후 제출되도록 도와주는 함수
    const sendEmail = (e: FormEvent) => {
        e.preventDefault();
        if (nameRef.current?.value.trim() === '') {
            messageHandeler('이름을 확인해주세요.')
            return nameRef.current?.focus()
        }
        if (nameRef.current?.value.split('').map(x => !isNaN(x as any)).indexOf(true) !== -1) {
            messageHandeler('이름에서 숫자를 제거해주세요.')
            return nameRef.current?.focus()
        }
        if (phoneRef.current?.value.trim() === '') {
            messageHandeler('휴대폰 번호를 확인해주세요.')
            return phoneRef.current?.focus()
        }
        if (phoneRef.current!.value.length < 8 || phoneRef.current!.value.length > 12) {
            messageHandeler('휴대폰 번호를 확인해주세요.')
            return phoneRef.current?.focus()
        }
        if (phoneRef.current!.value.trim().split('').map(x => isNaN(x as any)).indexOf(true) !== -1) {
            messageHandeler('휴대폰 번호를 확인해주세요.')
            return phoneRef.current?.focus()
        }
        if (textRef.current?.value.trim() === '') {
            messageHandeler('내용을 확인해주세요.')
            return textRef.current?.focus()
        }
        emailjs.sendForm('service_5nsvxgn', 'template_yaafa1f', form.current!, '2CaRWheYoSv_3pGdY')
            .then((result) => {
                nameRef.current!.value = ''
                phoneRef.current!.value = ''
                textRef.current!.value = ''
                return messageHandeler('문의해주셔서 감사합니다.')
            }, (error) => {
                return messageHandeler('잠시 후 다시 시도해주세요.')
            });
    };

    return <form ref={form} onSubmit={sendEmail} id='mail_form'>
        <div id="mail_form_name">
            <input type='submit' value={'전화상담 신청하기'} />
        </div>
        <div id="mail_content_box">
            <div id="mail_form_content">
                <div className="form_content">
                    <span>이름 </span>
                    <input ref={nameRef} type="text" name="from_name" placeholder="회사명/성함" />
                </div>
                <div className="form_content">
                    <span>전화번호 </span>
                    <input ref={phoneRef} type="text" name="phone" placeholder='010 또는 지역번호를 포함한 숫자' />
                </div>
                <div className="form_content">
                    <span>내용 </span>
                    <div id="textarea_box">
                        <textarea ref={textRef} name="text" placeholder='문의 내용을 간략하게 부탁드려요.' spellCheck="false" />
                    </div>
                </div>
            </div>
        </div>
    </form>
}

export default MailForm;