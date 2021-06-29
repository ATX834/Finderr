import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/app.css";

export default function Categories() {
  const [categories, setCategories] = useState();
  const [underCategory, setUnderCategory] = useState();

  const fetchCategories = () => {
    axios
      .get("/api/category")
      .then((r) => r.data)
      .then(setCategories);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="cat-container">
      <h1 className="cat-title">Categories</h1>
      {categories && (
        <ul className="cat-list-container">
          {categories[0] &&
            categories[0].map((e) => (
              <li className="cat-li">
                <button className="cat-button" onClick={() => setUnderCategory(e)}>{e}</button>
              </li>
            ))}
        </ul>
      )}
      {underCategory && (
        <>
          <h3>{underCategory}</h3>
          <ul>
            {categories[1][underCategory].map((e) => (
              <li>{e}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
