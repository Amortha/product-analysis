import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='laptop-information'>
                <div className='left-site'>
                    <h1>ASUS VivoBook 15 D515DA Ryzen 3 6" <span className='text-color'>FHD Laptop Windows 11</span></h1>
                    <p>The ASUS VivoBook 15 D515DA comes with AMD Ryzen 3 3250U processor(2.6 GHz up to 3.5 GHz) and 4GB DDR4 RAM (OnBoard). It has a 512GB PCI-E G3 SSD. This laptop has been integrated with AMD Radeon VEGA3 Graphics and it has a 15.6" (16:9) LED-backlit FHD (1920x1080) 60Hz Display. VivoBook 15 is all about self-expression, and its bold look makes a statement.</p>
                    <button className='button'>Live demo</button>
                </div>
                <div className='right-site'>
                   <img src="Laptop.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;