import React, { useEffect, useState } from "react";
import { getPhoto } from "../api/getPhoto";
type propsData = {
    categori: string;
    index: number;
    photoListChange: (name: string) => void
}

const PhotoCategori = ({ categori, photoListChange }: propsData) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        getPhoto(categori).then(res => {
            setCount(res)
        })
    }, [categori])
    return <div onClick={() => { photoListChange(categori) }}>
        <div>
            {categori}
        </div>
        <div>
            ({count})
        </div>
    </div>
}

export default PhotoCategori;