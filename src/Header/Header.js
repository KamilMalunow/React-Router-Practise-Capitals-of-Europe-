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
                    <Route path='/' element={<img src={Start} alt="banner" />} />
                    <Route path='/paris' element={<img src={Paris} alt="banner" />} />
                    <Route path='/warsaw' element={<img src={Warsaw} alt="banner" />} />
                    <Route path='/berlin' element={<img src={Berlin} alt="banner" />} />
                    <Route path='/london' element={<img src={London} alt="banner" />} />
                    <Route path='/:id' element="ERROR PAGE NOT FOUND" />
                </Routes>}
        </>
    )
}

export default Header