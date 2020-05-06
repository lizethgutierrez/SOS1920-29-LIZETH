<script>
    import Table from "sveltestrap/src/Table.svelte";
    import Button from "sveltestrap/src/Button.svelte";
    import { 
        onMount 
    } from "svelte";
    import { 
        pop 
    } from "svelte-spa-router";
    
    export let params = {};
    let emp = {};
    let updatedCountry = "XXX";
    let updatedYear = 123;
    let updatedEmp_female_age15_24 = 123;
    let updatedEmp_male_age15_24 = 123;
    let updatedEmp_vuln_female = 123;
    let updatedEmp_vuln_male = 123;
    let errorMsg = "";

    onMount(getEmp);

	async function getEmp(){
		
        console.log("Fetching resource...");
		const res = await fetch("/api/v1/emp-stats/" + params.country + "/" + params.year);

		if(res.ok){
            
            console.log("Ok:");
			const json = await res.json();
            emp = json;
            updatedCountry = emp.country;
            updatedYear = emp.year;
            updatedEmp_female_age15_24 = emp.emp_female_age15_24;
            updatedEmp_male_age15_24 = emp.emp_male_age15_24;
            updatedEmp_vuln_female = emp.emp_vuln_female;
            updatedEmp_vuln_male = emp.emp_vuln_male;
            console.log("Received resource.");
        
        }else{
            errorMsg = res.status + ": " + res.statusText;
			console.log("ERROR!" +  errorMsg);
		}
	}

    async function updateEmp(){
        console.log("Updating resource...");

        const res = await fetch("/api/v1/emp-stats/" + params.country + "/" + params.year, {
            method: "PUT",
            body: JSON.stringify({
                country : params.country,
                year : params.year,
                emp_female_age15_24 : updatedEmp_female_age15_24,
                emp_male_age15_24 : updatedEmp_male_age15_24,
                emp_vuln_female : updatedEmp_vuln_female,
                emp_vuln_male : updatedEmp_vuln_male
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (res) {
            getEmp();
        });

    }
</script>

<main>
    <h3>Edit Resource <strong>{params.country} and {params.year}</strong></h3>
    {#await emp}
		Loading resource...
	{:then emp}
		<Table bordered>
			<thead>
				<tr>
					<th>Country</th>
					<th>Year</th>
                    <th>Emp_female_age15_24</th>
                    <th>emp_male_age15_24</th>
                    <th>emp_vuln_female</th>
                    <th>emp_vuln_male</th>   
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr>
                    <td>{updatedCountry}</td>
                    <td>{updatedYear}</td>
					<td><input bind:value="{updatedEmp_female_age15_24}"></td>
                    <td><input bind:value="{updatedEmp_male_age15_24}"></td>
                    <td><input bind:value="{updatedEmp_vuln_female}"></td>
                    <td><input bind:value="{updatedEmp_vuln_male}"></td>
					<td><Button outline color="primary" on:click="{updateEmp}">Update</Button></td>
				</tr>
			</tbody>
		</Table>
    {/await}
    
    {#if errorMsg}
        <p style="color: red">ERROR: {errorMsg}</p>
    {/if}
    
    <Button outline color = "secondary" on:click="{pop}">Back</Button>

</main>