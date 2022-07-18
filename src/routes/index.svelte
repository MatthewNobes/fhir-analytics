<script>
	let value = `Called Requests:\n\n`;

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
		fetch('http://localhost:4444/Patients/allPatients')
			.then((response) => response.json())
			.then((data) => {
				console.log(data.entry);
				let entry = 'Request for a Patients:\n';
				entry += JSON.stringify(data.entry);
				entry += '\n\n';
				value += entry;
			});
	}

	function stringifyResults(results) {
		let allResults = '';
		debugger;
		results.forEach((result, index) => {
			allResults += 'Entry ' + index + ':' + JSON.stringify(result) + '\n\n';
		});
		return allResults;
	}
</script>

<h1>FHIR Server Analytics</h1>
<div class="buttonPanel">
	<button on:click|once={getAllPatients}>Get all patients</button>
	<button on:click|once={getPatient}>Get a patient</button>
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
	}
</style>
