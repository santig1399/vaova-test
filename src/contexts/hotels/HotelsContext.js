import React, { useState } from 'react';

export const HotelsContext = React.createContext();

const HotelsContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  return (
    <HotelsContext.Provider
      value={{
        hotels,
        setHotels
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};

export default HotelsContextProvider;
