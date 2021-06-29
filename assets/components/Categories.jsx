import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
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
    <>
      <h1>Categories</h1>
      {categories && (
        <ul>
          {categories[0] &&
            categories[0].map((e) => (
              <li>
                <button onClick={() => setUnderCategory(e)}>{e}</button>
              </li>
            ))}
        </ul>
      )}
      {underCategory && (
        <>
          <h3>{underCategory}</h3>
          <ul>
            {categories[1][underCategory].map((e) => (
              <li><button onClick={()=>handleClick(e)}>{e}</button></li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
