<script>
	import { apiRequest } from '../data/apiRequest';

	let responseLog = `Called Requests:\n\n`;
	let searchName = 'Smith';
	let searchAllID = 'dbb836b5-49b3-4c8b-9e1b-dcdd51a7de72';
	let specimensSearchID = 'dbb836b5-49b3-4c8b-9e1b-dcdd51a7de72';
	let conditionsSearchID = 'dbb836b5-49b3-4c8b-9e1b-dcdd51a7de72';

	const getAllPatients = async () => {
		const requestTitle = '- Request for All Patients:\n';
		const response = await apiRequest('Patients/allPatients');
		responseLog += requestTitle + response;
	};

	const getPatient = async () => {
		const requestTitle = '- Request for a patient with the name "' + searchName + '":\n';
		const response = await apiRequest('Patients/paitent/' + searchName);
		responseLog += requestTitle + response;
	};

	const getAllMedication = async () => {
		const requestTitle = '- Request for all medication:\n';
		const response = await apiRequest('medication');
		responseLog += requestTitle + response;
	};

	const getAllAppointments = async () => {
		const requestTitle = '- Request for all appointments:\n';
		const response = await apiRequest('appointments');
		responseLog += requestTitle + response;
	};

	const getAllImmunisations = async () => {
		const requestTitle = '- Request for all immunisations:\n';
		const response = await apiRequest('immunisations');
		responseLog += requestTitle + response;
	};

	const getAllConditions = async () => {
		const requestTitle = '- Request for all conditions:\n';
		const response = await apiRequest('conditions');
		responseLog += requestTitle + response;
	};

	const getAllMedicationAdministrations = async () => {
		const requestTitle = '- Request for all Medication Administrations:\n';
		const response = await apiRequest('medicationAdministrations');
		responseLog += requestTitle + response;
	};

	const getAllDiagnosticReports = async () => {
		const requestTitle = '- Request for all Diagnostic Reports:\n';
		const response = await apiRequest('diagnosticReports');
		responseLog += requestTitle + response;
	};

	const getAllSpecimens = async () => {
		const requestTitle = '- Request for all specimens:\n';
		const response = await apiRequest('specimens');
		responseLog += requestTitle + response;
	};

	const getPatientSpecimensForID = async () => {
		const requestTitle = `- Request for ${specimensSearchID} specimens:\n`;
		const response = await apiRequest('specimens/' + specimensSearchID);
		responseLog += requestTitle + response;
	};

	const getPatientConditionsForID = async () => {
		const requestTitle = `- Request for ${conditionsSearchID} conditions:\n`;
		const response = await apiRequest('specimens/' + conditionsSearchID);
		responseLog += requestTitle + response;
	};

	const getAllPatientsDetails = async () => {
		const requestTitle = `- Request for ${searchAllID} details:\n`;
		const response = await apiRequest('Patients/all_data/' + searchAllID);
		responseLog += requestTitle + response;

		//get
	};

	const getAllFamilyHistory = async () => {
		const requestTitle = `- Request for all Family History:\n`;
		const response = await apiRequest('familyHistory');
		responseLog += requestTitle + response;
	};

	const getAllObservations = async () => {
		const requestTitle = `- Request for all Observations:\n`;
		const response = await apiRequest('observations');
		responseLog += requestTitle + response;
	};

	const clearConsole = () => {
		responseLog = `Called Requests:\n\n`;
	};
</script>

<h1>FHIR Server Analytics</h1>
<div class="buttonPanel">
	<div>
		<button on:click={getAllPatients}>Get all patients</button>
		<button on:click={getPatient}>Get a patient</button>
		<label htmlfor="patient-search-name">Insert name: </label>
		<input id="patient-search-name" type="text" bind:value={searchName} />
	</div>
	<div>
		<button on:click={getAllPatientsDetails}>Get all details for patients</button>
		<label htmlfor="patient-search-id">Insert patient id: </label>
		<input id="patient-search-id" type="text" bind:value={specimensSearchID} />
	</div>

	<button on:click={getAllMedicationAdministrations}>Get all medication administrations</button>
	<button on:click={getAllMedication}>Get all medication</button>
	<button on:click={getAllAppointments}>Get all Appointments</button>
	<button on:click={getAllImmunisations}>Get all Immunisations</button>

	<div>
		<button on:click={getAllConditions}>Get all Conditions</button>
		<button on:click={getPatientConditionsForID}>Get Conditions for patient ID</button>
		<label htmlfor="patient-conditions-id">Insert patient id: </label>
		<input id="patient-conditions-id" type="text" bind:value={conditionsSearchID} />
	</div>
	<button on:click={getAllFamilyHistory}>Get all Family History</button>
	<button on:click={getAllDiagnosticReports}>Get all Diagnostic Reports</button>

	<div>
		<button on:click={getAllSpecimens}>Get all Specimens</button>
		<button on:click={getPatientSpecimensForID}>Get Specimens for patient ID</button>
		<label htmlfor="patient-specimens-id">Insert patient id: </label>
		<input id="patient-specimens-id" type="text" bind:value={specimensSearchID} />
	</div>

	<button on:click={getAllObservations}>Get all Observations</button>
</div>

<button on:click={clearConsole}>Clear console</button>
<textarea bind:value={responseLog} readonly />

<style>
	textarea {
		width: 100%;
		height: 600px;
		margin-top: 5px;
	}

	.buttonPanel {
		padding-top: 2vh;
		padding-bottom: 2vh;
		display: flex;
		flex-direction: column;
	}

	button {
		width: 200px;
		margin-top: 5px;
	}
</style>
