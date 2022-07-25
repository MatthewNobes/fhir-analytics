<script>
	let value = `Called Requests:\n\n`;
	let searchName = 'Smith';

	function getAllPatients() {
		fetch('http://localhost:4444/Patients/allPatients')
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for All Patients:\n';
				entry += stringifyResults(data.entry);

				value += entry;
			});
	}

	function getPatient() {
		fetch('http://localhost:4444/Patients/paitent/' + searchName)
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for a patient with the name "' + searchName + '":\n';
				entry += stringifyResults(data.entry);

				value += entry;
			});
	}

	function stringifyResults(results) {
		let allResults = '';
		results.forEach((result, index) => {
			allResults += 'Entry ' + index + ':' + JSON.stringify(result) + '\n\n';
		});
		return allResults;
	}

	const getAllMedication = () => {
		fetch('http://localhost:4444/medication/')
			.then((response) => response.json())
			.then((data) => {
				let entry = 'Request for all medication:\n';
				entry += stringifyResults(data.entry);
				value += entry;
			});
	};
</script>

<h1>FHIR Server Analytics</h1>
<div class="buttonPanel">
	<button on:click|once={getAllPatients}>Get all patients</button>
	<div>
		<button on:click|once={getPatient}>Get a patient</button>
		<label>Insert name: </label><input bind:value={searchName} />
	</div>
	<button on:click|once={getAllMedication}>Get all medication</button>
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
	}
</style>
