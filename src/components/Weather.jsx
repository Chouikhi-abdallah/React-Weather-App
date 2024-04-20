/* eslint-disable react/prop-types */

const Weather = ({ weatherData }) => {
    console.log(weatherData);

    return (
        <div>
            {weatherData.main && (
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-gray-800'>{weatherData.name}</h2>
                    <h3 className='text-2xl text-gray-600'>{weatherData.weather[0].description}</h3>
                    <h1 className='text-6xl text-gray-800 font-bold'>{Math.floor(weatherData.main.temp-273.15)}°C</h1>
                    <div className='flex justify-center items-center'>
                        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt='weather icon'/>
                        <div>
                            <h2 className='text-2xl text-gray-800 font-bold'>MAX TEMP : {Math.floor(weatherData.main.temp_max-273.15)}°C</h2>
                            <h2 className='text-2xl text-gray-800 font-bold'>HUMIDITY : {weatherData.main.humidity}%</h2>
                            <h2 className='text-2xl text-gray-800 font-bold'>MIN TEMP :{Math.floor(weatherData.main.temp_min-273.15)}°C</h2>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
