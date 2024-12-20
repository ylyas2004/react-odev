import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Template from "./components/Template";
import Home from "./components/Home";
import VenueDetail from "./components/VenueDetail";
import AddComment from "./components/AddComment";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import About from "./components/About";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Template />}>
          {/* Home Page */}
          <Route path="/" element={<Home />} />
          
          {/* Venue Detail Route */}
          <Route path="venue/:id" element={<VenueDetail />} />
          
          {/* Add Comment Route under Venue */}
          <Route path="venue/:id/comment/new" element={<AddComment />} />
          
          {/* Authentication Routes */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
          {/* About Page Route */}
          <Route path="about" element={<About />} />
          
          {/* Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
