import { useEffect, useRef, useState } from "react"
import toast from "react-hot-toast"
import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom"
import { MovieInfoApi } from "../../accessApi"
import css from "./MovieDetailsPage.module.css"
import { IoArrowBackSharp } from "react-icons/io5"
import Loader from "../../components/Loader/Loader"

const MovieDetailsPage = () => {
  const { movieId } = useParams()
  const [movieInfo, setMovieInfo] = useState(null)
  const location = useLocation()
  const backLinkHref = useRef(location.state ?? "/movies")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!movieId) return

    async function getData() {
      try {
        setLoading(true)
        const data = await MovieInfoApi(movieId)
        setMovieInfo(data)
      } catch {
        toast.error("Opps! something wrong try again!")
      } finally {
        setLoading(false)
      }
    }

    getData()
  }, [movieId])

  return (
    <>
      <Link to={backLinkHref.current}>
        <IoArrowBackSharp className={css.svg} />
      </Link>

      {loading && <Loader />}
      {movieInfo && (
        <div>
          <h2 className={css.title}>{movieInfo.title}</h2>

          <div className={css.itemBox}>
            <img
              className={css.image}
              src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
              alt={movieInfo.original_title}
            />
            <div>
              <p className={css.text}>Overview: {movieInfo.overview}</p>
              <p className={css.text}>
                Country: &nbsp;
                <span>
                  {movieInfo.production_countries
                    .map((country) => country.name)
                    .join(", ")}
                </span>
              </p>
              <p className={css.text}>Rating : {movieInfo.vote_average}</p>
              <p className={css.text}>Votes: {movieInfo.vote_count}</p>
              <p className={css.text}>Status: {movieInfo.status}</p>
            </div>
          </div>
        </div>
      )}

      <ul>
        <li>
          <NavLink className={css.link} to='cast'>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink className={css.link} to='reviews'>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  )
}

export default MovieDetailsPage