import classes from "./MainNavigation.module.css";
import Link from "next/link";
import Image from 'next/image';
import Logo from '../../public/img/atc_logo.png';

function MainNavigation() {
	return (
		<header className={`${classes.header}`}>
			<div className="container-fluid">
				<div className="row justify-content-center">
					<div className="col-xl-10 d-flex align-items-center">
						<h1 className={`${classes.logo} mr-auto`}>
							<Link href="/">
								<a className={`${classes.logo} mr-auto`}>
                                    <div className="img_logo">
                                        <Image
                                            src={Logo}
                                            alt="atc_logo"
                                        />
                                    </div>
                                    <span>
                                        Agriculture <br />
                                        Technology Center.
                                    </span>
                                </a>
							</Link>
						</h1>

						<nav className={`${classes.nav_menu} d-none d-lg-block`}>
							<ul>
								<li className="active">
									<Link href="/">Home</Link>
								</li>
								<li>
									<Link href="/team">Team</Link>
								</li>
								<li>
									<Link href="/clients">Clients</Link>
								</li>
								<li>
									<Link href="/blog">Blog</Link>
								</li>
								<li className={`${classes.drop_down}`}>
									<Link href="/shop">Shop</Link>
									<ul>
										<li>
											{/* <Link href="/product_page"> */}
											<Link href="/shop">
												Soil Testing Kit
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link href="/contact">Contact</Link>
								</li>
							</ul>
						</nav>
                        <Link href="/apps">
                            <a className={`${classes.getStartedBtn} scrollto`}>
                                Apps
                            </a>
                        </Link>
					</div>
				</div>
			</div>
		</header>
	);
}

export default MainNavigation;
