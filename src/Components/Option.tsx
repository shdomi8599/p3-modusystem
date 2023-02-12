import React, { useRef } from "react";

const Select = ({ name, }: { name: string; }) => {
    const target = useRef<HTMLOptionElement>(null)

    return <option ref={target} value={name}>{name}</option>

}
export default Select;