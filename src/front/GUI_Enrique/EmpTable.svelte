<script>

	import { 
		onMount 
	} from "svelte";
	import Table from "sveltestrap/src/Table.svelte";
	import Button from "sveltestrap/src/Button.svelte";
	
    let emps = [];

	let newEmp = {
		country: "",
		year: "",
        emp_female_age15_24: "",
        emp_male_age15_24: "",
        emp_vuln_female: "",
        emp_vuln_male: "",
	};

	onMount(getEmps);

	async function getEmps(){
		
		console.log("Fetching resources...");
		const res = await fetch("/api/v1/emp-stats");

		if(res.ok){
			console.log("Ok:");
			const json = await res.json();
			emps = json;
			console.log("Received "+emps.length+" resources of employments.");
		}else{
			console.log("ERROR!");
		}
	}

	async function insertEmp(){
		
        console.log("Inserting resource..." + JSON.stringify(newEmp));
        let newEmpUpdated = {
            country: newEmp.country,
            year: parseInt(newEmp.year),
            emp_female_age15_24: parseFloat(newEmp.emp_female_age15_24),
            emp_male_age15_24: parseFloat(newEmp.emp_male_age15_24),
            emp_vuln_female: parseFloat(newEmp.emp_vuln_female),
            emp_vuln_male: parseFloat(newEmp.emp_vuln_male),
        }

		const res = await fetch("/api/v1/emp-stats", {
			method: "POST",
			body: JSON.stringify(newEmpUpdated),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(function (res) {
			getEmps();
		});

	}

	async function deleteEmp(country, year){
		
        console.log("Deleting resource...");

		const res = await fetch("/api/v1/emp-stats/" + country + "/" + year, {
			method: "DELETE",
		}).then(function (res) {
			getEmps();
		});

	}

</script>

<main>

	{#await emps}
		Loading resources...
	{:then emps}
		<Table bordered>
			<thead>
				<tr>
					<th>Country</th>
					<th>Year</th>
                    <th>Emp_female_age15_24</th>
                    <th>Emp_male_age15_24</th>
                    <th>Emp_vuln_female</th>
                    <th>Emp_vuln_male</th>   
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td><input bind:value="{newEmp.country}"></td>
					<td><input bind:value="{newEmp.year}"></td>
                    <td><input bind:value="{newEmp.emp_female_age15_24}"></td>
                    <td><input bind:value="{newEmp.emp_male_age15_24}"></td>
                    <td><input bind:value="{newEmp.emp_vuln_female}"></td>
                    <td><input bind:value="{newEmp.emp_vuln_male}"></td>
					<td><Button outline color="primary" on:click="{insertEmp}">Insert</Button></td>
				</tr>

				{#each emps as emp}
					<tr>
						<td>
							<a href="#/emp-stats/{emp.country}/{emp.year}">{emp.country}</a>
						</td>
						<td>{emp.year}</td>
                        <td>{emp.emp_female_age15_24}</td>
                        <td>{emp.emp_male_age15_24}</td>
                        <td>{emp.emp_vuln_female}</td>
                        <td>{emp.emp_vuln_male}</td>
						<td><Button outline color="danger" on:click="{deleteEmp(emp.country, emp.year)}">Delete</Button></td>
					</tr>
				{/each}
			</tbody>
		</Table>
	{/await}

</main>
