import {routes} from "./routes"
import {Routes, Route} from "react-router-dom"
import {useSelector} from "react-redux"
import Footer from "./components/basecomponents/Footer";
import StyledNavbar from "./components/basecomponents/StyledNavbar";

function App() {
  const theme = useSelector((state) => state.theme)

  document.getElementById("root").style.backgroundColor = theme ==="light" ? "white":"#14171c"
  document.getElementById("root").style.color = theme ==="light" ? "black":"white"
  return (
    <>
    <StyledNavbar/>
      <Routes>
        {
          routes.map((item, index) => <Route key={index} path={item?.pathname} element={<item.element />} />)
        }
      </Routes>
      <Footer />
    </>
  );
}

export default App;
