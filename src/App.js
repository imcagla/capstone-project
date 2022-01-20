import {routes} from "./routes"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/basecomponents/Navbar";
import Footer from "./components/basecomponents/Footer";

function App() {
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
