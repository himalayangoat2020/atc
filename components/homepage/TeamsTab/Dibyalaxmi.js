import Image from 'next/image'
import Dibya from '../.././../public/img/tabs-1.jpg'
const Dibyalaxmi = () => (
	<div className="row">
		<div
			className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 tab-1"
			data-aos="fade-up"
			data-aos-delay="100"
		>
			<h3>Dibya Laxmi Bajracharya (Chairperson)</h3>
			<p className="font-italic">
				M.Sc. Crop Science, University of Hohenheim.
			</p>
			<p>
				One of the renowned soil specialists of Nepal, Miss Dibya Laxmi
				Bajracharya has a Diploma in soil science from North Carolina
				State University and a M. Sc. Degree in chemistry from Tribhuwan
				University. She has worked as a soil scientist in various
				institutions of the Government of Nepal like Soil Science
				Division of the Department of Agriculture (DOA) and National
				Agriculture Research Council (NARC). After her retirement in
				early 90’s, Ms. Bajracharya started this soil lab, which is now
				the oldest privately owned soil and plant lab of Nepal. She has
				also worked with several Government and Non Governmental
				Institutions as a consultant and assited organizations to
				develop and implement sustainable soil management interventions.
				Even in her eighties, Ms. Bajracharya is actively engaged in
				research work in the lab as well as field.
			</p>
		</div>
		<div
			className="col-lg-6 order-1 order-lg-2 text-center"
			data-aos="fade-up"
			data-aos-delay="200"
		>
			<Image src={Dibya} alt="photo of dibyalaxmi" className="img-fluid" />
		</div>
	</div>
);

export default Dibyalaxmi;