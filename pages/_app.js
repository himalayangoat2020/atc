import "../styles/globals.css";
//import { Provider } from "next-auth/client";
import { UserProvider } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta
                    content="width=device-width, initial-scale=1.0"
                    name="viewport"
                />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta content="" name="description" />
                <meta content="" name="keywords" />
                <title>Agricultural Technology Center (ATC)</title>

                {/* <!-- Android  --> */}
                <meta name="theme-color" content="#bae825" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* <!-- iOS --> */}
                <meta name="apple-mobile-web-app-title" content="ATC" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="default"
                />

                {/* <!-- Windows  --> */}
                <meta name="msapplication-navbutton-color" content="#bae825" />
                <meta name="msapplication-TileColor" content="#bae825" />
                <meta
                    name="msapplication-TileImage"
                    content="ms-icon-144x144.png"
                />
                <meta name="msapplication-config" content="browserconfig.xml" />

                {/* <!-- Pinned Sites  --> */}
                <meta name="application-name" content="ATC" />
                <meta name="msapplication-tooltip" content="ATC" />
                <meta name="msapplication-starturl" content="/" />

                {/* <!-- Tap highlighting  --> */}
                <meta name="msapplication-tap-highlight" content="no" />

                {/* <!-- UC Mobile Browser  --> */}
                <meta name="full-screen" content="yes" />
                <meta name="browsermode" content="application" />

                {/* <!-- Disable night mode for this page  --> */}
                <meta name="nightmode" content="disable" />

                {/* <!-- Fitscreen  --> */}
                <meta name="viewport" content="uc-fitscreen=yes" />

                {/* <!-- Layout mode --> */}
                <meta name="layoutmode" content="standard" />

                {/* <!-- Orientation  --> */}
                <meta name="screen-orientation" content="portrait" />

                <link rel="manifest" href="/manifest.json" />
                <link
                    href="/icons/favicon-192x192.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/favicon-256x256.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
				<link
                    href="/icons/favicon-384x384.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                {/* <link rel="apple-touch-icon" href="/apple-icon.png"></link> */}

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
