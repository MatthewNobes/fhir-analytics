export const stringifyResults = (
	/** @type {{ entry: any; forEach: (arg0: (result: any, index: any) => void) => void; }} */ results
) => {
	let allResults = '';
	if (Array.isArray(results.entry)) {
		results.entry.forEach((result, index) => {
			allResults += 'Entry ' + index + ':' + JSON.stringify(result) + '\n\n';
		});
	} else {
		allResults = JSON.stringify(results);
	}

	return allResults;
};
