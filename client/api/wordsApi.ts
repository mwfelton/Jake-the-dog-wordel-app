import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/words/',
});

export const fetchRandomWord = async () => {
  try {
    const response = await api.get('random/');
    return response.data;
  } catch (error) {
    console.error("Error fetching random word", error);
    throw error;
  }
};
