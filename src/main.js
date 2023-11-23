import { ResourceType, getResourceUri } from "./resource.js";
import { achievementStandards } from "./standards.js";

/** @type {HTMLButtonElement?} */
const openResourceButton = document.querySelector("#open-resource");
/** @type {HTMLInputElement?} */
const searchBox = document.querySelector("#theNumber");
const resultsContainer = document.querySelector("#results");

/** @type {HTMLSelectElement?} */
const resourceTypeInput = document.querySelector("#answerOrExam");
/** @type {HTMLInputElement?} */
const yearInput = document.querySelector("#year");
/** @type {HTMLInputElement?} */
const standardIdInput = document.querySelector("#theNumber");

if (
	openResourceButton &&
	searchBox &&
	resultsContainer &&
	resourceTypeInput &&
	yearInput &&
	standardIdInput
) {
	openResourceButton.addEventListener("click", () => {
		const resourceUri = getResourceUri(
			resourceTypeInput.value,
			yearInput.value,
			standardIdInput.value
		);

		// _blank results in new tab
		window.open(resourceUri, "_blank");
	});

	searchBox.addEventListener("input", () => {
		const searchTerm = searchBox.value.toLowerCase();
		const matchingStandards = Object.entries(achievementStandards).filter(
			([_, description]) => description.toLowerCase().includes(searchTerm)
		);

		displayResults(resultsContainer, matchingStandards);
	});
} else {
	// These can possibly be null. This *shouldn't* happen as ES modules have deferred loading.
	console.error(
		"a required element does not exist",
		openResourceButton,
		searchBox,
		resultsContainer,
		resourceTypeInput,
		yearInput,
		standardIdInput
	);
}

/**
 * Displays the current results for the standard being searched for.
 * @param {HTMLDivElement} container The container to display results within.
 * @param {Array<[number, string]>} standards The standards to display for autocompletion.
 */
function displayResults(container, standards) {
	container.textContent = "";

	if (standards.length > 0) {
		for (const [standardId, description] of standards) {
			const resultItem = document.createElement("div");
			resultItem.classList.add("result-item");
			resultItem.textContent = `${standardId}: ${description}`;

			resultItem.addEventListener("click", () => {
				searchBox.value = standardId; // Set the search box value to the selected standardId
				container.style.display = "none"; // Hide the results container
			});

			container.append(resultItem);

			container.style.display = "block";
		}
	} else {
		container.style.display = "none";
	}
}
