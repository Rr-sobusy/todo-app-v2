import React, { createContext, useState, ReactNode } from "react";

const availableTheme = "dark" || "light";

// default
const defaultTheme = "dark"

type Props = {
  children: ReactNode;
};

type ProviderProps = {
  theme: typeof availableTheme;
  setTheme?: React.Dispatch<React.SetStateAction<typeof availableTheme>>;
};

export const ThemeContext = createContext<ProviderProps | undefined>(undefined);

export const ContextProvider = (props: Props) => {
  const { children } = props;
  const [theme, setTheme] = useState<typeof availableTheme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
