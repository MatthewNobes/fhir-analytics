import { apiRequest } from '../apiRequest';

export const getAllPatients = async () => {
	const requestTitle = '- Request for All Patients:\n';
	const response = await apiRequest('Patients/allPatients');
	return requestTitle + response;
};

export const getPatient = async (/** @type {string} */ searchName) => {
	const requestTitle = '- Request for a patient with the name "' + searchName + '":\n';
	const response = await apiRequest('Patients/paitent/' + searchName);
	return requestTitle + response;
};

export const getAllPatientsDetails = async (/** @type {string} */ searchAllID) => {
	const requestTitle = `- Request for ${searchAllID} details:\n`;
	const response = await apiRequest('Patients/all_data/' + searchAllID);
	return requestTitle + response;

	//get
};
