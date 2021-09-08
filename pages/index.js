import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gsap, Power3 } from "gsap";
//For nextjs you'll need to import the umd version:
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Banner from "../components/homepage/Banner";
import Services from "../components/homepage/Services";
import Gallery from "../components/homepage/Gallery";
import Testomonials from "../components/homepage/Testimonials";
import Teams from "../components/homepage/Teams";
import WhoWeAre from "../components/homepage/WhoWeAre";
import BrandsList from "../components/homepage/BrandsList";


/* gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger); */

export default function Home() {
	//let tl = new gsap.timeline({ delay: 0.3 });

	/* useEffect(() => {
		//tl.from('#team', {y: 115, opacity:0, ease: Power3.easeOut, delay:0.4}, 'Start')
		//let sections = gsap.utils.toArray('section')

		gsap.from("#team", {
			duration: 2,
			y: 80,
			opacity: 0,
			ease: "ease-in",
			scrollTrigger: {
				trigger: ".tab-pane",
				start: "top 90%",
				scrub: true,
				end: "bottom 60%",
				toggleActions: "restart complete reverse reset",
			},
		});
	}, []); */

	

	return (
		<>
			<Head>
				<title>Agriculture Technology Center</title>
				<meta name="description" content="homepage description" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Banner />
			<BrandsList />
			<WhoWeAre />
			<Teams />
			<Services />
			<Gallery />
			<Testomonials />
		</>
	);
}
