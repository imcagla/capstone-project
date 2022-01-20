import Home from "./components/Home"
import Detail from "./components/Detail"
import Login from "./components/Login"
import Profile from "./components/Profile"
import SortFilter from "./components/SortFilter"

export const routes = [
    {name: "Home", pathname: "/", element: Home, isNav:false},
    {name: "Movies", pathname: "/sort-filter", element: SortFilter, isNav:false},
    {name: "Movies", pathname: "/sort-filter/:type", element: SortFilter, isNav:false},
    {name: "Profile", pathname: "/profile", element: Profile, isNav:true},
    {name: "Login", pathname: "/login", element: Login, isNav:true},
    {name: "Detail", pathname: "/detail", element: Detail, isNav:false},
]