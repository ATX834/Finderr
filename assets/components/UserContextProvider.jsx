import React, { useState } from "react";
import UserContext from "../context/UserContext";

const UserContextProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState();
  const [userHourlyRate, setUserHourlyRate] = useState();
  const [userCategories, setUserCategories] = useState();
  const [userCredentials, setUserCredentials] = useState(false);
  
  return (
    <UserContext.Provider
      value={{
        userLanguage,
        userHourlyRate,
        userCategories,
        userCredentials,
        setUserCategories,
        setUserHourlyRate,
        setUserLanguage,
        setUserCredentials
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
