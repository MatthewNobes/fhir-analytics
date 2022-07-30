import { apiRequest } from '../apiRequest';

export const getAllDiagnosticReports = async () => {
	const requestTitle = '- Request for all Diagnostic Reports:\n';
	const response = await apiRequest('diagnosticReports');
	return requestTitle + response;
};
