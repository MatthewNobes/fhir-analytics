<script>
	import { getAllPatients, getPatient, getAllPatientsDetails } from '../data/dataRequests/patients';
	import {
		getAllMedication,
		getAllMedicationAdministrations,
		getPatientMedicationAdministrationsForID
	} from '../data/dataRequests/medication';
	import { getAllObservations } from '../data/dataRequests/observations';
	import { getAllSpecimens, getPatientSpecimensForID } from '../data/dataRequests/specimens';
	import { getAllDiagnosticReports } from '../data/dataRequests/diagnosticReports';
	import { getAllAppointments } from '../data/dataRequests/appointments';
	import { getAllConditions, getPatientConditionsForID } from '../data/dataRequests/conditions';
	import { getAllImmunisations } from '../data/dataRequests/immunisations';
	import {
		getAllFamilyHistory,
		getPatientFamilyHistoryForID
	} from '../data/dataRequests/familyHistory';

	let responseLog = `Called Requests:\n\n`;
	let searchName = 'Smith';
	let searchAllID = 'dbb836b5-49b3-4c8b-9e1b-dcdd51a7de72';
	let specimensSearchID = 'dbb836b5-49b3-4c8b-9e1b-dcdd51a7de72';
	let conditionsSearchID = 'dbb836b5-49b3-4c8b-9e1b-dcdd51a7de72';
	let medicationAdministrationsSearchID = 'dbb836b5-49b3-4c8b-9e1b-dcdd51a7de72';
	let familyHistorySearchID = 'dbb836b5-49b3-4c8b-9e1b-dcdd51a7de72';

	const clearConsole = () => {
		responseLog = `Called Requests:\n\n`;
	};
</script>

<h1>FHIR Server Analytics</h1>
<div class="buttonPanel">
	<div>
		<button
			on:click={async () => {
				responseLog += await getAllPatients();
			}}>Get all patients</button
		>
		<button
			on:click={async () => {
				responseLog += await getPatient(searchName);
			}}>Get a patient</button
		>
		<label htmlfor="patient-search-name">Insert name: </label>
		<input id="patient-search-name" type="text" bind:value={searchName} />
	</div>
	<div>
		<button
			on:click={async () => {
				responseLog += await getAllPatientsDetails(searchAllID);
			}}>Get all details for patients</button
		>
		<label htmlfor="patient-search-id">Insert patient id: </label>
		<input id="patient-search-id" type="text" bind:value={searchAllID} />
	</div>
	<button
		on:click={async () => {
			responseLog += await getAllMedication();
		}}>Get all medication</button
	>

	<div>
		<button
			on:click={async () => {
				responseLog += await getAllMedicationAdministrations();
			}}>Get all medication administrations</button
		>
		<button
			on:click={async () => {
				responseLog += await getPatientMedicationAdministrationsForID(
					medicationAdministrationsSearchID
				);
			}}>Get Medication Administrations for patient ID</button
		>
		<label htmlfor="patient-medicationAdministrations-id">Insert patient id: </label>
		<input
			id="patient-medicationAdministrations-id"
			type="text"
			bind:value={medicationAdministrationsSearchID}
		/>
	</div>

	<button
		on:click={async () => {
			responseLog += await getAllAppointments();
		}}>Get all Appointments</button
	>
	<button
		on:click={async () => {
			responseLog += await getAllImmunisations();
		}}>Get all Immunisations</button
	>

	<div>
		<button
			on:click={async () => {
				responseLog += await getAllConditions();
			}}>Get all Conditions</button
		>
		<button
			on:click={async () => {
				responseLog += await getPatientConditionsForID(conditionsSearchID);
			}}>Get Conditions for patient ID</button
		>
		<label htmlfor="patient-conditions-id">Insert patient id: </label>
		<input id="patient-conditions-id" type="text" bind:value={conditionsSearchID} />
	</div>
	<div>
		<button
			on:click={async () => {
				responseLog += await getAllFamilyHistory();
			}}>Get all Family History</button
		>
		<button
			on:click={async () => {
				responseLog += await getPatientFamilyHistoryForID(familyHistorySearchID);
			}}>Get Family History for patient ID</button
		>
		<label htmlfor="patient-familyHistory-id">Insert patient id: </label>
		<input id="patient-familyHistory-id" type="text" bind:value={familyHistorySearchID} />
	</div>

	<button
		on:click={async () => {
			responseLog += await getAllDiagnosticReports();
		}}>Get all Diagnostic Reports</button
	>

	<div>
		<button
			on:click={async () => {
				responseLog = await getAllSpecimens();
			}}>Get all Specimens</button
		>
		<button
			on:click={async () => {
				responseLog = await getPatientSpecimensForID(specimensSearchID);
			}}>Get Specimens for patient ID</button
		>
		<label htmlfor="patient-specimens-id">Insert patient id: </label>
		<input id="patient-specimens-id" type="text" bind:value={specimensSearchID} />
	</div>

	<button
		on:click={async () => {
			responseLog = await getAllObservations();
		}}>Get all Observations</button
	>
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
