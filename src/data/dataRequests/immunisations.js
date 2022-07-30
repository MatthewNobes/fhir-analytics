import { apiRequest } from '../apiRequest';

export const getAllImmunisations = async () => {
	const requestTitle = '- Request for all immunisations:\n';
	const response = await apiRequest('immunisations');
	return requestTitle + response;
};
