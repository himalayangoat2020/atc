import Image from 'next/image'
import prashant from '../../../public/img/tabs-2.jpg'

const Prashant = () => (
	<div className="row">
		<div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 tab-2">
			<h3>Prashanta Raut ( Researcher)</h3>
			<p className="font-italic">
				Masters in Agroecology, Norwegian University of Life Sciences
			</p>
			<p>
				An experienced Agroecologist with more than 8 years of
				experience in agricultural research and extension, Mr. Raut has
				a Masters degree in Agroecology from Norwegian University of
				Life Sciences. He has worked primarily in the sector of
				agriculture markets, enterprise development, value Chain and
				market system analysis.
			</p>
		</div>
		<div className="col-lg-6 order-1 order-lg-2 text-center">
			<Image src={prashant} alt="photo of prashant" className="img-fluid" />
		</div>
	</div>
);

export default Prashant;
