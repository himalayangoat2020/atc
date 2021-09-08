const WhoWeAre = () => {
	return (
		<section id="about" className="about section-bg">
			<div className="container" data-aos="fade-up">
				<div className="row no-gutters">
					<div className="content col-xl-5 d-flex align-items-stretch">
						<div className="content">
							<h3>WHO WE ARE</h3>
							<p>
								Agricultural Technology Center (ATC) is an
								agriculture specialist company that has provided
								plant and soil lab services, agricultural
								research, agricultural project consultancy
								services, plant clinic services, agricultural
								training and a variety of agricultural technical
								solutions since its establishment in 1993. We
								work with farmers, agricultural investors;
								government agencies, I/NGOs and UN agencies to
								ensure that up-to-date and
								context-Officeropriate agricultural knowledge
								can be implemented effectively at field level
								where it matters most.
							</p>
							{/*  <!-- <a href="#" className="about-btn"><span>About us</span> <i className="bx bx-chevron-right"></i></a> --> */}
						</div>
					</div>
					<div className="col-xl-7 d-flex align-items-stretch">
						<div className="icon-boxes d-flex flex-column justify-content-center">
							<div className="row">
								<div
									className="col-md-6 icon-box"
									data-aos="fade-up"
									data-aos-delay="100"
								>
									<i className="ri-flask-fill"></i>
									<h4>Laboratory</h4>
									<p>
										ATC lab is one of the oldest
										agricultural based soil and plant labs
										in Nepal. It is also the only private
										lab run by the agriculture experts in
										the country. The lab is equipped with
										all the necessary equipment and is
										handled by experts with more than 45
										years of expertise.
									</p>
								</div>
								<div
									className="col-md-6 icon-box"
									data-aos="fade-up"
									data-aos-delay="200"
								>
									<i className="ri-bar-chart-grouped-fill"></i>
									<h4>Research Farm</h4>
									<p>
										In 2015, ATC started a farm on 0.75 ha
										of land in Luvu, Lalitpur to conduct
										on-farm research. The research farm aims
										to de expand and demonstrate sustainable
										and environmentally friendly
										agricultural techniques.
									</p>
								</div>
								<div
									className="col-md-6 icon-box"
									data-aos="fade-up"
									data-aos-delay="300"
								>
									<i className="ri-service-fill"></i>
									<h4>ATC Consulting</h4>
									<p>
										ATC Consulting is a roster of experts
										from various fields, a team of ATC
										in-house professionals and external
										consultants that provides consultancy
										services in the following areas:
									</p>
								</div>
								<div
									className="col-md-6 icon-box"
									data-aos="fade-up"
									data-aos-delay="400"
								>
									<i className="ri-group-fill"></i>
									<h4>Trainings</h4>
									<p>
										A range of training programs have been
										designed and delivered by ATC to train
										farmers as well as agriculture
										technicians. Our training programs are
										tailored to meet the technical and
										professional needs of various clients.
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

export default WhoWeAre;
