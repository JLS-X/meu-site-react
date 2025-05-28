import React, { lazy, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./componentes/layouts/Layout";


const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const UserProfile = lazy(() => import('./pages/UserProfile'));

function App(){
  return (
    <BrowserRouter>
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="user/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
  );
}

export default App;