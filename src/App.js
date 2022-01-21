import {routes} from "./routes"
import {Routes, Route} from "react-router-dom"
import {useSelector} from "react-redux"
import Navbar from "./components/basecomponents/Navbar";
import Footer from "./components/basecomponents/Footer";

function App() {
  const theme = useSelector((state) => state.theme)

  document.getElementById("root").style.backgroundColor = theme ? "white":"rgb(19 20 20)"
  return (
    <>
      <Navbar />
      <Routes>
        {
          routes.map((item, index) => <Route key={index} path={item.pathname} element={<item.element />} />)
        }
      </Routes>
      <Footer />
    </>
  );
}

export default App;
