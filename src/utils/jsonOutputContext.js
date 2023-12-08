'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const JsonOutputContext = createContext();

export const useJsonOutput = () => {
    const context = useContext(JsonOutputContext);
    return context;
};

export const JsonOutputProvider = ({ children }) => {
    const [jsonOutput, setJsonOutput] = useState(null);

    useEffect(() => {
        const storedJsonOutput = JSON.parse(localStorage.getItem('jsonOutput')) || null;
        setJsonOutput(storedJsonOutput);
      }, []);
    
      useEffect(() => {
        if (jsonOutput !== null) {
          localStorage.setItem('jsonOutput', JSON.stringify(jsonOutput));
        }
      }, [jsonOutput]);

    return (
        <JsonOutputContext.Provider value={{ jsonOutput, setJsonOutput }}>
            {children}
        </JsonOutputContext.Provider>
    );
};