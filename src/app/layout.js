import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/themeContext";

const RootLayout = ({ children }) => {
	return (
		<ThemeProvider>
			<Head>
				<title>nextjs inital</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Next js shared project" />
			</Head>
			<html lang="en">
				<body>
					<div className="layout h-screen">
						<Header />
						{children}
						<Footer />
					</div>
				</body>
			</html>
		</ThemeProvider>
	);
};

export default RootLayout;
