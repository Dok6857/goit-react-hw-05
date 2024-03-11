import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import { constInfoApi } from "../../accessApi"
import css from "./MovieCast.module.css"

const MovieCast = () => {
  const [movieCast, setMovieCast] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    if (!movieId) return

    async function getData() {
      try {
        const data = await constInfoApi(movieId)
        setMovieCast(data.cast)
      } catch (error) {
        toast.error("Please enter a search word!")
      }
    }

    getData()
  }, [movieId])
  return movieCast.length > 0 ? (
    <ul className={css.list}>
      {movieCast.map((cast) => (
        <li className={css.item} key={cast.id}>
          <p>{cast.name}</p>
          {console.log(cast)}
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt='No photo!'
          />
        </li>
      ))}
    </ul>
  ) : (
    <p>Not found!</p>
  )
}

export default MovieCast