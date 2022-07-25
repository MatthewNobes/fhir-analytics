export const stringifyResults = (results) => {
	let allResults = '';
	results.forEach((result, index) => {
		allResults += 'Entry ' + index + ':' + JSON.stringify(result) + '\n\n';
	});
	return allResults;
};
