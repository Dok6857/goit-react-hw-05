import { useEffect, useState } from "react"
import { reviewsInfoApi } from "../../accessApi"
import toast from "react-hot-toast"
import { useParams } from "react-router-dom"
import css from "./MovieReviews.module.css"

const MovieReviews = () => {
  const [MovieReviews, setMovieReviews] = useState([])
  const { movieId } = useParams()

  useEffect(() => {
    if (!movieId) return

    async function getData() {
      try {
        const data = await reviewsInfoApi(movieId)
        setMovieReviews(data.results)
        console.log(data.results)
      } catch (error) {
        toast.error("Please enter a search word!")
      }
    }

    getData()
  }, [movieId])

  return MovieReviews.length > 0 ? (
    <div>
      {MovieReviews.map((reviews) => (
        <div key={reviews.id}>
          <p className={css.text}>
            Author: {reviews.author_details.username}
          </p>
          <p className={css.text}>{reviews.content}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className={css.text}>Not found!</p>
  )
}

export default MovieReviews