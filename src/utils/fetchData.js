import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function fetchData(url) {
  try {
    const response = await axios.get(url);
    const data = response.data;
    if (data) return data;
    throw response;
  } catch (error) {
    console.log('AN ERROR OCCURED ->', error);
    return error;
  }
}

export default fetchData;