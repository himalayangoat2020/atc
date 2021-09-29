import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useRef, useState, useEffect } from "react";

import client1 from '../../public/img/clients/client-1.png'
import client2 from '../../public/img/clients/client-2.png'
import client3 from '../../public/img/clients/client-3.png'
import client4 from '../../public/img/clients/client-4.png'
import client5 from '../../public/img/clients/client-5.png'
import client6 from '../../public/img/clients/client-6.png'
import client7 from '../../public/img/clients/client-7.png'
import client8 from '../../public/img/clients/client-8.png'



function BrandsList() {
    const [pause, setPause] = useState(false);
	const timer = useRef();
	const [sliderRef, slider] = useKeenSlider({
		slidesPerView: 2,
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
				slidesPerView: 5,
			},
			"(min-width: 1200px)": {
				slidesPerView: 7,
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
	}, [pause, slider]);


    return (
        <section id="clients" className="clients">
            <div className="container-fluid" data-aos="zoom-in">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div ref={sliderRef} className="keen-slider clients-carousel">
                            <div className="keen-slider__slide">
                                <Image
                                    src={client1}
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={client2}
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={client3}
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={client4}
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={client5}
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={client6}
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={client7}
                                    alt=""
                                />
                            </div>
                            <div className="keen-slider__slide">
                                <Image
                                    src={client8}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BrandsList;
