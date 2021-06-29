import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../styles/app.css";
import UserContext from "../context/UserContext";

export default function Categories() {
  const [categories, setCategories] = useState();
  const [underCategory, setUnderCategory] = useState();
  const {userCategories, setUserCategories} = useContext(UserContext);

  const handleClick = (e)=>{
    setUserCategories(e);
  }
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
        !underCategory &&
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
          <h3>{underCategory}</h3><button className="tarass" onClick={()=> setUnderCategory(null)}>back</button>
          <ul className="cat-list-container">
            {categories[1][underCategory].map((e) => (
              <li className="cat-li"><button className="subcat-button" onClick={()=>handleClick(e)}>{e}</button></li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
