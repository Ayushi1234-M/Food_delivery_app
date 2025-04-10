import "./App.css";
import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <>
      <div className="app_component">
        <Header></Header>

        <Routes>
          <Route path="/about" element={<AboutUs></AboutUs>}></Route>
          <Route path="/" element={<Body></Body>}></Route>
          <Route path="/home" element={<Body></Body>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
          <Route path="/restaurant/:resId" element={<RestaurantMenu></RestaurantMenu>}></Route>
     </Routes>

        {/* <Body></Body> */}
      </div>
    </>
  );
}

export default App;
