import React, { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";
import PhotoCategori from "./PhotoCategori";
import { v4 as uuidv4 } from 'uuid';
import { allImg } from "../type";
import { getInstall } from "../api/getInstall";
import Loading from "../components/Loading";

const PhotoBoard = () => {
    const photoCategori = ["전체목록", "차량차단기", "인터폰", "RF카드방식", "주차권발행방식", "차량번호인식방식", "요금계산기", "주차부스", "신호관제"]
    //최초설정은 전체목록이 표시되도록
    const [photoList, setPhotoList] = useState<allImg | []>([])
    const [list, setList] = useState<string>('전체목록')
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getInstall(list).then(res => {
            window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
            setPhotoList(res)
            setIsLoading(false);
        })
    }, [list])

    return <>
        <section id="photo_board">
            <div id="photo_categori">
                {photoCategori.map((categori, i) =>
                    <PhotoCategori categori={categori} key={categori} index={i} photoListChange={setList} />)}
            </div>
            <div id="photo_list">
                {isLoading ? <Loading /> : photoList.map(photoList =>
                    <PhotoCard photoList={photoList} key={uuidv4()} />)}
            </div>
        </section>
    </>
}

export default PhotoBoard;