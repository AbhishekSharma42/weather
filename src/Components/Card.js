import React, { useEffect, useState } from 'react'

const Card = () => {
    const [getData, setWeatherData] = useState({});
    const [getIco, setIcoUrl] = useState();
    const [getTemp, setTemp] = useState();
    const [getFeel, steFeel] = useState();
    const [getWM, setWM] = useState();
    const [getwind, setWind] = useState();
    const [getHumn, setHumn] = useState();

    const getWeather = async () => {
        try {
            // Todo get The data from API

            const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Bareilly&units=metric&lat=44.34&lon=10.99&appid=f61cf5ce1974363a858dd208d2189c81");
            const res = await response.json();
            setWeatherData(res);
          // console.log(res);
           
            setWeatherData(res);

            // *********************** TODO *********************
           
            setWM(res?.weather[0]?.description);
            setTemp(res?.main.temp);
            steFeel(res?.main?.feels_like);
            setWind(res?.wind?.speed);
            setHumn(res?.main?.humidity);

            // **************************************************

            // get icon 

            try {
                var iconName = getData?.weather[0]?.icon
                var iconUrl = "https://openweathermap.org/img/w/" + iconName + ".png";
              
                // set icon in useState hooks 
                setIcoUrl(iconUrl);
            } catch (e) {
                return;
            }

        } catch (e) {
            console.log("Some Error ocurde");
        }
    }

    useEffect(() => {
        getWeather();
        document?.title =getData?.name+" in "+getWM;
    }, []);

    // date Object 
    const date = new Date();

    return (
        <>
            <div className='w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-orange-100 bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center'>

                {/* card */}
                <div>
                    <div className="bg-black/20 w-full min-w-[400px] min-h-[450px] text-white rounded-3xl py-6 px-6 opacity-75 drop-shadow-2xl ">

                        {/* card top */}
                        < div className='flex items-center gap-x-9 ' >
                            {/* icon */}
                            <div>
                                <img className='min-w-[100px]' src={getIco} />
                            </div>
                            <div>
                                {/*  City name */}
                                <div className='text-2xl font-semibold '>
                                    {getData?.name}, UP
                                </div>
                                {/* date */}
                                <div>
                                    {date?.getUTCDate()}/{date?.getUTCMonth() + 1}/{date?.getFullYear()}<br />
                                </div>
                            </div>
                        </div>

                        {/* card body */}
                        <div>
                            <div className='text-[5rem] gap-x-9 text-center'>
                                <span>{parseInt(getTemp)}</span><sup>o</sup>C
                            </div>
                            <div className='capitalize text-center font-semibold'>
                                {getWM}
                            </div>
                        </div>

                        {/* card bottom*/}
                        <div>
                            <div className='items-center my-10 '>
                                <div className='flex justify-around font-semibold'>
                                    <div>
                                        <div className='text-[1rem] fas fa-eye'></div> Visibility {getData?.visibility / 1000} km
                                    </div>
                                    <div>
                                        <div className='text-[1rem] fas fa-temperature-high'></div> Feels_like  {parseInt(getFeel)} <sup>0C</sup>
                                    </div>
                                </div>
                                <div className='flex justify-around font-semibold'>
                                    <div>
                                        <div className='text-[1rem] fas fa-water'></div> Humidity {getHumn}%
                                    </div>
                                    <div>
                                        <div className='text-[1rem] fas fa-wind'></div> Wind {getwind} km/s
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div >
            </div >
        </>
    )
}

export default Card
