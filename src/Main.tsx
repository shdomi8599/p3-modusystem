import React from "react"
import MainCategori from "./MainCategori"
import MainDirections from "./MainDirections"
import MainGreetings from "./MainGreetings"
import MainOrganization from "./MainOrganization"

const Main = ({ offEventHandelr }: { offEventHandelr: () => void; }) => {

    return <section id="wrap_main">
        <MainCategori offEventHandelr={offEventHandelr} />
        <MainGreetings />
        <MainOrganization />
        <MainDirections />
    </section>
}

export default Main