import Head from "next/head";
import RootLayout from "./layout";
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
	return (
		<RootLayout>
			<Head>
				<title>nextjs inital</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content="Next js shared project" />
			</Head>
			{Component && <Component {...pageProps} />}
		</RootLayout>
	);
};

export default MyApp;
