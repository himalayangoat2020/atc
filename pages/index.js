import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import Banner from "../components/homepage/Banner";
import Services from "../components/homepage/Services";
import Gallery from "../components/homepage/Gallery";
import Testomonials from "../components/homepage/Testimonials";
import Teams from "../components/homepage/Teams";
import { useEffect, useRef } from "react";

export default function Home() {
	

	return (
		<>
			<Head>
				<title>Agriculture Technology Center</title>
				<meta name="description" content="homepage description" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Banner/>
			<Teams />
			<Services />
			<Gallery />
			<Testomonials />
		</>
	);
}
