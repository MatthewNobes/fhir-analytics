import { apiRequest } from '../apiRequest';

export const getAllSpecimens = async () => {
	const requestTitle = '- Request for all specimens:\n';
	const response = await apiRequest('specimens');
	return requestTitle + response;
};

export const getPatientSpecimensForID = async (/** @type {string} */ specimensSearchID) => {
	const requestTitle = `- Request for ${specimensSearchID} specimens:\n`;
	const response = await apiRequest('specimens/' + specimensSearchID);
	return requestTitle + response;
};
