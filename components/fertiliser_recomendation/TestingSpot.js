import SpotLab from "./SpotLab";
import SpotSite from "./SpotSite";

const TestingSpot = ({ onSpotClicked,appState, getLabResults, getSiteResults }) => (
	<>
		<div className="row">
			<div className="col-md-8">
				<div className="info-box">
					<i className="bx bx-map"></i>
					<h3>Testing Spot</h3>
					<div id="soil_testing" className="row">
						<div className="text-center atc_button lab">
							<button
								className="tested lab"
								onClick={(e) => onSpotClicked(e, "lab")}
							>
								Lab
							</button>
						</div>
						<div className="text-center atc_button farm">
							<button
								className="tested farm"
								onClick={(e) => onSpotClicked(e, "site")}
							>
								On Site
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		{appState.testedOn == "lab" ? (
			<SpotLab onInputChanged={getLabResults} />
		) : appState.testedOn == "site" ? (
			<SpotSite onOptionsSelected={getSiteResults} />
		) : null}
	</>
);

export default TestingSpot;
