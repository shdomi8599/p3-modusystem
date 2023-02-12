import React from "react"
import MainCategori from "./MainCategori/MainCategori"
import MainDirections from "./MainDirections/MainDirections"
import MainGreetings from "./MainGreetings/MainGreetings"
import MainOrganization from "./MainOrganization/MainOrganization"

const Main = ({ offEventHandelr }: { offEventHandelr: () => void; }) => {

    return <section id="wrap_main">
        <MainCategori offEventHandelr={offEventHandelr} />
        <MainGreetings />
        <MainOrganization />
        <MainDirections />
    </section>
}

export default Main