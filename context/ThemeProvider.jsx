"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const [signer, setSigner] = useState(null);
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(null);

  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
        isConnected,
        setIsConnected,
        hasMetamask,
        setHasMetamask,
        address,
        setAddress,
        balance,
        setBalance,
        signer,
        setSigner,
        category,
        setCategory,
        price,
        setPrice,
        location,
        setLocation,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
}
