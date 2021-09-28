import ContactForm from "../components/utils/ContactForm";
const Shop = () => {
	return (
		<>
			<section className="breadcrumbs">
				<div className="container">
					<ol>
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>Shop</li>
					</ol>
					<h2 className="text-center">Shop</h2>
				</div>
			</section>
			<section id="single_product" className="blog">
				<div className="container" data-aos="fade-up">
					<div className="row single_product_row">
						<div className="col-md-6">
							<div className="product_image">
								<img
									src="/img/Soil testing kit.jpg"
									alt="Soil Testing Kit"
								/>
							</div>
						</div>
						<div className="col-md-6 desc">
							<h3 className="product_name">Soil Testing Kit</h3>

							<div className="product_description">
								<p className="product_heading">
									<b>Contains</b>
								</p>
								<p className="desc_text">
									Each soil testing kit can be used to perform
									about 50 tests. We can test for parameters
									like N, P, K, pH, Organic matter. Each soil
									testing kit comes with
								</p>
								<ul className="descriptions_list">
									<li>Concerntrated sulphuric acid</li>
									<li>Distilled Water</li>
									<li>Filter Paper</li>
									<li>Towel</li>
									<li>Plastic Beaker</li>
									<li>Dropper</li>
									<li>Test Tube</li>
									<li>Handbook</li>
								</ul>
							</div>

							<p className="price">
								<b>Price:</b> Rs. 6,900
							</p>
							<p className="stock">
								<b>Stock:</b> Available (5 pcs)
							</p>
						</div>
					</div>
				</div>
                <ContactForm  formButtonName="Enquire"/>
			</section>
		</>
	);
};

export default Shop;