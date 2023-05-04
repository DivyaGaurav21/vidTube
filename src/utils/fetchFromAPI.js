import axios from "axios";

const BASE_URL =  'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}` , options);
    return data;
}


//REACT_APP_API_KEY ='144cee50bfmshb43713f1c85811ep164433jsn972d85b733e7' //blocked
// REACT_APP_API_KEY = 'b0de538620msh3310ae0984e12dap1899a2jsn790499f39444' // working
// REACT_APP_API_KEY = '00a9c4744fmsh493b1a9db4657c8p11e60bjsnf469d561fa54';//aksha



// import axios from "axios";

// const BASE_URL =  'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50
//   },
//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// export const fetchFromAPI = async (url) => {
//   try {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
//   } catch (error) {
//     if (error.response && error.response.status === 429) {
//       const resetTime = new Date(
//         parseInt(error.response.headers["Retry-After"]) * 1000
//       );
//       console.log(
//         `Rate limit exceeded. Waiting until ${resetTime.toLocaleString()}...`
//       );
//       await new Promise((resolve) =>
//         setTimeout(resolve, resetTime.getTime() - Date.now())
//       );
//       return await fetchFromAPI(url);
//     } else {
//       throw error;
//     }
//   }
// };

