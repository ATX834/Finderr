import axios from "axios";
import React, { useContext, useState} from "react";
import UserContext from "../context/UserContext";

export default (Users) => {
  const {
    userLanguage,
    userHourlyRate,
    userCategories,
    userCredentials,
    searchResults,
    setUserLanguage,
    setUserHourlyRate,
    setUserCategories,
    setUserCredentials,
    setSearchResults
  } = useContext(UserContext);

  

  const handleClick = (setter) => {
    setter(null);
  };

  const handleSubmit = () => {
    setUserCredentials(true);
      axios
        .get(
          `/api/search?language=${userLanguage}&hourlyRate=${userHourlyRate}&category=${userCategories}`
        )
        .then((r) => setSearchResults(r.data));
  };
  return (
    <>
     <div className="selec-container">
      <h4>Your selection</h4>
      <ul className="ul-selec">

      {userCategories && (
          <li>
            Category selected : {userCategories}{" "}
            <button className="lilcross" onClick={() => handleClick(setUserCategories)}>X</button>
          </li>
        )}
        {userLanguage && (
          <li>
            Language selected : {userLanguage}{" "}
            <button className="lilcross" onClick={() => handleClick(setUserLanguage)}>X</button>
          </li>
        )}
        {userHourlyRate && (
          <li>
            Hourly Rate selected : {userHourlyRate}{" "}
            <button className="lilcross" onClick={() => handleClick(setUserHourlyRate)}>X</button>
          </li>
        )}
      </ul>
      {userCategories && userHourlyRate && userLanguage && <button className="subsub" onClick={() => handleSubmit()}>submit</button>}
    </div>     
    </>
  );
};
