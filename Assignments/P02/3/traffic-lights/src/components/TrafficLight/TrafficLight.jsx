import { useState, useEffect } from 'react';
import Light from '../Light/Light';
import './TrafficLight.css';

const TrafficLight = () => {
    const lights = ['red', 'yellow', 'green'];
    const [activeLightIndex, setActiveLightIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveLightIndex((activeLightIndex + 1) % lights.length);
        }, Math.random() * 2000 + 1000); // Random interval between 1-3 seconds

        return () => clearTimeout(timer); // Clean up on component unmount
    }, [activeLightIndex]);

    return (
        <div className="trafficLight">
            {lights.map((color, index) => (
                <Light key={color} color={color} active={index === activeLightIndex} />
            ))}
        </div>
    );
};

export default TrafficLight;