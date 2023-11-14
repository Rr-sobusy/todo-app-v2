import React, { createContext, useState, ReactNode } from "react";

// default
const defaultTheme = "dark"

type Props = {
  children: ReactNode;
};

type ProviderProps = {
  theme: "dark" | "light";
  toggleTheme: () => void
};

export const ThemeContext = createContext<ProviderProps | undefined>(undefined);

export const ContextProvider = (props: Props) => {
  const { children } = props;
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  function toggleTheme() {
    theme === "dark" ? setTheme("light") : setTheme(defaultTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
