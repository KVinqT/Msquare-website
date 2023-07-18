import Home from "./pages/home";
import AOS from "aos";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ServiceDetails from "./pages/ServiceDetails";
AOS.init();
function App() {
  return (
    <div
      id="home"
      className="h-full dark:bg-[#191919] bg-white text-black snap-mandatory scroll-smooth overflow-y-auto"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service-details" element={<ServiceDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
