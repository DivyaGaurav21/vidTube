// import axios from "axios";

// const BASE_URL =  'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_2,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// export const fetchFromAPI = async (url) => {
//     const {data} = await axios.get(`${BASE_URL}/${url}` , options);
//     return data;
// }


//REACT_APP_API_KEY ='144cee50bfmshb43713f1c85811ep164433jsn972d85b733e7' //blocked
// REACT_APP_API_KEY = 'b0de538620msh3310ae0984e12dap1899a2jsn790499f39444' // working




import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_1,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
  } catch (error) {
    if (error.response.status === 429 && options.headers['X-RapidAPI-Key'] === process.env.REACT_APP_API_KEY_1) {
      // First API key is blocked due to maximum requests, try the second API key
      options.headers['X-RapidAPI-Key'] = process.env.REACT_APP_API_KEY_2;
      const { data } = await axios.get(`${BASE_URL}/${url}`, options);
      return data;
    }
    throw error; // re-throw other errors
  }
};

