import axios from 'axios';

export const httpClient = axios.create({ timeout: 30000 });

export const getHelloWorld = async () => {
  const response = await httpClient.get('https://mockapi.com/api/HelloWorld');
  return response.data;
};
