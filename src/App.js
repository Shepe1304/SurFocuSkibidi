import "./App.css";
import ExtendableDiv from "./components/ExtendableDiv";
import React, { useState } from "react";
import Header from "./homepage/header/Header";
import Footer from "./homepage/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ExtendableDiv
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque officia incidunt adipisci tempora inventore nostrum magnam veritatis consequatur aliquam, tenetur optio quis magni iusto possimus voluptatem fugit sequi vitae."
        }
      />
      <Footer />
    </div>
  );
}

export default App;
