import Image from "next/image";
import Link from "next/link";
import soilIcon from "../public/img/soil-app.jpg";
import npkIcon from "../public/img/npk-app.jpg";
import { useUser } from "@auth0/nextjs-auth0";
import NotSignedIn from "../components/utils/NotSignedIn";

const Apps = () => {
	const { user } = useUser();

	const AppDetails = [
		{
			id: 1,
			name: "Soil Texture calculator",
			description: "Information about Soil Texture calculator app... etc",
			linkTo: "/soil-texture",
			icon: soilIcon,
		},
		{
			id: 2,
			name: "Fertiliser Recommendation calculator",
			description:
				"A handy tool to calclulate your fertilizers and their quatity according to the need",
			linkTo: "/first",
			icon: npkIcon,
		},
	];

	return (
		<>
			<section className="breadcrumbs">
				<div className="row">
					<div className="container">
						<div>
                            {user ? <span style={{ float: "right" }}>
								Welcome {`${user.nickname},`}
								<Link href="/api/auth/logout">
								<a style={{color: "white",marginLeft:'5px'}}>
									Logout
								</a>
								</Link>
							</span>
                            : null}
							
							<ol>
								<li>
									<Link href="index.html">
										<a >Home</a>
									</Link>
									
								</li>
								<li>Apps</li>
							</ol>
						</div>
						<h2 className="text-center">
							Our Applications to help you.{" "}
						</h2>
					</div>
					<div></div>
				</div>
			</section>
			<section id="blog" className="blog">
				<div className="container" data-aos="fade-up">
					<div className="row teams_row">
						{console.log(user)}
						{!user ? (
							<NotSignedIn />
						) : (
							AppDetails.map((eachApp) => (
								<div
									key={eachApp.id}
									className="row teams-single-item"
								>
									<Link href={eachApp.linkTo} passHref>
										<div className="member">
											<figure className="col-lg-5 col-sm-4">
												<Image
													src={eachApp.icon}
													width={400}
													height={400}
													alt="image of npk calculator app"
												/>
											</figure>
											<div className="featured-box-col2 delay-04s">
												<h3 className="member_name">
													{eachApp.name}
												</h3>
												<p>{eachApp.description}</p>
											</div>
										</div>
									</Link>
								</div>
							))
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Apps;
