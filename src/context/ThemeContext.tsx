import React, { createContext, useContext, useState, useEffect } from 'react';

export type PortfolioTheme = 'batman' | 'teal';

interface ThemeContextType {
  theme: PortfolioTheme;
  setTheme: (theme: PortfolioTheme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<PortfolioTheme>('teal');

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_theme', 'teal');
    } catch {
      // Ignore
    }
    document.documentElement.setAttribute('data-theme', 'teal');
  }, []);

  const setTheme = (_newTheme: PortfolioTheme) => {
    setThemeState('teal');
    try {
      localStorage.setItem('portfolio_theme', 'teal');
    } catch {
      // Ignore
    }
  };

  const toggleTheme = () => {
    // Batman theme removed - permanently locked to Cyber Teal
  };

  return (
    <ThemeContext.Provider value={{ theme: 'teal', setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
