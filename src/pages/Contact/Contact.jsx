import React from "react";
import "./contact.scss";
import HeroImage from "../../components/HeroImage/HeroImage";
import ContactForm from "../../components/formComponents/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

/**
 * Renders Contact form page with hero image, nav, and footer
 * @returns {JSX.Element}
 * @constructor
 */
export default function Contact() {
	return (
		<div id="contact">
			<HeroImage heroTitle="CONTACT" />
			<ContactForm />
			<Footer />
		</div>
	);
}
