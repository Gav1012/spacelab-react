import React from "react";
import HeroImage from "../../components/heroImage/heroImage";
import ProjectsIntro from "./projectsIntro";
import UnderConstruction from "../../components/underConstructionNotification/underConstruction";
import Footer from "../../components/footer/footer";
import "./projects.scss";

/**
 * Renders Projects Page
 * @returns {JSX.Element}
 * @constructor
 */
export default function Projects() {
	return (
		<>
			<HeroImage heroTitle="PROJECTS" />
			<ProjectsIntro />
			<UnderConstruction />
			<Footer />
		</>
	);
}
