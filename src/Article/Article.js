import { Route, Routes } from "react-router-dom"
import StartPage from "../SectionPages/StartPage.js"
import SectionBerlin from "../SectionPages/SectionBerlin.js"
import SectionLondon from "../SectionPages/SectionLondon.js"
import SectionWarsaw from "../SectionPages/SectionWarsaw.js"
import SectionParis from "../SectionPages/SectionParis.js"
const Article = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/warsaw" element={<SectionWarsaw />} />
                <Route path="/berlin" element={<SectionBerlin />} />
                <Route path="/london" element={<SectionLondon />} />
                <Route path="/paris" element={<SectionParis />} />
                <Route path="/:id" element="ERROR PAGE NOT FOUND" />
            </Routes>
        </>
    )
}
export default Article