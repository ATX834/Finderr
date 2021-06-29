import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

export default (Users) => {
const {userLanguage, userHourlyRate, userCategories} = useContext(UserContext)

  return (
    <>
      <h1>Users</h1>
      {userLanguage && <p>Language selected : {userLanguage}</p>}
      {userHourlyRate && <p>Hourly Rate selected : {userHourlyRate}</p>}
      {userCategories && <p>Category selected : {userCategories}</p>}
    </>
  );
};
