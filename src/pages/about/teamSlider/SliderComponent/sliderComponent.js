import React from "react";
import MemberCard from "../memberCard/memberCard";
import PropTypes from "prop-types";
import './sliderComponent.scss';

/**
 * Builds slider component. Passes data to MemberCard component and renders what is returned.
 * @param title
 * @param members
 * @param active
 * @returns {JSX.Element}
 * @constructor
 */
const SliderComponent = ({title, members, active}) => {

	return (
		<div className={`team-slider-container ${active}`}>
			{members.map((member) => (
				<MemberCard key={`${title}-${member.fullName}`} member={member}/>
			))}
		</div>
	);
};

SliderComponent.propTypes = {
	/**
	 * Title of the slider group. ex: Team Leads, etc.
	 */
	title: PropTypes.string,
	/**
	 * Array containing information to be populated in the slider.
	 * members: [{image: (string), fullName: (string), title: (string)}]
	 */
	members: PropTypes.array,
};

SliderComponent.defaultProps = {
	title: null,
	members: null,
};

export default SliderComponent;
