import { stringifyResults } from '../utils/stringifyResults';

export const apiRequest = async (/** @type {string} */ request) => {
	const responseObject = await fetch('http://localhost:4444/' + request);
	const responseJSON = await responseObject.json();

	return stringifyResults(responseJSON);
};
