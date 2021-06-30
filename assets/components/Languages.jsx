import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";

export default function Languages() {
  const [languages, setLanguages] = useState();
  const {userLanguage, setUserLanguage} = useContext(UserContext);

  const fetchLanguages = () => {
    axios
      .get("/api/language")
      .then((r) => r.data)
      .then(setLanguages);
  };
  const handleClick = (e)=>
  {
    setUserLanguage(e);
  }

  useEffect(() => {
    fetchLanguages();
  }, []);

  return (
    <>
      <h1 className="cat-title">Languages</h1>
      {languages && (
        <ul className="cat-list-container">{languages[0] && languages[0].map((e) => <li className="cat-li"><button className="cat-button" onClick={()=>handleClick(e)}>{e}</button></li>)}</ul>
      )}
    </>
  );
}
