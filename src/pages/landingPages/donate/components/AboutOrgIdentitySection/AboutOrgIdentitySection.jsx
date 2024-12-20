import { SPACELAB_ORG_INDENTITY } from "./data";
import "./aboutOrgIdentitySection.scss";

const AboutOrgIdentitySection = () => {
	return (
		<section id="about-org-identity-container">
			<div className="about-org-content">
				{SPACELAB_ORG_INDENTITY.map(({ title, description }) => (
					<div className="card-section" key={title}>
						<h4 className="donate-title">{title}</h4>
						<div className="about-mission-content">
							<p className="custom-text--large">{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default AboutOrgIdentitySection;
