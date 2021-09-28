import { useKeenSlider } from "keen-slider/react";
import Image from 'next/image';
import Testimonial1 from '../../public/img/testimonials/testimonials-1.jpg';
import Testimonial2 from '../../public/img/testimonials/testimonials-2.jpg';

const Testomonials = () => {
	const [sliderRef] = useKeenSlider({ loop: true });

	return (
		<section id="testimonials" className="testimonials">
			<div className="container" data-aos="fade-up">
				<div className="section-title">
					<h2>Testimonials</h2>
					<p>Some comments of our precious customer.</p>
				</div>
			</div>

			<div className="container-fluid">
				<div
					className="row justify-content-center"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					<div className="col-xl-10">
						<div ref={sliderRef} className="owl-carousel testimonials-carousel">
							<div className="testimonial-wrap">
								<div className="testimonial-item">
									<Image
										src={Testimonial1}
										className="testimonial-img"
										alt=""
									/>
									<h3>Mr.Satish Ghimire</h3>
									<h4>
										Assistant Marketing Manager (CGNS Seeds
										Pvt. Ltd.
									</h4>
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>
										High quality, reliable service. The
										market study service provided by
										Agricultural Technology Center (ATC), to
										CGNS seeds Pvt. Ltd. was extremely
										useful for us to develop market
										strategy. I would recommend the company
										for market surveys on agricultural
										commodities without reservations.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
								</div>
							</div>

							<div className="testimonial-wrap">
								<div className="testimonial-item">
									<Image
										src={Testimonial2}
										className="testimonial-img"
										alt=""
									/>
									<h3>Sashi Kumar Khadka</h3>
									<h4>
										Managing Director(GrowAgro Nepal Pvt.
										Ltd.)
									</h4>
									<p>
										<i className="bx bxs-quote-alt-left quote-icon-left"></i>
										High quality, reliable service. The
										market study service provided by
										Agricultural Technology Center (ATC), to
										CGNS seeds Pvt. Ltd. was extremely
										useful for us to develop market
										strategy. I would recommend the company
										for market surveys on agricultural
										commodities without reservations.
										<i className="bx bxs-quote-alt-right quote-icon-right"></i>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Testomonials;
