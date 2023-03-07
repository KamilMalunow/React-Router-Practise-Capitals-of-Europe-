import { NavLink } from "react-router-dom"
import './CityItem.css'

const CityItem = props => {
    return (
        <ul>
            <li>
                <NavLink to={props.city.path}>{props.city.city}</NavLink>
            </li>
        </ul>
    )
}

export default CityItem