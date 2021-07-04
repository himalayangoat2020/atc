const Teams = () => (
	<section id="team" className="tabs">
		<div className="container" data-aos="fade-up">
			<ul className="nav nav-tabs row d-flex">
				<li className="nav-item col-3">
					<a
						className="nav-link active show"
						data-toggle="tab"
						href="#tab-1"
					>
						<i className="ri-body-scan-line"></i>
						<h4 className="d-none d-lg-block">Soil Scientist.</h4>
					</a>
				</li>
				<li className="nav-item col-3">
					<a className="nav-link" data-toggle="tab" href="#tab-2">
						<i className="ri-body-scan-line"></i>
						<h4 className="d-none d-lg-block">Agroecologist.</h4>
					</a>
				</li>
				<li className="nav-item col-3">
					<a className="nav-link" data-toggle="tab" href="#tab-3">
						<i className="ri-body-scan-line"></i>
						<h4 className="d-none d-lg-block">Plant Scientist.</h4>
					</a>
				</li>
				<li className="nav-item col-3">
					<a className="nav-link" data-toggle="tab" href="#tab-4">
						<i className="ri-body-scan-line"></i>
						<h4 className="d-none d-lg-block">
							Agricultural Professional.
						</h4>
					</a>
				</li>
			</ul>

			<div className="tab-content">
				<div className="tab-pane active show" id="tab-1">
					<div className="row">
						<div
							className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0"
							data-aos="fade-up"
							data-aos-delay="100"
						>
							<h3>Dibya Laxmi Bajracharya (Chairperson)</h3>
							<p className="font-italic">
								M.Sc. Crop Science, University of Hohenheim.
							</p>
							<p>
								One of the renowned soil specialists of Nepal,
								Miss Dibya Laxmi Bajracharya has a Diploma in
								soil science from North Carolina State
								University and a M. Sc. Degree in chemistry from
								Tribhuwan University. She has worked as a soil
								scientist in various institutions of the
								Government of Nepal like Soil Science Division
								of the Department of Agriculture (DOA) and
								National Agriculture Research Council (NARC).
								After her retirement in early 90’s, Ms.
								Bajracharya started this soil lab, which is now
								the oldest privately owned soil and plant lab of
								Nepal. She has also worked with several
								Government and Non Governmental Institutions as
								a consultant and assited organizations to
								develop and implement sustainable soil
								management interventions. Even in her eighties,
								Ms. Bajracharya is actively engaged in research
								work in the lab as well as field.
							</p>
						</div>
						<div
							className="col-lg-6 order-1 order-lg-2 text-center"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<img
								src="/img/tabs-1.jpg"
								alt=""
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div className="tab-pane" id="tab-2">
					<div className="row">
						<div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
							<h3>Prashanta Raut ( Researcher)</h3>
							<p className="font-italic">
								Masters in Agroecology, Norwegian University of
								Life Sciences
							</p>
							<p>
								An experienced Agroecologist with more than 8
								years of experience in agricultural research and
								extension, Mr. Raut has a Masters degree in
								Agroecology from Norwegian University of Life
								Sciences. He has worked primarily in the sector
								of agriculture markets, enterprise development,
								value Chain and market system analysis.
							</p>
						</div>
						<div className="col-lg-6 order-1 order-lg-2 text-center">
							<img
								src="/img/tabs-2.jpg"
								alt=""
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div className="tab-pane" id="tab-3">
					<div className="row">
						<div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
							<h3>Shiva Shankar Sharma ( Researcher)</h3>
							<p className="font-italic">
								M. Sc. Plant Science, Norwegian University of
								Life Sciences
							</p>
							<p>
								Mr. Sharma (32 years, Male) has completed his
								MSc in plant science from Norwegian University
								of Life Sciences (NMBU) Norway in 2013 and BSc
								Agriculture in 2009 from Purbanchal University.
								Mr. Sharma has experience of more than 8 years
								in the sector of agriculture and food security.
								His expertize includes community development
								research; rural agricultural and off farm
								entrepreneurship development; designing,
								planning and managing community development
								projects.
							</p>
						</div>
						<div className="col-lg-6 order-1 order-lg-2 text-center">
							<img
								src="/img/tabs-3.jpg"
								alt=""
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
				<div className="tab-pane" id="tab-4">
					<div className="row">
						<div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
							<h3>Pragati Sipkhan (Researcher)</h3>
							<p className="font-italic">
								M.Sc. Crop Science, University of Hohenheim
							</p>
							<p>
								Mr. Pragati Sipkhan has completed his Master of
								Science in Crop Science in the year 2012 from
								the University of Hohenheim, Germany and
								Bachelor in Agricultural Science (honors) in
								2008 from Purbanchal University. He is a result
								oriented agricultural professional with
								experience of more than six years in agriculture
								development and research sector. His expertise
								includes program development and implementation,
								agricultural research planning and
								implementation, writing, handling, monitoring
								and evaluation of the project (especially in the
								sector of organic agriculture, Biodiversity,
								Climate change and Food security). He is a young
								and energetic personnel fully committed to
								finish work assigned on time with quality
								outputs. 
							</p>
						</div>
						<div className="col-lg-6 order-1 order-lg-2 text-center">
							<img
								src="/img/tabs-4.jpg"
								alt=""
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="container view_more_team">
			<a href="/teams.html" className="view_more">
				<button className="btn other-members-btn">Other Members</button>
			</a>
		</div>
	</section>
);

export default Teams;