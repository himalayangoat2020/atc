import Image from "next/image";

const Gallery = () => (
    <>
        <section id="portfolio" className="portfolio">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>GALLERY</h2>
                    <p>Come join in our family.</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="portfolio-flters">
                            <li data-filter="*" className="filter-active">
                                All
                            </li>
                            <li data-filter=".filter-Office">Office</li>
                            <li data-filter=".filter-Trainings">Trainings</li>
                            <li data-filter=".filter-Teams">Teams</li>
                        </ul>
                    </div>
                </div>

                <div
                    className="row portfolio-container"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <div className="col-lg-4 col-md-6 portfolio-item filter-Office">
                        <div className="portfolio-wrap">
                            <Image
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src="/img/gallery/portfolio-1.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-Teams">
                        <div className="portfolio-wrap">
                            <Image
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src="/img/gallery/portfolio-2.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-Office">
                        <div className="portfolio-wrap">
                            <Image
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src="/img/gallery/portfolio-3.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-Trainings">
                        <div className="portfolio-wrap">
                            <Image
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src="/img/gallery/portfolio-4.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-Teams">
                        <div className="portfolio-wrap">
                            <Image
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src="/img/gallery/portfolio-5.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-Office">
                        <div className="portfolio-wrap">
                            <Image
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src="/img/gallery/portfolio-6.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-Trainings">
                        <div className="portfolio-wrap">
                            <Image
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src="/img/gallery/portfolio-7.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-Trainings">
                        <div className="portfolio-wrap">
                            <Image
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src="/img/gallery/portfolio-8.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 portfolio-item filter-Teams">
                        <div className="portfolio-wrap">
                            <Image
                                width="100%"
                                height="100%"
                                layout="responsive"
                                objectFit="contain"
                                src="/img/gallery/portfolio-9.jpg"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Gallery;
