import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, ZodPage, NoZodPage } from "../pages";

const Rutas: React.FC = () => {

  return (
    <BrowserRouter>
      <section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zodpage" element={<ZodPage />} />
          <Route path="/nozodpage" element={<NoZodPage />} />

          <Route
              path="/*"
              element={
                <div>
                  Error 404
                </div>
              }
            />
        </Routes>
      </section>
    </BrowserRouter>
  );
};
export default Rutas;