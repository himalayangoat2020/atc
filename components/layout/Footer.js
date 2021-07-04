const Footer = () => (
	<footer id="footer">
		<div className="footer-top">
			<div className="container">
				<div className="row">
					<div className="col-lg-3 col-md-6 footer-contact">
						<h3>
							Agricultural Technology Center<span>.</span>
						</h3>
						<p>
							Jwagal
							<br />
							Lane-2, Lalitpur
							<br />
							Nepal <br />
							<br />
							<strong>Phone:</strong> 01 5525956
							<br />
							<strong>Email:</strong> info@agritechcenter.com.np
							<br />
						</p>
					</div>

					<div className="col-lg-2 col-md-6 footer-links">
						<h4>Useful Links</h4>
						<ul>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">Home</a>
							</li>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">About us</a>
							</li>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">Services</a>
							</li>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">Terms of service</a>
							</li>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">Privacy policy</a>
							</li>
						</ul>
					</div>

					<div className="col-lg-3 col-md-6 footer-links">
						<h4>Our Services</h4>
						<ul>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">Laboratory</a>
							</li>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">ACT Consulting</a>
							</li>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">Research</a>
							</li>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">Trainings</a>
							</li>
							<li>
								<i className="bx bx-chevron-right"></i>{" "}
								<a href="#">Soil Testing Kit</a>
							</li>
						</ul>
					</div>

					<div className="col-lg-4 col-md-6 footer-newsletter">
						<h4>Join Our Newsletter</h4>
						<p>Subscribe to our newsletter.</p>
						<form action="" method="post">
							<input type="email" name="email" />
							<input type="submit" value="Subscribe" />
						</form>
					</div>
				</div>
			</div>
		</div>

		<div className="container d-md-flex py-4">
			<div className="mr-md-auto text-center text-md-left">
				<div className="copyright">
					&copy; Copyright{" "}
					<strong>
						<span>Agricultural Technology Center (ATC)</span>
					</strong>
					. All Rights Reserved
				</div>
				<div className="credits">
					Designed by{" "}
					<a href="/thgaf.com">The Himalayan Goat</a>
				</div>
			</div>
			<div className="social-links text-center text-md-right pt-3 pt-md-0">
				{/* <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a> */}
				<a href="https://www.facebook.com/atc.soil/" className="facebook">
					<i className="bx bxl-facebook"></i>
				</a>
			</div>
		</div>
	</footer>
);

export default Footer;
