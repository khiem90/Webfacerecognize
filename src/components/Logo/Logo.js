import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';
const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt
            className="Tilt br2 shadow-2 center"
            options={{ reverse: true , max: 45 }}
            style={{ height: 200, width: 200 }}>
                <div className="Tilt-inner pa3">
                    <img
                    style={{paddingTop: '25px'}}
                    src={brain} alt='logo'>
                    </img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;