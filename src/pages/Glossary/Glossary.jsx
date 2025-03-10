/**
 * Glossary.jsx
 * Glossary page of the website.
 */

import React from "react";
import "./glossary.scss";
import { glossaryTerms } from "./GlossaryTerms";
import Navigation from "../../components/navigation/MainNavigation/MainNavigation";
import SearchBar from "../../components/SearchBar/SearchBar";
import { handleGlossarySearchTermClick } from "../../components/SearchBar/SearchBarHelper";
import GlossaryNav from "./GlossaryNav";
import GlossaryEntries from "./GlossaryEntries";
import Footer from "../../components/Footer/Footer";


export default function Glossary() {
	return (
		
		<div id="glossary">
			<Navigation></Navigation>
			<h1>Glossary</h1>
			<SearchBar
				data={glossaryTerms}
				HandleSearchTermClick={handleGlossarySearchTermClick}
			></SearchBar>
			<GlossaryNav></GlossaryNav>
			<div className="inner-scroll">
				<GlossaryEntries terms={glossaryTerms}></GlossaryEntries>
				<Footer></Footer>
			</div>
		</div>
	);
}
