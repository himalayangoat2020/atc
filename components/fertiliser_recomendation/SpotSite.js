const SpotSite = ({ onOptionsSelected }) => (
	<div className="row on_site atc_hide">
		<div className="col-md-12">
			<h5>Nitrogen</h5>
			<div className="nitrogen_radio" onChange={(e) => onOptionsSelected(e)}>
				<label htmlFor="nitrogen">High</label>
				<input
					type="radio"
					id="high"
					name="nitrogen"
					value="high"
					//onChange={(e) => onOptionsSelected(e)}
				/>
				<label htmlFor="medium">Medium</label>
				<input
					type="radio"
					id="medium"
					name="nitrogen"
					value="medium"
					//onChange={(e) => onOptionsSelected(e)}
				/>
				<label htmlFor="low">Low</label>
				<input
					type="radio"
					id="low"
					name="nitrogen"
					value="low"
					//onChange={(e) => onOptionsSelected(e)}
				/>
			</div>
			<h5>Potassium</h5>
			<div className="potassium_radio" onChange={(e) => onOptionsSelected(e)}>
				<label htmlFor="nitrogen">High</label>
				<input
					type="radio"
					id="high"
					name="potassium"
					value="high"
					
				/>
				<label htmlFor="medium">Medium</label>
				<input
					type="radio"
					id="medium"
					name="potassium"
					value="medium"
					
				/>
				<label htmlFor="low">Low</label>
				<input
					type="radio"
					id="low"
					name="potassium"
					value="low"
					
				/>
			</div>
			<h5>Phosphorus</h5>
			<div className="phosphorus_radio" onChange={(e) => onOptionsSelected(e)}>
				<label htmlFor="nitrogen">High</label>
				<input
					type="radio"
					id="high"
					name="phosphorus"
					value="high"
					
				/>
				<label htmlFor="potassium">Medium</label>
				<input
					type="radio"
					id="medium"
					name="phosphorus"
					value="medium"
					
				/>
				<label htmlFor="low">Low</label>
				<input
					type="radio"
					id="low"
					name="phosphorus"
					value="low"
					
				/>
			</div>
		</div>
	</div>
);

export default SpotSite;
