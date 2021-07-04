import { useState } from "react";
import ContactForm from "../components/utils/ContactForm";

export default function Contact() {
	
	return (
		<div
			className="row"
			style={{ justifyContent: "center", marginTop: "100px" }}
		>
			<div className="container">
				<ContactForm formButtonName="Send Message"/>
			</div>
		</div>
	);
}
