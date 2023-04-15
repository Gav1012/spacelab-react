import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import PartyPopper from "../../assets/contactAssets/emojione_party-popper.png";
import "./newsletterSubscribe.scss";

/**
 * Renders Chip components
 * Receives tag prop which includes the tag string
 * @param tag string
 * @returns {JSX.Element}
 * @constructor
 */

export default function NewsletterSubscribe() {
	const [state, handleSubmit] = useForm("xoqzkgve");
	if (state.succeeded) {
		return (
			<div className={"submit-form-container"}>
				<h2>Thank You!</h2>
				<img
					src={PartyPopper}
					alt={"Hooray!"}
					width={"20%"}
					height={"20%"}
				/>
				<p>
					Your submission has been received! We'll be in touch with
					you shortly.
				</p>
			</div>
		);
	}

	return (
		<div className="newsletter-subscribe">
			<h2>Subscribe to our newsletter</h2>
			<p>
				Sign up to learn about the latest discoveries, news and more!
				Delivered weekly.
			</p>
			<form className="subscription-form" onSubmit={handleSubmit}>
				<input
					type="email"
					id="email"
					placeholder="EMAIL"
					name="email"
					required
				/>
				<ValidationError
					prefix="Email"
					field="email"
					errors={state.errors}
				/>
				<button type="submit" disabled={state.submitting}>
					Subscribe
				</button>
			</form>
		</div>
	);
}
