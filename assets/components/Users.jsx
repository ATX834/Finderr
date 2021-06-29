import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

export default (Users) => {
  const {
    userLanguage,
    userHourlyRate,
    userCategories,
    setUserLanguage,
    setUserHourlyRate,
    setUserCategories,
  } = useContext(UserContext);
  const handleClick = (setter) => {
    setter(null);
  };

  const handleSubmit = () => {
      axios
        .get(
          `/api/user?language=${userLanguage}&hourlyRate=${userHourlyRate}&category=${userCategories}`
        )
        .then((r) => r.config.data);
  };
  return (
    <>
      <h4>selection</h4>
      <ul>
        {userLanguage && (
          <li>
            Language selected : {userLanguage}{" "}
            <button onClick={() => handleClick(setUserLanguage)}>X</button>
          </li>
        )}
        {userHourlyRate && (
          <li>
            Hourly Rate selected : {userHourlyRate}{" "}
            <button onClick={() => handleClick(setUserHourlyRate)}>X</button>
          </li>
        )}
        {userCategories && (
          <li>
            Category selected : {userCategories}{" "}
            <button onClick={() => handleClick(setUserCategories)}>X</button>
          </li>
        )}
      </ul>
      {userCategories && userHourlyRate && userLanguage && <button onClick={() => handleSubmit()}>submit</button>}
    </>
  );
};
