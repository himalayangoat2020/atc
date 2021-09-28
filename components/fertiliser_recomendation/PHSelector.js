const PHSelector = ({selectPhHandler}) => (
	<div className="row">
		<div className="col-md-8">
			<div className="info-box">
				<i className="bx bx-map"></i>
				<h3>Selecting your pH</h3>
				<div className="ph_value">
					<label htmlFor="ph_value">Choose a pH Value:</label>
					<select name="ph_value" id="pH-select" onChange={e => selectPhHandler(e)}>
						<option value="">--Please choose an option--</option>
						<option value="6.4">6.4</option>
						<option value="6.3">6.3</option>
						<option value="6.2">6.2</option>
						<option value="6.1">6.1</option>
						<option value="6.0">6.0</option>
						<option value="5.9">5.9</option>
						<option value="5.8">5.8</option>
						<option value="5.7">5.7</option>
						<option value="5.6">5.6</option>
						<option value="5.5">5.5</option>
						<option value="5.4">5.4</option>
						<option value="5.3">5.3</option>
						<option value="5.2">5.2</option>
						<option value="5.1">5.1</option>
						<option value="5.0">5.0</option>
						<option value="4.9">4.9</option>
						<option value="4.8">4.8</option>
						<option value="4.7">4.7</option>
						<option value="4.6">4.6</option>
						<option value="4.5">4.5</option>
					</select>
				</div>
			</div>
		</div>
	</div>
);

export default PHSelector;
