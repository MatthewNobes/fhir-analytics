<script>
	import { stringifyResults } from '../utils/stringifyResults';
	let value = `Called Requests:\n\n`;
	let searchName = 'Smith';

	const getAllPatients = () => {
		fetch('http://localhost:4444/Patients/allPatients')
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for All Patients:\n';
				entry += stringifyResults(data.entry);

				value += entry;
			});
	};

	const getPatient = () => {
		fetch('http://localhost:4444/Patients/paitent/' + searchName)
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for a patient with the name "' + searchName + '":\n';
				entry += stringifyResults(data.entry);

				value += entry;
			});
	};

	const getAllMedication = () => {
		fetch('http://localhost:4444/medication/')
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for all medication:\n';
				entry += stringifyResults(data.entry);
				value += entry;
			});
	};

	const getAllAppointments = () => {
		fetch('http://localhost:4444/appointments/')
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for all appointments:\n';
				entry += stringifyResults(data.entry);
				value += entry;
			});
	};

	const getAllImmunisations = () => {
		fetch('http://localhost:4444/immunisations/')
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for all immunisations:\n';
				entry += stringifyResults(data.entry);
				value += entry;
			});
	};

	const getAllConditions = () => {
		fetch('http://localhost:4444/conditions/')
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for all conditions:\n';
				entry += stringifyResults(data.entry);
				value += entry;
			});
	};

	const getAllMedicationAdministrations = () => {
		fetch('http://localhost:4444/medicationAdministrations/')
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for all Medication Administrations:\n';
				entry += stringifyResults(data.entry);
				value += entry;
			});
	};
</script>

<h1>FHIR Server Analytics</h1>
<div class="buttonPanel">
	<div>
		<button on:click|once={getAllPatients}>Get all patients</button>
		<button on:click|once={getPatient}>Get a patient</button>
		<label>Insert name: </label><input bind:value={searchName} />
	</div>
	<button on:click|once={getAllMedicationAdministrations}>Get all medication administrations</button
	>
	<button on:click|once={getAllMedication}>Get all medication</button>
	<button on:click|once={getAllAppointments}>Get all Appointments</button>
	<button on:click|once={getAllImmunisations}>Get all Immunisations</button>
	<button on:click|once={getAllConditions}>Get all Conditions</button>
	<!---also need medication administration, diagnostic reprots, specimen (test result)-->
</div>

<textarea bind:value readonly />

<style>
	textarea {
		width: 100%;
		height: 600px;
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
