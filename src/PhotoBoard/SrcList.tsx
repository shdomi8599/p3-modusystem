import React from "react";
type propsData = {
    photo: string[];
    srcChange: (number: number) => void;
    src: string
}

const SrcList = ({ photo, srcChange, src }: propsData) => {
    return <div id="zoom_list">
        {photo.map((x, i) => src === x ?
            <div id="select_zoom" onClick={() => { srcChange(i) }} key={x} className="zoom_num">{i + 1}</div>
            :
            <div onClick={() => { srcChange(i) }} key={x} className="zoom_num">{i + 1}</div>)}
    </div>

}

export default SrcList;