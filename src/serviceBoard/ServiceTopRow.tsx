import React, { useState } from "react";
import { announcement } from "../type";

const ServiceTopRow = ({announcement}:{announcement:announcement}) => {
    const [view,setView]=useState(announcement.view)
    const viewCount=()=>{
        setView(view+1)
    }
    return <>
    <div id="service_row">
        <div id="row_tag">
            {announcement?'공지':'글'}
        </div>
        <div id="row_title" onClick={viewCount}>
            {announcement.title}
        </div>
        <div id="row_author">
            {announcement.author}
        </div>
        <div id="row_date">
            {announcement.createAt.slice(0,10)}
        </div>
        <div id="row_view">
            {view}
        </div>
    </div>
    <div id="row_line"></div>
    </>

}

export default ServiceTopRow;