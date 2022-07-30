import { apiRequest } from '../apiRequest';

export const getAllObservations = async () => {
	const requestTitle = `- Request for all Observations:\n`;
	const response = await apiRequest('observations');
	return requestTitle + response;
};
