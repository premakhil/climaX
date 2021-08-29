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












    const days = { 1: "Monday", 2: "Tuesday", 3: "Wednesday", 4: "Thursday", 5: "Friday", 6: "Saturday", 0: "Sunday" };

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

    const [icon, setIcon] = useState('');

    const [description, setDescription] = useState('');

    const [condition, setCondition] = useState('');


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

            setIcon(response.data.weather[0].icon);
            setDescription(response.data.weather[0].description);

            setCondition(response.data.weather[0].main);







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

                    {days[n]},  {months[m]} {y}


                </div>


                <div className="blue-div">




                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="icon" />




                    <div className="temp">

                        {Math.round(temp)}°

                    </div>

                    <div className="max-and-min-temp">

                        <i className="fas fa-arrow-up"> <span className="max-temp">{Math.ceil(maxtemp)}°</span></i>
                        <i className="fas fa-arrow-down"> <span className="min-temp">{Math.floor(mintemp)}°</span></i>

                    </div>

                    <div className="condition">

                        {condition}


                    </div>



                </div>

                <div className="extra-details">

                    <div className="humidity">

                        <i class="fas fa-tint"></i>
                        <span>Humidity</span>-<span>{humidity}%</span>

                    </div>


                    <div className="wind">

                        <i class="fas fa-wind"></i>

                        <span>Wind</span>-<span>{wind} m/s</span>


                    </div>


                    <div className="pressure">

                        <i class="fas fa-temperature-high"></i>

                        <span>Pressure</span>-<span>{pressure} hPa</span>

                    </div>






                </div>








            </div>}
        </div>
    )
}

export default App
