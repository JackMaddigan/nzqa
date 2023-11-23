/**
 * Enumeration of all resource types in NCEA.
 *
 * @type {{Answer: "answer", Exam: "exam", Formula: "formula"}}
 */
export const ResourceType = {
	Answer: "answer",
	Exam: "exam",
	Formula: "formula",
};

/**
 * Converts the resource type to a NZQA-compatible resource type.
 * @param {ResourceType} resourceType The type of exam resource.
 * @returns {{ longResource: string, shortResource: string }} The long and short versions of the resource used in URIs.
 */
function getNzqaResourceTypeUri(resourceType) {
	switch (resourceType) {
		case ResourceType.Answer:
			return { longResource: "exams", shortResource: "exm" };
		case ResourceType.Exam:
			return { longResource: "schedules", shortResource: "ass" };
		case ResourceType.Formula:
			return { longResource: "exams", shortResource: "res" };
	}
}

/**
 * Gets the URI from the provided information.
 *
 * @param {ResourceType} resourceType The type of exam resource.
 * @param {number} year The year the resource was used.
 * @param {number} standardId The ID number of the standard. This will generally start with 9, and be a 5 digit number.
 * @returns {string} The URI of the resource, given the previous inputs.
 */
export function getResourceUri(resourceType, year, standardId) {
	const convertedResourceType = getNzqaResourceTypeUri(resourceType);

	return `https://www.nzqa.govt.nz/nqfdocs/ncea-resource/${convertedResourceType.longResource}/${year}/${standardId}-${convertedResourceType.shortResource}-${year}.pdf`;
}
