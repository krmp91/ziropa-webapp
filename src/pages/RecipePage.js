import React from "react";
import ShowRecipe from "../components/ShowRecipe";
import Footer from "../components/Footer";

export default function RecipePage() {
  return (
    <div style={{ position: "relative", height: "auto" }}>
      <ShowRecipe />
      <Footer />
    </div>
  );
}
