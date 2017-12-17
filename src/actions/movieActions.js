import { MOVIE_SELECTED } from '../constants/constant'

export const selectMovie = (text) => ({
  type: MOVIE_SELECTED,
  text
});
