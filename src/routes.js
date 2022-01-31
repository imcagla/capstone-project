import Home from "./components/Home"
import Detail from "./components/Detail"
import Login from "./components/Login"
import Profile from "./components/Profile"
import SortFilter from "./components/SortFilter"
import About from "./components/About"
import Contact from "./components/Contact"

export const routes = [
    {name: "Home", pathname: "/", element: Home, isNav:false},
    {name: "Movies", pathname: "/sort-filter", element: SortFilter, isNav:false},
    {name: "Movies", pathname: "/sort-filter/:type", element: SortFilter, isNav:false},
    {name: "Search", pathname: "/search", element: Home, isNav:false},
    {name: "Profile", pathname: "/profile", element: Profile, isNav:false},
    {name: "About", pathname: "/about", element: About, isNav:true},
    {name: "Contact", pathname: "/contact", element: Contact, isNav:true},
    {name: "Login", pathname: "/login", element: Login, isNav:false},
    {name: "Detail", pathname: "/movies/:movieId", element: Detail, isNav:false},
]