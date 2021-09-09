/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.log('AN ERROR OCCURED ->', error);
    return error;
  }
};

export default fetchData;
