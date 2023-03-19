import Paris from '../pictures/Paris.png'
import London from '../pictures/London.png'
import Warsaw from '../pictures/Warsaw.png'
import Berlin from '../pictures/Berlin.png'
import Start from '../pictures/StartPicture.png'
import './Header.css'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import SmallBanner from '../pictures/smallbanner.png'
const Header = () => {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <>
            {windowSize[0] < 1100 ?
                <div className='smallBanner'>
                    <img src={SmallBanner} alt="banner" />
                    <span>Capitals of europe</span>
                </div>
                :
                <Routes>
                    <Route basename={process.env.PUBLIC_URL} path='/React-Router-Practise-Capitals-of-Europe-' element={<img src={Start} alt="banner" />} />
                    <Route basename={process.env.PUBLIC_URL} path='/paris' element={<img src={Paris} alt="banner" />} />
                    <Route basename={process.env.PUBLIC_URL} path='/warsaw' element={<img src={Warsaw} alt="banner" />} />
                    <Route basename={process.env.PUBLIC_URL} path='/berlin' element={<img src={Berlin} alt="banner" />} />
                    <Route basename={process.env.PUBLIC_URL} path='/london' element={<img src={London} alt="banner" />} />
                    <Route basename={process.env.PUBLIC_URL} path='/:id' element="ERROR PAGE NOT FOUND" />
                </Routes>}
        </>
    )
}

export default Header