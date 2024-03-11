import { Link, useLocation } from "react-router-dom"
import css from "./MovieList.module.css"

const MovieList = ({ items }) => {
  const location = useLocation()

  return (
    <ul className={css.container}>
      {items.map((item) => (
        <li className={css.item} key={item.id}>
          <Link
            className={css.link}
            to={`/movies/${item.id}`}
            state={location}
          >
            {item.title}
          </Link>
          <img
            className={css.img}
            src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            alt={item.title}
          />
        </li>
      ))}
    </ul>
  )
}

export default MovieList