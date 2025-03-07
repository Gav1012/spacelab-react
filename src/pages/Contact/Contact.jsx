import React from "react";
import "./contact.scss";
import HeroImage from "../../components/HeroImage/HeroImage";
import Navigation from "../../components/navigation/MainNavigation/MainNavigation";
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
			<Navigation></Navigation>
			<h1>Contact</h1>
			<ContactForm />
			<Footer />
		</div>
	);
}
