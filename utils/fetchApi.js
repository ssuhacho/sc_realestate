import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '4638f8ee13msh5ea00fc54fe53d6p1fb6d4jsnbec91c20febe'
          }
    });
    return data;
}

