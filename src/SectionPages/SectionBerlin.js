import './SectionStyle.css';
import React from 'react';
import MonumentItem from './MonumentItem.js';

import berlinerHouse from './SectionPicturesBerlin/Berliner House.jpg';
import BerlinGate from './SectionPicturesBerlin/Berlin Gate.jpg';
import CharlottenburgCastle from './SectionPicturesBerlin/Charlottenburg Castle.jpg';
import Holocaust from './SectionPicturesBerlin/Holocaust.jpg';
import Reichstag from './SectionPicturesBerlin/Reichstag.jpg';

class SectionBerlin extends React.Component {

    state = {
        monuments: [
            {
                name: "Brandenburg gate",
                description: "It is one of the most characteristic buildings in Berlin and a symbol of German reunification. The Brandenburg Gate - supported by six columns and 26 meters high - was designed at the end of the 18th century by Carl Gotthard Langhans.",
                active: false,
                id: 1,
                picture: BerlinGate
            },
            {
                name: "Reichstag: the majestic parliament in Berlin ",
                description: "The seat of the German parliament is actually the national pride of the country. The combination of neo-renaissance foundations with a characteristic glass dome has made this building a showcase of Berlin and one of the most visited places in the capital.",
                active: false,
                id: 2,
                picture: Reichstag
            },
            {
                name: "Holocaust Mahnmal: memorial to the Jews",
                description: "There are 2,711 stone tombstones set on an area of ​​19,000 square meters. m2 and creating a bizarre labyrinth. This place is a memorial to the extermination of Jews during World War II. The Monument to the Murdered Jews of Europe, designed by Peter Eisenman, was built in the years 2003-2005 in the center of Berlin. In the first year, the monument was visited by 3.5 million people.",
                active: false,
                id: 3,
                picture: Holocaust
            },
            {
                name: "Berliner Dom, or Berlin Cathedral",
                description: "Among the biggest attractions of Berlin, the Berliner Dom is also worth mentioning. This is the largest temple in the German capital and a real architectural gem. The Evangelical cathedral erected at the turn of the 19th and 20th centuries was supposed to symbolize the power of the then ruling Hohenzollern dynasty. The most characteristic element of this building is the 85-meter-high dome, which, combined with clear architectural inspirations of the Italian Renaissance, brings to mind the Roman Basilica of St. Peter..",
                active: false,
                id: 4,
                picture: berlinerHouse

            },
            {
                name: "Charlottenburg Castle: 'Berlin's Versailles",
                description: "This is undoubtedly one of the largest and most beautiful residences of the Hohenzollern dynasty and the main attraction of Berlin. This extraordinary palace complex - sometimes called 'Berlin's Versailles' - impresses with its lavish, baroque rooms, English and French style gardens and the already famous Porcelain Chamber",
                active: false,
                id: 5,
                picture: CharlottenburgCastle

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
export default SectionBerlin