import React, { useState } from "react";
import BlockPage from "../components/BlockPage";
import ButtonX from "../components/ButtonX";
import { img } from "../type";
import CardCategori from "./CardCategori";
import ImgZoom from "./ImgZoom";
import SrcList from "./SrcList";
type propsData = {
    photo: img;
}

const Photo = ({ photo }: propsData) => {
    let body = document.querySelector('body')!
    //설치제품 버튼에 손을 올리면 카테고리들이 나오도록해주는 state
    const [categori, setCategori] = useState(false);
    const categoriOver = () => {
        setCategori(true)
    }
    const categoriOut = () => {
        setCategori(false)
    }

    //이미지 줌 기능
    const [zoom, setZoom] = useState(false);
    const zoomHandeler = () => {
        setZoom(!zoom)
    }
    zoom ? body.style.overflow = 'hidden' : body.style.overflow = ''

    //선택할때마다 이미지들이 변동되도록해주는 state
    const [src, setSrc] = useState(photo.src[0])
    const srcChange = (number: number) => {
        setSrc(photo.src[number])
    }

    return <>
        {zoom && <>
            <BlockPage />
            <ButtonX zoomHandeler={zoomHandeler} />
            <ImgZoom src={src} />
            <SrcList photo={photo.src} srcChange={srcChange} key={photo.src[0]} src={src} />
        </>
        }
        <div id="photo">
            <div id="photo_top">
                <img id="current_img" src={`http://localhost:3001/uploads/설치현황/${photo.src[0]}.jpg`} alt='product' onClick={zoomHandeler} />
            </div>
            <div id="photo_bottom">
                <div>{photo.title}</div>
                <div onMouseOver={categoriOver} onMouseOut={categoriOut} >
                    <button id="photo_categori_btn">
                        설치제품
                        {categori &&
                            <>
                                <img src={"http://localhost:3001/uploads/아이콘/right-arrow-black-triangle-38483.png"} alt='triangle' />
                                <CardCategori categori={photo.categori} />
                            </>
                        }
                    </button>
                </div>
            </div>
        </div>
    </>

}

export default Photo