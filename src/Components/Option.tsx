import React from "react";

const Select = ({name}:{name:string}) => {
    return <>
        <option value={name}>{name}</option>
        </>
}

export default Select;