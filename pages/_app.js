import "../styles/globals.css";
import { Provider } from "next-auth/client";
import Head from "next/head";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
					integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
					crossOrigin="anonymous"
				/>
			</Head>
			<Layout>
				<Provider session={pageProps.session}>
					<Component {...pageProps} />
				</Provider>
			</Layout>
		</>
	);
}

export default MyApp;
