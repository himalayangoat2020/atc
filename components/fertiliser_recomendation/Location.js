const Location = ({onLocationClick}) => (
	<div className="row">
		<div className="col-md-8">
			<div className="info-box">
				<i className="bx bx-map"></i>
				<h3>Your Location</h3>
				<div id="area" className="row">
					<div className="text-center atc_button pahad">
						<button className="area pahad" onClick={e => onLocationClick(e,"pahad")}>Pahad</button>
					</div>
					<div className="text-center atc_button terai">
						<button className="area terai" onClick={e => onLocationClick(e,"terai")}>Terai</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);


export default Location;