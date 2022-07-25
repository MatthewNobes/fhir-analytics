<script>
	import { apiRequest } from '../data/apiRequest';

	let responseLog = `Called Requests:\n\n`;
	let searchName = 'Smith';

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

	const clearConsole = () => {
		responseLog = `Called Requests:\n\n`;
	};
</script>

<h1>FHIR Server Analytics</h1>
<div class="buttonPanel">
	<div>
		<button on:click={getAllPatients}>Get all patients</button>
		<button on:click={getPatient}>Get a patient</button>
		<label>Insert name: </label><input bind:value={searchName} />
	</div>
	<button on:click={getAllMedicationAdministrations}>Get all medication administrations</button>
	<button on:click={getAllMedication}>Get all medication</button>
	<button on:click={getAllAppointments}>Get all Appointments</button>
	<button on:click={getAllImmunisations}>Get all Immunisations</button>
	<button on:click={getAllConditions}>Get all Conditions</button>
	<button on:click={getAllDiagnosticReports}>Get all Diagnostic Reports</button>
	<button on:click={getAllSpecimens}>Get all Specimens</button>
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
