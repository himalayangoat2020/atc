import ContactForm from "../components/utils/ContactForm";
const Shop = () => {
	return (
		<>
			<section class="breadcrumbs">
				<div class="container">
					<ol>
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>Shop</li>
					</ol>
					<h2 class="text-center">Shop</h2>
				</div>
			</section>
			<section id="single_product" class="blog">
				<div class="container" data-aos="fade-up">
					<div class="row single_product_row">
						<div class="col-md-6">
							<div class="product_image">
								<img
									src="/img/Soil testing kit.jpg"
									alt="Soil Testing Kit"
								/>
							</div>
						</div>
						<div class="col-md-6 desc">
							<h3 class="product_name">Soil Testing Kit</h3>

							<div class="product_description">
								<p class="product_heading">
									<b>Contains</b>
								</p>
								<p class="desc_text">
									Each soil testing kit can be used to perform
									about 50 tests. We can test for parameters
									like N, P, K, pH, Organic matter. Each soil
									testing kit comes with
								</p>
								<ul class="descriptions_list">
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

							<p class="price">
								<b>Price:</b> Rs. 6,900
							</p>
							<p class="stock">
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