import { apiRequest } from '../apiRequest';

export const getAllMedication = async () => {
	const requestTitle = '- Request for all medication:\n';
	const response = await apiRequest('medication');
	return requestTitle + response;
};

export const getAllMedicationAdministrations = async () => {
	const requestTitle = '- Request for all Medication Administrations:\n';
	const response = await apiRequest('medicationAdministrations');
	return requestTitle + response;
};

export const getPatientMedicationAdministrationsForID = async (
	/** @type {string} */ medicationAdministrationsSearchID
) => {
	const requestTitle = `- Request for ${medicationAdministrationsSearchID} Medication Administrations:\n`;
	const response = await apiRequest(
		'medicationAdministrations/' + medicationAdministrationsSearchID
	);
	return requestTitle + response;
};
