import React from "react";

const ImgZoom = ({ src }: { src: string }) => {
    return <div id="img_zoom">
        <img className="zoom_photo" src={`http://localhost:3001/uploads/설치현황/${src}.jpg`} alt='zoom_photo' />
    </div>
}

export default ImgZoom;