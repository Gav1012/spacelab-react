import React, { useContext } from "react";
import GlossaryListItem from "./glossaryListItem";
import { UniversalContext } from "../../App";
import {
	returnFilteredTerms,
	handleTermImage,
	highlightCurrentFilter,
	glossaryTermsArray,
} from "./glossaryhelper";
import "./glossary.scss";
import { handleGlossarySearchTermClick } from "../../components/dynamicSearchBar/SearchBarHelper";
import SearchBar from "../../components/dynamicSearchBar/SearchBar";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function GlossaryList() {
	const context = useContext(UniversalContext);
	let termImage;
	let termImageSource;
	let glossaryArray = [];
	const imageDiv = [];

	if (context.glossaryTermImg !== undefined) {
		termImage = context.glossaryTermImg;
		imageDiv.push(
			<div id={"glossary-term-image-wrapper"}>
				<img
					id={"glossary-term-image"}
					src={termImage}
					alt={`${context.currentGlossaryTerm}`}
				/>
			</div>
		);
		handleTermImage();
	}

	if (context.glossaryTermImgSource !== undefined) {
		termImageSource = context.glossaryTermImgSource;
	}

	if (context.glossaryTerms !== undefined) {
		glossaryArray = context.glossaryTerms;
	}

	// without the second condition, a page refresh yields the error "glossaryArray is undefined"
	// Because glossary terms is only set after the first render (useEffect in App)
	if (
		context.glossaryTermImg !== undefined &&
		context.glossaryTerms !== undefined
	) {
		glossaryArray = context.glossaryTerms;
	}

	// Updates displayed terms based on selected filter
	const handleFilterClick = (
		beginningAlphabetIndex,
		endingAlphabetIndex,
		filterRange
	) => {
		const termsGroup = returnFilteredTerms(
			beginningAlphabetIndex,
			endingAlphabetIndex
		);
		const currentSelection = "glossary-filter-button-" + filterRange;
		context.setGlossaryTerms(termsGroup);
		highlightCurrentFilter(currentSelection);
	};

	// map over each element in the glossaryTermsArray and pass them to the GlossaryListItem component as props
	let glossaryTermArray;
	if (glossaryArray !== undefined) {
		glossaryTermArray = glossaryArray.map((e, index) => {
			return <GlossaryListItem element={e} key={index} />;
		});
	}

	return (
		<div className={"glossary-results-wrapper"}>
			<div id={"glossary-button-container"}>
				<div id={"glossary-button-wrapper"}>
					<span
						className={"glossary-filter-button"}
						id={"glossary-filter-button-A-J"}
						onClick={() => handleFilterClick(1, 9, "A-J")}
					>
						A - J
					</span>
					<span
						className={"glossary-filter-button"}
						id={"glossary-filter-button-K-S"}
						onClick={() => handleFilterClick(10, 19, "K-S")}
					>
						K - S
					</span>
					<span
						className={"glossary-filter-button"}
						id={"glossary-filter-button-T-Z"}
						onClick={() => handleFilterClick(20, 26, "T-Z")}
					>
						T - Z
					</span>
				</div>
				<SearchBar
					placeholder="Enter search term..."
					data={glossaryTermsArray}
					HandleSearchTermClick={handleGlossarySearchTermClick}
				/>
			</div>
			<div id={"glossary-term-wrapper"}>{glossaryTermArray}</div>
			<div id={"glossary-term-name"}>{context.currentGlossaryTerm}</div>
			<div id={"glossary-term-def"}>
				{context.glossaryTermDef}
				{imageDiv}
				<div id={"glossary-term-image-source-wrapper"}>
					<a
						id={"glossary-term-image-source"}
						href={termImageSource}
						target="_blank"
						rel="nofollow noopener noreferrer"
					>
						{termImageSource}
					</a>
				</div>
			</div>
		</div>
	);
}
