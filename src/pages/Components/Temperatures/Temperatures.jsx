import { useEffect, useState } from 'react';
import Variable from '../Variable/Variable';
import './Temperatures.css';
function Temperatures() {

    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0)
    const [kelvin, setKelvin] = useState(0)

    // useEffect(() => {
    //     handleCelsiusChange(0);
    // }, []);

    const handleCelsiusChange = (celsius) => {
        const c = parseFloat(celsius);
        setCelsius(c);
        setFahrenheit((c * 9 / 5) + 32);
        setKelvin(c + 273.15);
    }

    const handleFahrenheitChange = (fahrenheit) => {
        const f = parseFloat(fahrenheit);
        setFahrenheit(f);
        setCelsius((f - 32) * 5 / 9);
        setKelvin(((f - 32) * 5 / 9) + 273.15);
    }

    const handleKelvinChange = (kelvin) => {
        const k = parseFloat(kelvin);
        setKelvin(k);
        setCelsius(k - 273.15);
        setFahrenheit(((k - 273.15) * 9 / 5) + 32);
    }

    return ( 
    <div className='temperatures-container'>
        <h3 className='temperatures-title'>Temperatures</h3>
        <h3 className='temperatures-display'>
            <span className='badge bg-primary'>{celsius}C</span> 
            <span className='badge bg-primary'>{fahrenheit}F</span>
            <span className='badge bg-primary'>{kelvin}K</span>
        </h3>
        <div className='temperatures-variables'>
            <Variable name={'Celsius'} value={celsius} setValue={handleCelsiusChange}/>
            <Variable name={'Fahrenheit'} value={fahrenheit} setValue={handleFahrenheitChange} />
            <Variable name={'Kelvin'} value={kelvin} setValue={handleKelvinChange} />
        </div>
    </div> 
    );
}

export default Temperatures;