import { apiRequest } from '../apiRequest';

export const getPatientFamilyHistoryForID = async (/** @type {string} */ familyHistorySearchID) => {
	const requestTitle = `- Request for ${familyHistorySearchID} family history:\n`;
	const response = await apiRequest('familyHistory/' + familyHistorySearchID);
	return requestTitle + response;
};

export const getAllFamilyHistory = async () => {
	const requestTitle = `- Request for all Family History:\n`;
	const response = await apiRequest('familyHistory');
	return requestTitle + response;
};
