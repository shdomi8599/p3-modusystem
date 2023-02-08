import React from "react";
import MailForm from "./MailForm";

const RequestForm = ({ messageHandeler }: { messageHandeler: (text: string) => void }) => {
    return <div id="request_form">
        <MailForm messageHandeler={messageHandeler} />
    </div>
}

export default RequestForm;