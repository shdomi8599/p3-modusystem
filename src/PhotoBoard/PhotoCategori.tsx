import React from "react";
import { countCategori } from "../Data/imgData";
type propsData = {
    categori: string;
    index: number;
    photoListChange: (name: string) => void
}

const PhotoCategori = ({ categori, index, photoListChange }: propsData) => {
    return <div onClick={()=>{photoListChange(categori)}}>
        <div>
            {categori}
        </div>
        <div>
            ({countCategori[index]})
        </div>
    </div>
}

export default PhotoCategori;