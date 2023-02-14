import React from "react";
import Photo from "./Photo";
import { v4 as uuidv4 } from 'uuid';
import { imgGroup } from "../type";
type propsData = {
    photoList: imgGroup;
}

const PhotoCard = ({ photoList }: propsData) => {
    return <div id="photo_card">
        {photoList.map(photo =>
            <Photo photo={photo} key={uuidv4()} />)}
    </div>
}
export default PhotoCard;
