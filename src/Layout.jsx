import React from "react";
import Header from "./components/structure/Header";
import Aside from "./components/structure/Aside";
import Footer from "./components/structure/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Aside />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
