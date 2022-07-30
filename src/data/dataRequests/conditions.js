import { apiRequest } from '../apiRequest';

export const getAllConditions = async () => {
	const requestTitle = '- Request for all conditions:\n';
	const response = await apiRequest('conditions');
	return requestTitle + response;
};

export const getPatientConditionsForID = async (/** @type {string} */ conditionsSearchID) => {
	const requestTitle = `- Request for ${conditionsSearchID} conditions:\n`;
	const response = await apiRequest('conditions/' + conditionsSearchID);
	return requestTitle + response;
};
