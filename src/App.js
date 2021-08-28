import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App(props) {

    const axios = require('axios');

    const D = new Date();
    const n = D.getDay();
    const m = D.getMonth();
    const y = D.getFullYear();
    const d = D.getDate();








    const days = { 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 7: "Sunday" };

    const months = {
        1: "January", 2: "February", 3: "March", 4: "April", 5: "May", 6: "June",
        7: "July", 8: "August", 9: "September", 10: "October", 11: "November", 12: "December"
    };





    const [name, setName] = useState('');
    const [temp, setTemp] = useState('');
    const [maxtemp, setMaxTemp] = useState('');
    const [mintemp, setMinTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [pressure, setPressure] = useState('');
    const [country, setCountry] = useState('');

    const [date, setDate] = useState('');


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

            setDate()



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





                <div className="location">

                    <i className="fas fa-map-pin"></i>

                    <div className="title">
                        {name},    {country}
                    </div>

                    <br />

                </div>

                <div className="Date">

                    {days[n]}, {months[m]} {y}


                </div>


                <div className="blue-div">





                </div>

                {/* <h2>{temp}</h2>
                <h2>{maxtemp}</h2>
                <h2>{mintemp}</h2>
                <h2>{humidity}</h2>
                <h2>{pressure}</h2>
                <h2>{wind}</h2>
                <h2>{country}</h2> */}





            </div>}
        </div>
    )
}

export default App
