import axios from 'axios';

const API_KEY = 'a39861ae4a0a08a3e1d42c20f3d1b8fd';
const API_URL='http://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city,country) =>{
    try{
        let response = await axios.get(`${API_URL}?q=${city},${country}&appid=${API_KEY}&units=metric`);
        return response.data;
    }catch(error){
        console.log('Error while calling the Api', error.message);
        return error.response;
    }
}