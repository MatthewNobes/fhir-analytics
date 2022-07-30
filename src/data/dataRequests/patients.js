import { apiRequest } from '../apiRequest';
import { getPatientSpecimensForID } from './specimens';
import { getPatientConditionsForID } from './conditions';
import { getPatientMedicationAdministrationsForID } from './medication';
import { getPatientFamilyHistoryForID } from './familyHistory';

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
	const patientBasic = await apiRequest('Patients/all_data/' + searchAllID);
	const patientSpecimens = await getPatientSpecimensForID(searchAllID);
	const patientFamilyHistory = await getPatientFamilyHistoryForID(searchAllID);
	const patientConditions = await getPatientConditionsForID(searchAllID);
	const patientMedicationAdministrations = await getPatientMedicationAdministrationsForID(
		searchAllID
	);
	const response =
		patientBasic +
		'\n' +
		patientSpecimens +
		'\n' +
		patientFamilyHistory +
		'\n' +
		patientConditions +
		'\n' +
		patientMedicationAdministrations;
	return requestTitle + response + '\n' + patientSpecimens;

	//get
};
