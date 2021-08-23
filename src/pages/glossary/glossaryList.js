import React, {useContext} from "react";
import GlossaryListItem from "./glossaryListItem";
import {UniversalContext} from "../../App";
import {returnFilteredTerms} from "./glossaryhelper";
import './glossary.css';

export default function GlossaryList() {
	const context = useContext(UniversalContext);
	let glossaryArray = [];

	if (context.glossaryTerms !== undefined) {
		glossaryArray = context.glossaryTerms;
	}

	// Updates the css color for the currently selected filter, and returns all other filters to white.
	const highlightCurrentFilter = (currentSelection) => {
		const alphabetFilters = document.querySelectorAll(".glossary-filter-button");
		alphabetFilters.forEach(alphabetFilter => {
			alphabetFilter.id === currentSelection
				? alphabetFilter.setAttribute('style', 'color: #7000FF; border-bottom: 2px solid #7000FF;')
				: alphabetFilter.setAttribute('style', 'color: white; border-bottom: 2px solid white;');
		});
	}

	// Updates displayed terms based on selected filter
	const handleFilterClick = (beginningAlphabetIndex, endingAlphabetIndex, filterRange) => {
		const termsGroup = returnFilteredTerms(beginningAlphabetIndex, endingAlphabetIndex);
		const currentSelection = 'glossary-filter-button-' + filterRange;
		context.setGlossaryTerms(termsGroup);
		highlightCurrentFilter(currentSelection);
	};

	// map over each element in the glossaryTermsArray and pass them to the GlossaryListItem component as props
	const glossaryTermArray = glossaryArray.map((e, index) => {
		return (
			<GlossaryListItem element={e} key={index}/>
		);
	});

	return (
		<div className={'glossary-results-wrapper'}>
			<div id={'glossary-button-container'}>
				<span
					className={'glossary-filter-button'}
					id={'glossary-filter-button-A-J'}
					onClick={ () => handleFilterClick(1, 9, 'A-J')}>
					A - J
				</span>
				<span
					className={'glossary-filter-button'}
					id={'glossary-filter-button-K-S'}
					onClick={ () => handleFilterClick(10, 19, 'K-S')}>
					K - S
				</span>
				<span
					className={'glossary-filter-button'}
					id={'glossary-filter-button-T-Z'}
					onClick={ () => handleFilterClick(20, 26, 'T-Z')}>
					T - Z
				</span>
			</div>
			<div id={'glossary-term-wrapper'}>{glossaryTermArray}</div>
			<div id={'glossary-term-name'}>{context.currentGlossaryTerm}</div>
			<div id={'glossary-term-def'}>{context.glossaryTermDef}</div>
		</div>
	);
};