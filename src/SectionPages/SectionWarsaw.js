import './SectionWarsaw.css';
import React from 'react';
import MonumentItem from './MonumentItem.js';

import RoyalBathroom from './SectionPictures/palacNaWodzie.jpg';
import OldCity from './SectionPictures/Old City.jpg';
import PalaceWilanow from './SectionPictures/Palace in Wilanów.jpg';
import PalaceOfCulture from './SectionPictures/Palace of Culture and Science.jpg';
import RoyalCastle from './SectionPictures/Royal Castle.jpg'
class SectionWarsaw extends React.Component {

    state = {
        monuments: [
            {
                name: "Royal Bathroom",
                description: "This is one of the most beautiful garden complexes not only in Poland, but also in Europe. Varsovians owe this magical place to Stanisław August, who in the 17th century purchased a suburban zoo from Stanisław Lubomirski, and then transformed it into a summer residence.",
                active: false,
                id: 1,
                picture: RoyalBathroom
            },
            {
                name: "Old Town",
                description: "The Old Town of Warsaw, almost completely destroyed in 1944, was built 'from the rubble' in just 5 years. Everything that can be seen in the Old Town today - colorful tenement houses, soaring church towers or the impressive Royal Castle - is the result of the reconstruction and reconstruction of the capital after World War II.",
                active: false,
                id: 2,
                picture: OldCity
            },
            {
                name: "Palace of Culture and Science",
                description: "It is in fact a showcase of the capital and the tallest building in Poland (it is 237 m high). No wonder that this greatest attraction of Warsaw is visited by hundreds of tourists every year. The Palace of Culture and Science is a work of socialist realism.",
                active: false,
                id: 3,
                picture: PalaceOfCulture,
            },
            {
                name: "Royal Castle",
                description: "This famous tourist attraction in Warsaw is on the UNSECO list of monuments. The Royal Castle was erected as an early Baroque residence of King Sigismund III Vasa in the years 1598-1619. Today, it performs museum and representative functions - it appears on many postcards from the capital.",
                active: false,
                id: 4,
                picture: RoyalCastle,
            },
            {
                name: "Palace in Wilanów",
                description: "The Museum of King Jan III's Palace in Wilanów, as the full name of this place sounds, is the former summer residence of King Jan III Sobieski. This unique in the country baroque palace and garden complex is one of the greatest tourist attractions in Warsaw.",
                active: false,
                id: 5,
                picture: PalaceWilanow,
            },
        ]
    }

    handleActiveOn = (id) => {
        const monuments = [...this.state.monuments]

        monuments.forEach(monument => {
            if (monument.id === id) {
                monument.active = true;
            }
        })

        this.setState({
            monuments
        })
    }

    handleActiveOff = (id) => {
        const monuments = [...this.state.monuments]

        monuments.forEach(monument => {
            if (monument.id === id) {
                monument.active = false;
            }
        })
        this.setState({
            monuments
        })
    }

    render() {
        return (
            <>
                <h1>Warsaw the capital of Poland</h1>
                <p>Warsaw Polish: Warszawa, officially the Capital City of Warsaw, is the capital and largest city of Poland. The metropolis stands on the River Vistula in east-central Poland, and its population is officially estimated at 1.86 million residents within a greater metropolitan area of 3.1 million residents, which makes Warsaw the 6th most-populous city in the European Union. The city area measures 517 km2 200 sq mi and comprises 18 districts, while the metropolitan area covers 6,100 km2 2,355 sq mi. Warsaw is an Alpha global city, a major cultural, political and economic hub, and the country's seat of government.</p>

                <h2>Places worth to visit</h2>

                <ul className='SectionWarsaw--ul'>
                    {this.state.monuments.map(monument =>
                        <MonumentItem key={monument.id} monument={monument} handleActiveOn={this.handleActiveOn} handleActiveOff={this.handleActiveOff} />)}
                </ul>

            </>
        )
    }
}
export default SectionWarsaw