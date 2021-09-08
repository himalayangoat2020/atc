import styles from "./first.module.css";
import Location from "../components/fertiliser_recomendation/Location";
import TestingSpot from "../components/fertiliser_recomendation/TestingSpot";
import SoilTexture from "../components/fertiliser_recomendation/SoilTexture";
import PHSelector from "../components/fertiliser_recomendation/PHSelector";
import ChooseCrop from "../components/fertiliser_recomendation/ChooseCrop";
import CalculateComponent from "../components/fertiliser_recomendation/CalculateComponent";
import { useState } from "react";
import { Produces } from "../atc_data/produces";
import { pHValueTable } from "../atc_data/phTable";

import { withPageAuthRequired } from '@auth0/nextjs-auth0'

function First() {
	const [appState, setAppState] = useState({});
	const [currentStep, setCurrentStep] = useState(1);

	const onLocationClick = (e, value) => {
		let newState = { ...appState };
		setAppState({
			...newState,
			location: value,
		});
	};

	const onSpotClicked = (e, value) => {
		let newState = { ...appState };
		setAppState({
			...newState,
			testedOn: value,
		});
	};

	const getSiteResults = (e) => {
		let newState = appState;
		const target = e.target;
		setAppState({
			...newState,
			[target.name]: target.value,
		});
	};

	const getLabResults = (e) => {
		let newState = appState;
		const target = e.target;
		const name = target.name;
		const value = target.value;
		if (name == "nitrogen") {
			value <= 0.1
				? setAppState({ ...newState, [name]: "low" })
				: value > 0.1 && value <= 0.3
				? setAppState({ ...newState, [name]: "medium" })
				: setAppState({ ...newState, [name]: "high" });
		}
		if (name == "potassium") {
			value <= 110
				? setAppState({ ...newState, [name]: "low" })
				: value > 110 && value <= 280
				? setAppState({ ...newState, [name]: "medium" })
				: setAppState({ ...newState, [name]: "high" });
		}
		if (name == "phosphorus") {
			value <= 31
				? setAppState({ ...newState, [name]: "low" })
				: value > 31 && value <= 55
				? setAppState({ ...newState, [name]: "medium" })
				: setAppState({ ...newState, [name]: "high" });
		}
	};

	const soilTextureHandler = (e) => {
		let newState = appState;
		const target = e.target;
		if (target.type == "button") {
			setAppState({
				...newState,
				knowSoilTexture: target.getAttribute("class"),
			});
		}
		if (target.type == "radio") {
			setAppState({
				...newState,
				[target.name]: target.value,
			});
		}
	};

	const selectPhHandler = (e) => {
		let newState = appState;
		const target = e.target;
		setAppState({
			...newState,
			[target.name]: target.value,
		});
	};

	const chooseCropHandler = (e) => {
		let newState = appState;
		const target = e.target;
		setAppState({
			...newState,
			[target.name]: target.value,
		});
	};

	const calculationHandler = (e) => {
		let newState = appState;
		console.log(newState);

		let calculatingProduceOf = Produces.find(
			(produce) => produce.name === newState.crops
		);

		let calculatingAgLimeOf = pHValueTable.find(
			(phObj) => phObj.pHValue == newState.ph_value
		);
		console.log(calculatingAgLimeOf);
		let DAP;
		let potash;
		let urea;
		let agLime;
		switch (newState.phosphorus) {
			case "high":
				DAP = 2.17 * calculatingProduceOf.highPhosphorus;
				break;
			case "medium":
				DAP = 2.17 * calculatingProduceOf.mediumPhosphorus;
				break;
			default:
				DAP = 2.17 * calculatingProduceOf.lowPhosphorus;
				break;
		}

		switch (newState.nitrogen) {
			case "high":
				urea = 2.17 * calculatingProduceOf.highNitrogen - 0.39 * DAP;
				break;
			case "medium":
				urea = 2.17 * calculatingProduceOf.mediumNitrogen - 0.39 * DAP;
				break;
			default:
				urea = 2.17 * calculatingProduceOf.lowNitrogen - 0.39 * DAP;
				break;
		}

		switch (newState.potassium) {
			case "high":
				potash = 1.67 * calculatingProduceOf.highPotassium;
				break;
			case "medium":
				potash = 1.67 * calculatingProduceOf.mediumPotassium;
				break;
			default:
				potash = 1.67 * calculatingProduceOf.lowPotassium;
				break;
		}

		if (newState.knowSoilTexture == "yes") {
			switch (newState.location) {
				case "pahad":
					switch (newState.soil_texture) {
						case "sandyLoam":
							agLime = calculatingAgLimeOf.hill_sandyLoam;
							break;
						case "loam":
							agLime = calculatingAgLimeOf.hill_loam;
							break;
						case "clayLoam":
							agLime = calculatingAgLimeOf.hill_clayLoam;
							break;
					}
					break;
				case "terai":
					switch (newState.soil_texture) {
						case "sandyLoam":
							agLime = calculatingAgLimeOf.terai_sandyLoam;
							break;
						case "loam":
							agLime = calculatingAgLimeOf.terai_loam;
							break;
						case "clayLoam":
							agLime = calculatingAgLimeOf.terai_clayLoam;
							break;
					}
					break;
			}
		}
		console.log(DAP);
		console.log(urea);
		console.log(potash);
		console.log(agLime);
		setAppState({
			...newState,
			DAP: DAP,
			urea: urea,
			potash: potash,
			agLime: agLime,
		});
	};

	const renderStepsForm = () => {
		switch (currentStep) {
			case 1:
				return <Location onLocationClick={onLocationClick} />;
			case 2:
				return (
					<TestingSpot
						onSpotClicked={onSpotClicked}
						appState={appState}
						getLabResults={getLabResults}
						getSiteResults={getSiteResults}
					/>
				);
			case 3:
				return (
					<SoilTexture
						soilTextureHandler={soilTextureHandler}
						appState={appState}
					/>
				);
			case 4:
				return <PHSelector selectPhHandler={selectPhHandler} />;
			case 5:
				return <ChooseCrop chooseCropHandler={chooseCropHandler} />;
			case 6:
				return (
					<CalculateComponent
						calculationHandler={calculationHandler}
						appState={appState}
					/>
				);
			default:
				break;
		}
	};

	const next = () => {
		if (currentStep != 6) {
			setCurrentStep(currentStep + 1);
		}
	};
	const back = () => {
		if (currentStep != 1) {
			setCurrentStep(currentStep - 1);
		}
	};
	const resetForm = () => {
		setAppState({});
		setCurrentStep(1);
	}

	return (
		<>
			<section className={styles.atc_info}>
				{renderStepsForm()}
				{/* <Location onLocationClick={onLocationClick} />
				
				<TestingSpot onSpotClicked={onSpotClicked} />
				{appState.testedOn == "lab" ? (
					<SpotLab onInputChanged={getLabResults} />
				) : appState.testedOn == "site" ? (
					<SpotSite onOptionsSelected={getSiteResults} />
				) : null}

				<SoilTexture soilTextureHandler={soilTextureHandler} />
				<PHSelector selectPhHandler={selectPhHandler} />
				<ChooseCrop chooseCropHandler={chooseCropHandler} />
				<CalculateComponent calculationHandler={calculationHandler} /> */}
				<div class={`atc_button ${styles.next_prev_btn}`}>
					<button
						onClick={back}
						className={`primary ${
							currentStep == 1 ? styles.atc_hide : ""
						}`}
					>
						Previous
					</button>

					<button
						onClick={next}
						className={`primary ${
							currentStep == 6 ? styles.atc_hide : ""
						}`}
					>
						Next
					</button>
					<button
						type="reset"
						onClick={resetForm}
						className={`primary ${
							currentStep != 6 ? styles.atc_hide : ""
						}`}
					>
						Reset
					</button>
				</div>
			</section>
			{/* <div className="floating_card">
				Here is a list of values
			</div> */}
		</>
	);
}

export default First;

export const getServerSideProps = withPageAuthRequired({
	returnTo: '/first'
})