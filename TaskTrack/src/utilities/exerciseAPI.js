// utils/exerciseApi.js
import axios from "axios";

const RAPIDAPI_KEY = import.meta.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = "exercisedb.p.rapidapi.com";

export const searchExercises = async (query) => {
  try {
    const response = await axios.get(
      `https://${RAPIDAPI_HOST}/exercises/name/${query}`,
      {
        headers: {
          "X-RapidAPI-Key": RAPIDAPI_KEY,
          "X-RapidAPI-Host": RAPIDAPI_HOST,
        },
      }
    );
    return response.data; // Array of exercises
  } catch (error) {
    console.error("Error fetching exercises:", error);
    return [];
  }
};
