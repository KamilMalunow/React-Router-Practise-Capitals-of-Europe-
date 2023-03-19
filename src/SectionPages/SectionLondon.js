import './SectionStyle.css';
import React from 'react';
import MonumentItem from './MonumentItem.js';

import nottingHill from './SectionPicturesLondon/Notting Hill.jpg';
import skyGarden from './SectionPicturesLondon/Sky Garden.jpg';
import theLondonEye from './SectionPicturesLondon/The London Eye.jpg';
import towerBridge from './SectionPicturesLondon/Tower Bridge.jpg';
import towerofLondon from './SectionPicturesLondon/Tower of London.jpg';


class SectionLondon extends React.Component {

    state = {
        monuments: [
            {
                name: "Tower Bridge",
                description: "This is undoubtedly one of the most recognizable landmarks in London - it appears on most postcards. It is also one of London's most visited monuments. Tower Bridge, built in Victorian style in the 19th century, connects the two banks of the River Thames on the east bank of London. ",
                active: false,
                id: 1,
                picture: towerBridge
            },
            {
                name: "The London Eye",
                description: "The Ferris wheel or Millennium Wheel, as the London Eye is called, is one of the city's symbols. The famous attraction was opened in 1999 - since then it has enjoyed unflagging popularity. The ride on the 135-meter-high wheel takes about half an hour. The low linear speed of these cabins allows you to pick up and drop off passengers without stopping the wheel. While riding the 'Ferris wheel' you can admire London from a completely different perspective. It is obligatory to take commemorative photos in advance!",
                active: false,
                id: 2,
                picture: theLondonEye
            },
            {
                name: "Tower of London",
                description: "This characteristic defensive and palace building is located on the north bank of the Thames and is a popular tourist destination. The Tower of London, as this place is said, was erected in 1078 for William the Conqueror. Throughout its turbulent history, it has been a fortress, a prison and a palace. Currently, this building is inhabited by the castle guards with their families and serves as a museum.",
                active: false,
                id: 3,
                picture: towerofLondon
            },
            {
                name: "Sky Garden",
                description: "An interesting attraction in London is the Sky Garden. This fantastic and free viewpoint is located on the 36th floor of a modern skyscraper (on Fenchurch Street) sometimes called 'Walkie-Talkie'. The object owes this term to its shape, which resembles... a radiotelephone handset.",
                active: false,
                id: 4,
                picture: skyGarden

            },
            {
                name: "Notting Hill",
                description: "An extremely colorful and 'affluent' district of London. It is here that high-end restaurants and branded chain stores are located. One of the most popular streets of Notting Hill is Portobello Road with charming shops. Here, too, there is a street market every weekend with stalls full of antiques - you can buy almost anything here.",
                active: false,
                id: 5,
                picture: nottingHill

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
                <h1>London the capital of England</h1>
                <p>
                    London, the capital of Great Britain with over 8.5 million inhabitants, is a city where it is impossible to get bored. The wealth of monuments and attractions is so great that it is difficult to point out the most interesting ones. A good idea to explore London may be a ride in a characteristic red double-decker, i.e. a double-decker city bus, which is one of the symbols of the city. What is worth seeing while in London? Here are 12 must-see attractions on the tourist map of this city.
                    More:
                </p>

                <h2>Places worth to visit</h2>

                <ul className='SectionWarsaw--ul'>
                    {this.state.monuments.map(monument =>
                        <MonumentItem key={monument.id} monument={monument} handleActiveOn={this.handleActiveOn} handleActiveOff={this.handleActiveOff} />)}
                </ul>

            </>
        )
    }
}
export default SectionLondon