import { NavLink } from "react-router-dom"
import clsx from "clsx"
import css from "./Navigation.module.css"

const getClassLink = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive)
}
const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={getClassLink} to='/'>
          Home
        </NavLink>
        <NavLink className={getClassLink} to='/movies'>
          Movies
        </NavLink>
      </nav>
    </header>
  )
}

export default Navigation