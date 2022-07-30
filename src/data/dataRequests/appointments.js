import { apiRequest } from '../apiRequest';

export const getAllAppointments = async () => {
	const requestTitle = '- Request for all appointments:\n';
	const response = await apiRequest('appointments');
	return requestTitle + response;
};
