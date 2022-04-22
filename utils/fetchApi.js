import axios from 'axios';

export const baseUrl = 'https://ayut.p.rapidapi.com'

  export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
      headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': 'd1a17673ccmshca48fc0216a87f7p196597jsn7809459b45a2'
      }
    })
    return data;
  }

