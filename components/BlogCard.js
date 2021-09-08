import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }) => {
	const {
		title,
		slug,
		featuredImage,
		featuredImage: {
			fields: {
				file: { url },
			},
		},
	} = blog.fields;

	return (
		<>
		{console.log(slug)}
			<section id="blog" class="blog">
				<div class="container" data-aos="fade-up">
					<div class="row">
						<div class="col-lg-8 entries">
							<article class="entry">
								<div class="entry-img">
									<Image
										src={`https:${url}`}
										width={
											featuredImage.fields.file.details
												.image.width
										}
										height={
											featuredImage.fields.file.details
												.image.height
										}
										alt=""
										class="img-fluid"
									/>
								</div>

								<h2 class="entry-title">
									<a href="blog-single.html">{title}</a>
								</h2>

								<div class="entry-meta">
									<ul>
										<li class="d-flex align-items-center">
											<i class="icofont-user"></i>{" "}
											<a href="blog-single.html">ATC</a>
										</li>
										<li class="d-flex align-items-center">
											<i class="icofont-wall-clock"></i>{" "}
											<a href="blog-single.html">
												<time dateTime="2020-01-01">
													{/* Nov 10, 2020 */}
													{/* date.substring(0, 10) */}
												</time>
											</a>
										</li>
									</ul>
								</div>

								<div class="entry-content">
									<p>
										This is a definitive guide put together
										by our friends here at ATC. This guide
										contains some basic thinngs to keep in
										mind while taking a soil sample. For the
										ease of reading and sharing this
										knowledge with more general people, we
										have developed this guide in Nepali
										language..
									</p>
									<div class="read-more">
										<Link href={"/blog/" + slug}>
											Read More
										</Link>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogCard;
