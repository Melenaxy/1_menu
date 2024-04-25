import { NavLink } from "react-router-dom";

export default function Menu() {
    const status = ({ isActive }) => isActive ? "menu__item menu__item-active" : "menu__item";

    return (
        <nav className="menu">
            <NavLink to="/" className={status}>Главная</NavLink>
            <NavLink to="/drift" className={status}>Дрифт-такси</NavLink>
            <NavLink to="/timeattack" className={status}>Time Attack</NavLink>
            <NavLink to="/forza" className={status}>Forza Karting</NavLink>
        </nav>
    );
}   