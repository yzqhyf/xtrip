import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/themeContext";

const RootLayout = ({ children }) => {
	return (
		<ThemeProvider>
			<div className="layout h-screen">
				<Header />
				{children}
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default RootLayout;
