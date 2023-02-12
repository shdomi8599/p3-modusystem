import React from "react";

const CardCategori = ({ categori }: { categori: string[] }) => {
    return <ul id="card_categori">
        {categori.map(name => <li key={name}>{name}</li>)}
    </ul>
}

export default CardCategori;