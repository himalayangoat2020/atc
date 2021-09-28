const SpotLab = ({onInputChanged}) => (
	<>
		<div className="row lab_results atc_hide" onChange={e => onInputChanged(e)}>
			<div>
				<label htmlFor="nitrogen">Nitrogen: (%)</label>
				<input type="text" id="nitrogen" name="nitrogen" />
			</div>
			<div>
				<label htmlFor="potassium">Potassium: (kg/ha)</label>
				<input type="text" id="potassium" name="potassium" />
			</div>
			<div>
				<label htmlFor="phosphorus">Phosphorus: (kg/ha)</label>
				<input type="text" id="phosphorus" name="phosphorus" />
			</div>
		</div>

		<div className="text-center atc_button post_btn atc_hide">
			<button className="interpret_lab_results">Post</button>
		</div>
	</>
);

export default SpotLab;