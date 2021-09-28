import Link from 'next/link';
import { useState } from "react";
import Dibyalaxmi from "./TeamsTab/Dibyalaxmi";
import Prashant from "./TeamsTab/Prashant";
import Shiva from "./TeamsTab/Shiva";
import Pragati from "./TeamsTab/Pragati";

function Teams() {
	const [activeTab, setActiveTab] = useState("soil_science");

	const handleTabClick = (e) => {
		e.preventDefault();
		/* console.log(e.currentTarget.innerHTML); */
		if (e.currentTarget.innerHTML.includes("Agroecologist.")) setActiveTab("agroeco");
		if (e.currentTarget.innerHTML.includes("Soil Scientist."))
			setActiveTab("soil_science");
		if (e.currentTarget.innerHTML.includes("Plant Scientist."))
			setActiveTab("plant_science");
		if (e.currentTarget.innerHTML.includes("Agricultural Professional."))
			setActiveTab("agri_pro");
	};

	return (
		<section id="team" className="tabs">
			<div className="container" data-aos="fade-up">
				<ul className="nav nav-tabs row d-flex">
					<li
						className="nav-item col-3"
						onClick={(e) => handleTabClick(e)}
					>
						<a
							className={`nav-link show ${
								activeTab === "soil_science" ? "active" : ""
							}`}
							data-toggle="tab"
							href="#tab-1"
						>
							<i className="ri-body-scan-line"></i>
							<h4 className="d-none d-lg-block">
								Soil Scientist.
							</h4>
						</a>
					</li>
					<li
						className="nav-item col-3"
						onClick={(e) => handleTabClick(e)}
					>
						<a
							className={`nav-link show ${
								activeTab === "agroeco" ? "active" : ""
							}`}
							data-toggle="tab"
							href="#tab-2"
						>
							<i className="ri-body-scan-line"></i>
							<h4 className="d-none d-lg-block">
								Agroecologist.
							</h4>
						</a>
					</li>
					<li
						className="nav-item col-3"
						onClick={(e) => handleTabClick(e)}
					>
						<a
							className={`nav-link show ${
								activeTab === "plant_science" ? "active" : ""
							}`}
							data-toggle="tab"
							href="#tab-3"
						>
							<i className="ri-body-scan-line"></i>
							<h4 className="d-none d-lg-block">
								Plant Scientist.
							</h4>
						</a>
					</li>
					<li
						className="nav-item col-3"
						onClick={(e) => handleTabClick(e)}
					>
						<a
							className={`nav-link show ${
								activeTab === "agri_pro" ? "active" : ""
							}`}
							data-toggle="tab"
							href="#tab-4"
						>
							<i className="ri-body-scan-line"></i>
							<h4 className="d-none d-lg-block">
								Agricultural Professional.
							</h4>
						</a>
					</li>
				</ul>

				<div className="tab-content">
					<div className="tab-pane active show" id="tab-1">
						<div className="row">
							{activeTab == "soil_science" ? Dibyalaxmi() : null}
							{activeTab == "agroeco" ? Prashant() : null}
							{activeTab == "plant_science" ? Shiva() : null}
							{activeTab == "agri_pro" ? Pragati() : null}
						</div>
					</div>
					
				</div>
			</div>

			<div className="container view_more_team">
				<Link href="/team" className="view_more">
					<a>
						<button className="btn other-members-btn">
							Other Members
						</button>
					</a>
				</Link>
			</div>
		</section>
	);
}

export default Teams;
