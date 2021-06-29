import React, { useState } from "react";
import UserContext from "../context/UserContext";

const UserContextProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState();
  const [userHourlyRate, setUserHourlyRate] = useState();
  const [userCategories, setUserCategories] = useState();
  
  return (
    <UserContext.Provider
      value={{
        userLanguage,
        userHourlyRate,
        userCategories,
        setUserCategories,
        setUserHourlyRate,
        setUserLanguage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
