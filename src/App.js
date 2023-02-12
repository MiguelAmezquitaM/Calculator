import { useState } from "react";
import ScientificCalculator from "./apps/ScientificCalculator";
import CurrentApp from "./CurrentApp";
import SidePanel from "./SidePanel";

export default function App() {
    const [currentApp, setCurrentApp] = useState(<ScientificCalculator />)

    return (
        <>
            <SidePanel setApp={setCurrentApp} />
            <CurrentApp currentApp={currentApp} />
        </>
    )
}