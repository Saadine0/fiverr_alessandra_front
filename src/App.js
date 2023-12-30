import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import ClientHotel from "./components/client_hotel_mb/ClientHotel";
import MenuMinibar from "./components/menu_article_minibar/MenuMinibar";
import Checkout from "./components/sub_mb_components/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ClientHotel" element={<ClientHotel />} />
        <Route path="/MenuMinibar" element={<MenuMinibar />} />
        <Route
          path="/Checkout"
          element={
            <div className="px-40 pt-20 h-screen bg-gray-100">
              <Checkout />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
