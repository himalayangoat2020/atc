const SoilTexture = ({ soilTextureHandler, appState }) => (
	<div className="row">
		<div className="col-md-8">
			<div className="info-box">
				<i className="bx bx-map"></i>
				<h3>Soil Texture</h3>
				<p className="soil_texture_qn">
					Do you know the soil texture ?
				</p>
				<div id="soil_texture_qn" className="row">
					<div className="text-center atc_button yes">
						<button
							type="button"
							className="yes"
							onClick={(e) => soilTextureHandler(e)}
						>
							Yes
						</button>
					</div>
					<div className="text-center atc_button no">
						<button
							type="button"
							className="no"
							onClick={(e) => soilTextureHandler(e)}
						>
							No
						</button>
					</div>
				</div>
				{appState.knowSoilTexture == "yes" ? (
					<div id="soil_texture" className="row">
						<div
							className="soil_texture atc_hide"
							onChange={(e) => soilTextureHandler(e)}
						>
							<label htmlFor="sandy_loam">Sandy Loam</label>
							<input
								type="radio"
								name="soil_texture"
								id="sl"
								value="sandyLoam"
							/>
							<label htmlFor="loam">Loam</label>
							<input
								type="radio"
								name="soil_texture"
								id="l"
								value="loam"
							/>
							<label htmlFor="clay_loam">Clay Loam</label>
							<input
								type="radio"
								name="soil_texture"
								id="cl"
								value="clayLoam"
							/>
						</div>
					</div>
				) : null}
			</div>
		</div>
	</div>
);

export default SoilTexture;
