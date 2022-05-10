import "./App.css";
import Header from "./pages/Shared/Header";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory/Inventory";
import Login from "./pages/Login/Login";
import Footer from "./pages/Shared/Footer";
import ItemDetails from "./pages/Inventory/ItemDetails";
import SignUp from "./pages/SignUp/SignUp";
import ScrollToTop from "./hooks/scrollToTop";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/404/NotFound";
import AddNewItem from "./pages/AddNewItem/AddNewItem";
import RequireAuth from "./pages/RequireAuth/RequireAuth";
import Blog from "./pages/Blog/Blog";
import MyItems from "./pages/MyItems/MyItems";
import AddTestimonial from "./pages/AddTestimonial/AddTestimonial";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/add-testimonial"
          element={
            <RequireAuth>
              <AddTestimonial />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/:itemId"
          element={
            <RequireAuth>
              <ItemDetails />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItems />
            </RequireAuth>
          }
        />
        <Route
          path="/inventory/add-new-item"
          element={
            <RequireAuth>
              <AddNewItem />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer position="bottom-right" />

      <Footer />
    </div>
  );
}

export default App;
