export const API_KEY = "d1db689d5dedc08cfe7bb3b5a31ffb61";

const requests = {
  getTrending: `/trending/all/week?api_key=${API_KEY}`,
  getDescendingPopularity: `/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false`,
  getFantasy: `/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&with_genres=14`,
  getFamily: `/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&with_genres=10751`,
  getDocumentary: `/discover/movie?api_key=${API_KEY}&language=en-US&include_adult=false&with_genres=99`,
};

export default requests;
