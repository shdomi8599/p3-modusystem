import React, { useState } from "react";
import PhotoCard from "./PhotoCard";
import PhotoCategori from "./PhotoCategori";
import { v4 as uuidv4 } from 'uuid';
import { photoCategori } from "../Data/imgData";
import { imgFilter } from "../Data/imgData";
import { allImg } from "../Data/type";
const PhotoBoard = () => {
    //최초설정은 전체목록이 표시되도록
    const [photoList, setPhotoList] = useState<allImg>(imgFilter('전체목록'))

    //필터링과함께 최상단으로 올려주는 함수
    const photoListChange = (name: string) => {
        setPhotoList(imgFilter(name))
        window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
    }

    return <>
        <section id="photo_board">
            <div id="photo_categori">
                {photoCategori.map((categori, i) =>
                    <PhotoCategori categori={categori} key={categori} index={i} photoListChange={photoListChange} />)}
            </div>
            <div id="photo_list">
                {photoList.map(photoList =>
                    <PhotoCard photoList={photoList} key={uuidv4()} />)}
            </div>
        </section>
    </>
}

export default PhotoBoard;