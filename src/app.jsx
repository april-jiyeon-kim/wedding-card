import "./app.css";
import React from "react";
import Card from "./components/card/card";
import Gallery from "./components/gallery/gallery";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";

function App() {
  return (
    <>
      <div className={styles.app}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/wedding-card"
              exact
              element={
                <>
                  <Card />
                  <Gallery />
                  <Footer />
                </>
              }
            />
            <Route
              path="/wedding-card/misook"
              element={
                <>
                  <Card version={2} />
                  <Gallery />
                  <Footer />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
