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
			<section id="blog" className="blog">
				<div className="container" data-aos="fade-up">
					<div className="row">
						<div className="col-lg-8 entries">
							<article className="entry">
								<div className="entry-img">
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
										className="img-fluid"
									/>
								</div>

								<h2 className="entry-title">
									<a href="blog-single.html">{title}</a>
								</h2>

								<div className="entry-meta">
									<ul>
										<li className="d-flex align-items-center">
											<i className="icofont-user"></i>{" "}
											<a href="blog-single.html">ATC</a>
										</li>
										<li className="d-flex align-items-center">
											<i className="icofont-wall-clock"></i>{" "}
											<a href="blog-single.html">
												<time dateTime="2020-01-01">
													{/* Nov 10, 2020 */}
													{/* date.substring(0, 10) */}
												</time>
											</a>
										</li>
									</ul>
								</div>

								<div className="entry-content">
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
									<div className="read-more">
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
