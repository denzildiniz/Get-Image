

import axios from "axios";

const URL = 'https://pixabay.com/api/';
const key = 'key=24573134-dcc18d10d6aa05ff6eab630e5';


export const getImages = async () =>{
    try {
        const data = await axios.get(`${URL}?${key}&q=shoes&image_type=photo&per_page=10&safesearch=true`);
        return data;
    } catch (error) {
        console.log(error)
    }
}