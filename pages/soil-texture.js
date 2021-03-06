/* reference for further devvelopment https://www.had2know.com/garden/classify-soil-texture-triangle-chart.html */
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { useUser } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

const SoilTexture = () => {
    const { user } = useUser();

    const sandRef = useRef();
    const clayRef = useRef();
    const siltRef = useRef();
    const textureRef = useRef();

    const savePDF = (e) => {
        e.preventDefault();
        const divToDisplay = document.getElementById("soil-calc-form");
        //console.log(divToDisplay);
        //, {scrollY: -window.scrollY} makes the whole page visible
        html2canvas(divToDisplay, {
            scrollY: -window.scrollY,
            backgroundColor: null,
        }).then((canvas) => {
            const divImage = canvas.toDataURL("image/png");
            console.log(divImage);
            const pdf = new jsPDF();
            pdf.addImage(divImage, "PNG", 0, 0);
            pdf.save("soilTexture.pdf");
        });
    };

    const resultHandler = (e) => {
        e.preventDefault();
        let sandValue = sandRef.current.value;
        let clayValue = clayRef.current.value;
        console.log(sandRef.current.value, clayRef);

        if (sandValue == "" || isNaN(parseFloat(sandValue))) {
            alert("You must insert a number for Percent Sand");
            sandValue = "";
            return false;
        } else if (clayValue == "" || isNaN(parseFloat(clayValue))) {
            alert("You must insert a number for Percent Clay");
            clayValue = "";
            return false;
        } else if (parseFloat(sandValue) + parseFloat(clayValue) > 100) {
            alert(
                "The total of Percent Sand and Percent Clay must be less than or equal to 100"
            );
            return false;
        } else {
            sandValue = parseFloat(sandValue);
            clayValue = parseFloat(clayValue);
            //set silt value
            let silt = 100 - parseFloat(sandValue) - parseFloat(clayValue);
            siltRef.current.value = silt;
            getTexture(sandValue, clayValue, silt);

            drawPoint(sandValue, clayValue);
        }
    };

    function getTexture(sand, clay, silt) {
        sand = parseFloat(sand);
        clay = parseFloat(clay);
        silt = parseFloat(silt);

        if (clay >= 7 && clay < 27 && silt >= 28 && silt < 50 && sand <= 52) {
            textureRef.current.value = "Loam";
        } else if (
            (silt >= 50 && clay >= 12 && clay < 27) ||
            (silt >= 50 && silt < 80 && clay < 12)
        ) {
            textureRef.current.value = "Silt Loam";
        } else if (silt >= 80 && clay < 12) {
            textureRef.current.value = "Silt";
        } else if (clay >= 20 && clay < 35 && silt < 28 && sand > 45) {
            textureRef.current.value = "Sandy Clay Loam";
        } else if (clay >= 27 && clay < 40 && sand > 20 && sand <= 45) {
            textureRef.current.value = "Clay Loam";
        } else if (clay >= 27 && clay < 40 && sand <= 20) {
            textureRef.current.value = "Silty Clay Loam";
        } else if (clay >= 35 && sand > 45) {
            textureRef.current.value = "Sandy Clay";
        } else if (clay >= 40 && silt >= 40) {
            textureRef.current.value = "Silty Clay";
        } else if (clay >= 40 && sand <= 45 && silt < 40) {
            textureRef.current.value = "Clay";
        } else {
            textureRef.current.value = "Undefined";
        }
    }

    const drawPoint = (sand, clay) => {
        let canvas = new jsGraphics("myCanvas");
        canvas.clear();
        canvas.setColor("red");
        var xOff = 570;
        var yOff = 482;
        var yCoord = parseInt(yOff) - 477 * parseFloat(clay) * 0.01;
        var xCoord =
            parseInt(xOff) -
            557 * parseFloat(sand) * 0.01 -
            0.5 * parseFloat(clay) * 555 * 0.01;
        canvas.fillEllipse(xCoord, yCoord, 10, 10);
        canvas.paint();
    };

    return (
        <>
            <section className="breadcrumbs">
                <div className="container">
                    {user ? (
                        <span style={{ float: "right" }}>
                            Welcome {`${user.nickname},`}
                            <Link href="/api/auth/logout">
                                <a
                                    style={{
                                        color: "white",
                                        marginLeft: "5px",
                                    }}
                                >
                                    Logout
                                </a>
                            </Link>
                        </span>
                    ) : null}
                    <ol>
                        <li>
                            <Link href="index.html">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>Soil Calculator</li>
                    </ol>
                    <h2 className="text-center">Soil Calculator</h2>
                </div>
            </section>
            <section id="blog" className="blog">
                <div className="container" data-aos="fade-up">
                    <div className="row calculator">
                        <div
                            id="soil-calc-form"
                            className="col-lg-8 soil-calc-form"
                        >
                            <div className="form-wrapper">
                                <h4>Soil Texture Calculator</h4>
                                <form action="" name="info">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="sand">
                                                Percentage of Sand
                                            </label>
                                            <input
                                                name="sand"
                                                type="text"
                                                className="form-control"
                                                placeholder="0"
                                                ref={sandRef}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="clay">
                                                Percentage of Clay
                                            </label>
                                            <input
                                                name="clay"
                                                type="text"
                                                className="form-control"
                                                placeholder="0"
                                                ref={clayRef}
                                            />
                                        </div>
                                    </div>

                                    <div className="button-results">
                                        <button
                                            type="submit"
                                            id="get_result"
                                            className="btn btn-primary"
                                            onClick={(e) => resultHandler(e)}
                                        >
                                            Get Texture
                                        </button>
                                    </div>
                                    <div className="row result-row">
                                        <div className="heading">
                                            <h3>Results</h3>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="silt">
                                                Percentage of Silt
                                            </label>
                                            <input
                                                name="silt"
                                                type="text"
                                                className="form-control"
                                                placeholder="0"
                                                ref={siltRef}
                                            />
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="texture">
                                                Texture
                                            </label>
                                            <input
                                                name="texture"
                                                type="text"
                                                className="form-control"
                                                placeholder="N/A"
                                                ref={textureRef}
                                            />
                                        </div>
                                    </div>
                                </form>
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div
                                            id="myCanvas"
                                            style={{
                                                width: "600px",
                                                height: "536px",
                                                position: "relative",
                                            }}
                                        >
                                            <Image
                                                height={536}
                                                name="triangle"
                                                src="/img/atc_soil_triangle.jpg"
                                                width={600}
                                                title=""
                                            />
                                        </div>
                                    </div>
                                    <p className="note">
                                        Please try desktop view for accurate
                                        results*
                                    </p>
                                </div>
                                <button
                                    className="savePdf btn btn-primary"
                                    onClick={(e) => savePDF(e)}
                                >
                                    Download as PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Script type="text/javascript" src="/wz_jsgraphics.js"></Script>
        </>
    );
};

export default SoilTexture;

export const getServerSideProps = withPageAuthRequired({
    returnTo: "/soil-texture",
});
