import axios from 'axios';
import {API_KEY} from '../Configs';
import {Genres, Movies} from '../Types';

export const getMovies = async (
  type: string,
  handleSetMovies: (data: Movies[]) => void,
  paginate: number,
  handleLoading: () => void,
) => {
  try {
    handleLoading();
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=${
        paginate || 1
      }`,
    );
    if (data) {
      handleSetMovies(data?.results);
      handleLoading();
    }
  } catch (error) {
    handleLoading();
    throw new Error('Error');
  }
};

export const getGenres = async (handleSetGenres: (data: Genres[]) => void) => {
  try {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`,
    );
    if (data.genres) {
      handleSetGenres(data.genres);
    }
  } catch (error) {
    throw new Error('Error');
  }
};

export const getCurrentMovie = async (
  id: string,
  handleSetCurrentMovie: (data: Movies) => void,
) => {
  try {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );
    if (data) {
      handleSetCurrentMovie(data);
    }
  } catch (error) {
    throw new Error('Error');
  }
};

export const getCredits = async (
  id: string,
  handleSetCredits: (data) => void,
) => {
  try {
    const {data} = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    );
    if (data) {
      handleSetCredits(data);
    }
  } catch (error) {
    throw new Error('Error');
  }
};
