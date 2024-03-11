import axios from "axios"

const accessKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjA2NGI0MzAyNTIyMDQ4MDEzNGFlNTllMDY5ZjYxNSIsInN1YiI6IjY1ZWRlNmU1Mjc5MGJmMDE0OTQzNzBhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zDJ6D7LTsF4krgi2EHQj8lFzmRda4k806plZd0YKifc';

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",

  headers: {
    Authorization:
      `Bearer ${accessKey}` ,
  },
})

export const trendingMoviesApi = async () => {
  const response = await api.get("/trending/movie/day?language=en-US")
  return response.data
}
export const MovieSearchApi = async ({ query }) => {
  const params = {
    include_adult: "false",
    language: "en-US",
    page: "1",
    query,
  }
  const response = await api.get("/search/movie?", { params })
  return response.data
}

export const MovieInfoApi = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`)
  return response.data
}

export const constInfoApi = async (movieId) => {
  const response = await api.get(`movie/${movieId}/credits`)
  return response.data
}

export const reviewsInfoApi = async (movieId) => {
  const response = await api.get(`/movie/${movieId}/reviews`)
  return response.data
}