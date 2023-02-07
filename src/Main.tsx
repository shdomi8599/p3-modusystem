import React, { useRef } from "react"
import Categori from "./Categori"
import MainCategori from "./MainCategori"
import MainDirections from "./MainDirections"
import MainGreetings from "./MainGreetings"
import MainOrganization from "./MainOrganization"

const Main = () => {

    return <section id="wrap_main">
        <MainCategori />
        <MainGreetings />
        <MainOrganization />
        <MainDirections />
    </section>
}

export default Main