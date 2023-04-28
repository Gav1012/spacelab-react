import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import PartyPopper from "../../../assets/contactAssets/emojione_party-popper.png";
import "./newsletterSubscribe.scss";

/**
 * Renders Chip components
 * Receives tag prop which includes the tag string
 * @param tag string
 * @returns {JSX.Element}
 * @constructor
 */

export default function NewsletterSubscribe({ justifyContent = "left" }) {
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
			<div className="inner-wrap">
				<h2>Subscribe to our newsletter</h2>
				<p>
					Sign up to learn about the latest discoveries, news and
					more! Delivered weekly.
				</p>
				<form className="subscription-form" onSubmit={handleSubmit}>
					<div
						className={
							justifyContent === "center"
								? `inner-wrap-center`
								: "inner-wrap-left"
						}
					>
						<div
							className={
								justifyContent === "center"
									? `name-wrap-center`
									: "name-wrap-left"
							}
						>
							<input
								className="newsletter-subscribe-name-input"
								type="firstName"
								id="firstName"
								placeholder="FIRST NAME"
								name="firstName"
								required
							/>
							<input
								className="newsletter-subscribe-name-input"
								type="lastName"
								id="lastName"
								placeholder="LAST NAME"
								name="lastName"
								required
							/>
						</div>
						<input
							className="newsletter-subscribe-input"
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
						<button
							className="newsletter-subscribe-button"
							type="submit"
							disabled={state.submitting}
						>
							Subscribe
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
