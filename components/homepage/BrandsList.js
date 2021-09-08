import { useKeenSlider } from "keen-slider/react";
import { useRef, useState, useEffect } from "react";

function BrandsList() {
	/* const [pause, setPause] = useState(false);
	const timer = useRef();
	const [sliderRef, slider] = useKeenSlider({
		slidesPerView: 1,
		mode: "free-snap",
		spacing: 15,
		loop: true,
		duration: 1200,
		dragStart: () => {
			setPause(true);
		},
		dragEnd: () => {
			setPause(false);
		},
		breakpoints: {
			"(min-width: 768px)": {
				slidesPerView: 2,
			},
			"(min-width: 1200px)": {
				slidesPerView: 3,
			},
		},
	});

	useEffect(() => {
		sliderRef.current.addEventListener("mouseover", () => {
			setPause(true);
		});
		sliderRef.current.addEventListener("mouseout", () => {
			setPause(false);
		});
	}, [sliderRef]);

	useEffect(() => {
		timer.current = setInterval(() => {
			if (!pause && slider) {
				slider.next();
			}
		}, 2000);
		return () => {
			clearInterval(timer.current);
		};
	}, [pause, slider]); */

	const [sliderRef] = useKeenSlider({slidesPerView:2});

	return (
		<section id="clients" className="clients">
			<div className="container-fluid" data-aos="zoom-in">
				<div className="row justify-content-center">
					<div className="col-xl-10">
						<div ref={sliderRef} className="clients-carousel">
							<div className="owl-item">
								<img src="/img/clients/client-1.png" alt="" />
							</div>
							<div className="owl-item">
								<img src="/img/clients/client-2.png" alt="" />
							</div>
							<div className="owl-item">
								<img src="/img/clients/client-3.png" alt="" />
							</div>
							<div className="owl-item">
								<img src="/img/clients/client-4.png" alt="" />
							</div>
							<div className="owl-item">
								<img src="/img/clients/client-5.png" alt="" />
							</div>
							<div className="owl-item">
								<img src="/img/clients/client-6.png" alt="" />
							</div>
							<div className="owl-item">
								<img src="/img/clients/client-7.png" alt="" />
							</div>
							<div className="owl-item">
								<img src="/img/clients/client-8.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BrandsList;
