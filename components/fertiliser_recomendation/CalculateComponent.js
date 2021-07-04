const CalculateComponent = ({ calculationHandler, appState }) => (
	<div className="row">
		<div className="col-md-8">
			<div className="info-box">
				<i className="bx bxs-eject"></i>
				<div className="text-center atc_button">
					<button
						className="primary calculate_result"
						onClick={(e) => calculationHandler(e)}
					>
						Calculate Data
					</button>
				</div>
				{Object.keys(appState).indexOf("urea") > -1 ? (
					<div className="resultsection atc_hide">
						<div className="result-label">
							<div className="aglime">AgLime:</div>
							<div className="result">
								{appState.knowSoilTexture == "yes"
									? `${appState.agLime} (kg/ropani)` 
									: "Since no soil texture we are unable to calculate"}
							</div>
						</div>
						<div className="result-label">
							<div className="urea">Urea: </div>
							<div className="result">{`${Math.round(appState.urea/0.5)*0.5} (kg/ropani)`}</div>
						</div>
						<div className="result-label">
							<div className="dap">D.A.P: </div>
							<div className="result">{`${Math.round(appState.DAP/0.5)*0.5} (kg/ropani)`}</div>
						</div>
						<div className="result-label">
							<div className="potash">Potash:</div>
							<div className="result">{`${Math.round(appState.potash/0.5)*0.5} (kg/ropani)`}</div>
						</div>
					</div>
				) : null}
			</div>
		</div>
	</div>
);

export default CalculateComponent;
