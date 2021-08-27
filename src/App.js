import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App(props) {

    const axios = require('axios');



    const [name, setName] = useState('');
    const [temp, setTemp] = useState('');
    const [maxtemp, setMaxTemp] = useState('');
    const [mintemp, setMinTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [pressure, setPressure] = useState('');
    const [country, setCountry] = useState('');


    const [invalid, setInvalid] = useState(false);




    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + props.search + '&units=metric&APPID=202ea05f1ea260ad09ef2d90fe39df3a';

    const getData = () => {
        axios.get(url).then((response) => {


            setName(response.data.name);
            setTemp(response.data.main.temp);
            setMaxTemp(response.data.main.temp_max);
            setMinTemp(response.data.main.temp_min);
            setWind(response.data.wind.speed);
            setPressure(response.data.main.pressure);
            setHumidity(response.data.main.humidity);
            setCountry(response.data.sys.country);

            setInvalid(false);





        })


            .catch((error) => {
                console.error(error);
                setInvalid(true);


            })
    }


    useEffect(() => {
        getData();
        // return () => {
        //     cleanup
        // }
    }, [props.search])


    return (
        <div>
            {invalid ? <h1>Invalid entry</h1> : <div className="main-class">




                <h1>{name}</h1> <br />

                <h2>{temp}</h2>
                <h2>{maxtemp}</h2>
                <h2>{mintemp}</h2>
                <h2>{humidity}</h2>
                <h2>{pressure}</h2>
                <h2>{wind}</h2>
                <h2>{country}</h2>





            </div>}
        </div>
    )
}

export default App
