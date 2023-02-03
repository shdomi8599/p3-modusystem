import React from "react";

const Categori = ({key,id}:{key:number, id:number}) =>{
console.log(key)
    const backImg = {backgroundImage : `url('../images/product_list_${id+1}.gif')`,   backgroundRepeat: "no-repeat"}

    return <li style={backImg}></li>
}

export default Categori;