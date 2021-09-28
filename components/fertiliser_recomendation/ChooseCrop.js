import { Produces } from "../../atc_data/produces";

const ChooseCrop = ({chooseCropHandler}) => (
	<div className="row">
		<div className="col-md-8">
			<div className="info-box">
				<i className="bx bx-map"></i>
				<h3>Which crop are you trying to sow?</h3>
				<div className="select_crop">
					<label htmlFor="crops">Choose your crop</label>
					<select name="crops" id="crop_selection" onChange={(e) => chooseCropHandler(e)}>
						<option value="">--Please choose an option--</option>
						{Produces.map((item, i) => (
							<option key={i} value={item.name}>
								{item.name}
							</option>
						))}
					</select>
				</div>
			</div>
		</div>
	</div>
);

export default ChooseCrop;
