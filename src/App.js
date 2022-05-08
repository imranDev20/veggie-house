import "./App.css";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer";
import ItemDetails from "./pages/Inventory/ItemDetails";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:itemId" element={<ItemDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
