import React from "react";

const ButtonX = ({zoomHandeler}:{zoomHandeler:()=>void}) => {
    return <div id="x_btn">
        <img id="exit_x" src="http://localhost:3001/uploads/아이콘/free-icon-x-657059.png"  alt='exit' onClick={zoomHandeler}/>
    </div>
}

export default ButtonX;