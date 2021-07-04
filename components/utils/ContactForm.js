import { useState } from "react";
import { useRouter } from "next/router";

export default function ContactForm({ formButtonName }) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);

	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		//console.log("sending");

		let data = {
			name,
			email,
			phone,
			message,
		};

		if (router.pathname.includes("/shop")) {
			let newData = data;
			data = { ...newData, orderedItem: "Soil Testing Kit" };
		}
		//console.log(data);

		fetch("/api/contact", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => {
			if (res.status === 200) {
				console.log("Response received");
				setSubmitted(true);
				setName("");
				setEmail("");
				setPhone("");
				setMessage("");
			}
		});
	};

	return (
		<div class="contact-row contact">
			<div class="col-lg-8">
				<form class="php-email-form">
					<div class="form-row">
						<div class="col form-group">
							<input
								type="text"
								name="name"
								class="form-control"
								id="name"
								placeholder="Your Name"
								data-rule="minlen:4"
								data-msg="Please enter at least 4 chars"
                                value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<div class="validate"></div>
						</div>
						<div class="col form-group">
							<input
								type="email"
								class="form-control"
								name="email"
								id="email"
								placeholder="Your Email"
								data-rule="email"
								data-msg="Please enter a valid email"
                                value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div class="validate"></div>
						</div>
					</div>
					<div class="form-group">
						<input
							type="text"
							class="form-control"
							name="phone"
							id="phone"
							placeholder="Phone No"
							data-rule="minlen:4"
							data-msg="Please enter your mobile number"
                            value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<div class="validate"></div>
					</div>
					<div class="form-group">
						<textarea
							class="form-control"
							name="message"
							rows="5"
							data-rule="required"
							data-msg="Please write something for us"
							placeholder="Message"
                            value={message}
							onChange={(e) => setMessage(e.target.value)}
						></textarea>
						<div class="validate"></div>
					</div>
					<div class="mb-3">
						<div class="loading">Loading</div>
						<div class="error-message"></div>
						<div class="sent-message">
							Your message has been sent. Thank you!
						</div>
					</div>
					<div class="text-center atc_button">
						<button type="submit" onClick={(e) => handleSubmit(e)}>
							{formButtonName}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
