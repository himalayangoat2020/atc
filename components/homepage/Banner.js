import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Banner = () => {
	/* let tl = useRef() */

	/* useEffect(() => {
		gsap.from(tl.current,{duration: 2, x: -300, opacity: 0, scale: 0.8})
	}, []) */
	return (
		<section  id="hero" className="d-flex align-items-center hero">
			<div
				className="container-fluid"
				data-aos="zoom-out"
				data-aos-delay="100"
			>
				<div className="row justify-content-center">
					<div className="col-xl-10">
						<div className="row">
							<div /* ref={tl} */ className="col-xl-5">
								<h1>Agriculture Research Innovation</h1>
								<h2>
									ATC lab is one of the oldest agriculture
									based soil and plant labs in Nepal.
								</h2>
								<Link href="soilcalculator">
									<a className="btn-get-started scrollto">
										Soil Texture
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
