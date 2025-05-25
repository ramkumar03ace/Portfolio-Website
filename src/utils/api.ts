import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );
  return data;
};

export const getReadme = async () => {    //completed
  const { data } = await axios.get(config.readmeUrl);
  return data;
};

export const getWeather = async (city: string) => {   //completed
  try {
    const { data } = await axios.get(`https://wttr.in/${city}?ATm`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getQuote = async () => {
  try {
    const { data } = await axios.get('https://zenquotes.io/api/random');
    return {
      quote: `“${data[0].q}” — ${data[0].a}`,
    };
  } catch (error) {
    return {
      quote: "Couldn't fetch a quote right now. Try again later.",
    };
  }
};
