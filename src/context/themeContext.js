import React, { createContext, useContext } from "react";
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	Theme,
} from "@mui/material/styles";

const ThemeContext = createContext(createTheme());

const ThemeProvider = ({ children }) => {
	const theme = createTheme({
		breakpoints: {
			values: {
				sm: 640,
				md: 768,
				lg: 1024,
				xl: 1280,
				'2xl':1536
			}
		},
		palette: {
			mode: "light",
		},
	});

	return (
		<ThemeContext.Provider value={theme}>
			<MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error("context theme is not exist!");
	}

	return context;
};

export { ThemeProvider, useTheme };
