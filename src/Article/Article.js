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
                <Route basename={process.env.PUBLIC_URL} path="/" element={<StartPage />} />
                <Route basename={process.env.PUBLIC_URL} path="/warsaw" element={<SectionWarsaw />} />
                <Route basename={process.env.PUBLIC_URL} path="/berlin" element={<SectionBerlin />} />
                <Route basename={process.env.PUBLIC_URL} path="/london" element={<SectionLondon />} />
                <Route basename={process.env.PUBLIC_URL} path="/paris" element={<SectionParis />} />
                <Route basename={process.env.PUBLIC_URL} path="/:id" element="ERROR PAGE NOT FOUND" />
            </Routes>
        </>
    )
}
export default Article