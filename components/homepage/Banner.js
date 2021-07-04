import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Banner = () => {
	
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
							<div className="col-xl-5">
								<h1>Agriculture Research Innovation</h1>
								<h2 ref={ tl}>
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
