import Home from "./components/pages/Home"
import Detail from "./components/pages/Detail"
import Login from "./components/pages/Login"
import Profile from "./components/pages/Profile"
import SortFilter from "./components/pages/SortFilter"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"

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