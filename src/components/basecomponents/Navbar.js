import React from 'react';
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { routes } from "../../routes"
import { changeTheme } from "../../reduxStore/themeChanger"
import { DarkIcon, LightIcon } from '../../styledComponents/Icons';


function Navbar() {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()

    const openDropdown = () => {
        document.getElementById("movies-dropdown").classList.add("d-block")
    }
    const closeDropdown = () => {
        document.getElementById("movies-dropdown").classList.remove("d-block")
    }

    return <nav className={`bg-danger border-2 border-bottom ${state.theme ? "border-light" : "border-danger bg-black"}`}>
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-6 flex-row d-flex">
                    <h4><Link to="/" className={`text-decoration-none ${state.theme ? "text-light" : "text-danger"}`}>Home</Link></h4>
                    <div className='btn-group px-3' onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}>
                        <Link to="/sort-filter" className={`${state.theme ? "btn-danger": "text-danger" } btn dropdown-toggle`}
                        >
                            Movies
                        </Link>
                        <ul id="movies-dropdown" className="dropdown-menu position-absolute top-100">
                            <li><Link className="dropdown-item" to="sort-filter/popular">Popular</Link></li>
                            <li><Link className="dropdown-item" to="sort-filter/top_rated">Top Rated</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='col-6'>
                    <ul className='list-unstyled d-flex justify-content-end'>
                        {
                            routes.filter(item => item.isNav).map((item, index) => <li className='pt-3 px-3' key={index}><Link to={item.pathname} className={`text-decoration-none ${state.theme ? "text-light" : "text-danger"}`} >{item.name}</Link></li>)
                        }
                        <button className={`btn rounded-circle ${!state.theme ? "text-danger border-danger" : "text-danger border-danger bg-dark"} mt-2`}
                            onClick={() => dispatch(changeTheme(state.theme))}
                        >
                            {
                                state.theme ? <DarkIcon /> : <LightIcon />
                            }
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    </nav>;
}

export default Navbar;
