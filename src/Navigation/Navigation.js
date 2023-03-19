import React from "react";
import CityItem from "./CityItem.js"
const cities = [
    { city: "Start", path: "/React-Router-Practise-Capitals-of-Europe-" },
    { city: "Poland", path: "/warsaw" },
    { city: "Germany", path: "/berlin" },
    { city: "France", path: "/paris" },
    { city: "England", path: "/london" },

]
const Navigation = () => {
    return (
        <>

            {cities.map(city => <CityItem city={city} key={city.city} />)}

        </>
    )
}
export default Navigation