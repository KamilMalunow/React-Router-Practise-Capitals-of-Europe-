import './SectionStyle.css';
import React from 'react';
import MonumentItem from './MonumentItem.js';

import EiffelTower from './SectionPicturesParis/Eiffel Tower.jpg';
import LatinQuarter from './SectionPicturesParis/Latin Quarter.jpg';
import Montmartre from './SectionPicturesParis/Montmartre.png';
import MuséeDOrsay from './SectionPicturesParis/Musée d Orsay.jpg';
import TriumphalArch from './SectionPicturesParis/Triumphal arch.jpg';


class SectionParis extends React.Component {

    state = {
        monuments: [
            {
                name: "Eiffel Tower",
                description: "the most famous architectural object of Paris, considered a symbol of this city and sometimes of the whole of France. It is the tallest building in Paris and was the tallest building in the world when it was built.The 'Iron Lady' stands in the western part of the city, on the Seine, at the north-western end of the Champ de Mars. ",
                active: false,
                id: 1,
                picture: EiffelTower
            },
            {
                name: "Triumphal arch",
                description: "The Arc de Triomphe is one of the most recognizable symbols of Paris. The initiator of its construction was Napoleon himself, who wanted to celebrate French military victories in this way. The form of the monument was to refer to the arches created by the Romans, under which the victorious commanders paraded. The chosen place was located on the border of the then city, and the arch itself was to be the end of the axis of the Champs Elysées.",
                active: false,
                id: 2,
                picture: TriumphalArch
            },
            {
                name: "Latin Quarter",
                description: "The Latin Quarter is one of the most beautiful areas of Paris. There await us: lively (also late in the evening) atmospheric streets, the Sorbonne University, the beautiful fountain of St. Michał or the Pantheon, in the basement of which Marie Curie-Skłodowska was buried, as the first woman in history. In the shadow of the Pantheon stands the church of Saint-Étienne-du-Mont, on the stairs of which the protagonist of the film Midnight in Paris was waiting to be transported in time.",
                active: false,
                id: 3,
                picture: LatinQuarter
            },
            {
                name: "Montmartre",
                description: "Montmartre is considered by many to be the most Parisian of all the districts of the French capital, although not everyone is aware that this area was incorporated into Paris only in 1860! Montmartre is distinguished by its terrain alone. Unlike the rest of the city, the district stretches over a hill - on top of which the famous Sacre Coeur Basilica was built. We can go up on foot via high stairs, or use a special cable car.",
                active: false,
                id: 4,
                picture: Montmartre

            },
            {
                name: "Musée d Orsay",
                description: "museum in Paris, located on the left bank of the Seine. The collections mainly contain French art from 1848–1918: painting, sculpture, photography and furniture. These works are younger than those presented in the Louvre and older than the collections of the Center Georges Pompidou. Annually, the museum is visited by about 4 million visitors. The nearest metro station is Solférino.",
                active: false,
                id: 5,
                picture: MuséeDOrsay

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
                <h1>Paris the capital of France</h1>
                <p>
                    Paris is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of ​​more than 105 km²  making it the fourth-most populated city in the European Union as well as the 30th most densely populated city in the world in 2022. Since the 17th century, Paris has been one of the world's major centers of finance, diplomacy, commerce, fashion, gastronomy, and science. For its leading role in the arts and sciences, as well as its very early system of street lighting, in the 19th century it became known as "the City of Light". Like London, prior to the Second World War, it was also sometimes called the capital of the world.
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
export default SectionParis