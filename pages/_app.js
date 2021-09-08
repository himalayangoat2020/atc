import "../styles/globals.css";
//import { Provider } from "next-auth/client";
import { UserProvider } from "@auth0/nextjs-auth0";
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

				<link
					href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
					rel="stylesheet"
				/>

				<script
					src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.bundle.min.js"
					integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
					crossOrigin="anonymous"
				></script>
			</Head>
			<Layout>
				{/* <Provider session={pageProps.session}> */}
				<UserProvider>
					<Component {...pageProps} />
				</UserProvider>
			</Layout>
		</>
	);
}

export default MyApp;
