const Clients = () => {
	const images = [
        {
            url:"Aadhunik poultry feed.jpg",
            altName:"Aadhunik poultry feed"
        },
        {
            url:"ADMC.jpg",
            altName:"ADMC"
        },
        {
            url:"Gorkha herbal farm.png",
            altName:"Gorkha herbal farm"
        },{
            url:"Agromart.jpg",
            altName:"Agromart"
        },{
            url:"ASCOL.png",
            altName:"ASCOL"
        },{
            url:"BTC.jpg",
            altName:"BTC"
        },{
            url:"CEAPRED.png",
            altName:"CEAPRED"
        },{
            url:"CIMMYT.PNG",
            altName:"CIMMYT"
        },{
            url:"DCCUL.jpg",
            altName:"DCCUL"
        },{
            url:"GHAM power.png",
            altName:"GHAM power"
        },{
            url:"GON.gif",
            altName:"GON"
        },{
            url:"AFU.png",
            altName:"AFU"
        },{
            url:"ICIMOD.PNG",
            altName:"ICIMOD"
        },{
            url:"Kalpabriksha.png",
            altName:"Kalpabriksha"
        },{
            url:"Kathmandu mahanagarpalika.jpg",
            altName:"Kathmandu mahanagarpalika"
        },{
            url:"KDCSS.jpg",
            altName:"KDCSS"
        },{
            url:"kirdarc.jpg",
            altName:"kirdarc"
        },{
            url:"KU.png",
            altName:"KU"
        },
        {
            url:"Lalitpur metropolitan.png",
            altName:"Lalitpur metropolitan"
        },{
            url:"lougou.png",
            altName:"lougou"
        },{
            url:"Love Green Nepal.PNG",
            altName:"Love Green Nepal"
        },{
            url:"MOSES.jpg",
            altName:"MOSES"
        },{
            url:"NACCFL.png",
            altName:"NACCFL"
        },{
            url:"NARC.png",
            altName:"NARC"
        },{
            url:"National consult.png",
            altName:"National consult"
        },{
            url:"PEES.png",
            altName:"PEES"
        },{
            url:"Practical.PNG",
            altName:"Practical"
        },{
            url:"SEED.png",
            altName:"SEED"
        },{
            url:"SIDC.png",
            altName:"SIDC"
        },{
            url:"WEG.jpg",
            altName:"WEG"
        }
    ];

	return (
		<>
			<section class="breadcrumbs">
				<div class="container">
					<ol>
						<li>
							<a href="index.html">Home</a>
						</li>
						<li>clients</li>
					</ol>
					<h2 class="text-center">Clients we have worked with</h2>
				</div>
			</section>
			<section id="blog" class="blog">
				<div class="container" data-aos="fade-up">
					<div class="row clients_row">
						{
                            images.map((image,index) => (
                                <div class="col-md-3 col-sm-3">
                                    <div class="clients_logo">
                                        <img
                                            src={`/img/clients/${image.url}`}
                                            alt={image.altName}
                                        />
                                    </div>
                                </div>
                            ))
                        }
					</div>
				</div>
			</section>
		</>
	);
};

export default Clients;
