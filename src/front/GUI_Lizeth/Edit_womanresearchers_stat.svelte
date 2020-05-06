<script>

    import Table from "sveltestrap/src/Table.svelte";
    import Button from "sveltestrap/src/Button.svelte";
    import Alert from "sveltestrap/src/Alert.svelte";
    import {onMount} from "svelte";
    import {pop} from "svelte-spa-router";

    export let params = {};
    let womanresearchers = {};

    let updateCountry = "";
    let updateYear = 0;
    let update_womanresearchers_he = 0;
    let update_womanresearchers_gov = 0;
    let update_womanresearchers_bent = 0;

    let alert_active = false; 
	let alert_title = ""; 
	let alert_description = ""; 
    let alert_color = "";

    onMount(getWomanResearcher);

    async function getWomanResearcher(){
        console.log("Fetching Women Researchers data...");
        const res = await fetch("/api/v2/womanresearchers-stats/" + params.country + "/" + params.year);

        if(res.ok){
			const json = await res.json();
            woman = json;
            updateCountry = params.country;
            updateYear = params.year;
            update_womanresearchers_he = woman.womanresearchers_he;
            update_womanresearchers_gov = woman.womanresearchers_gov;
            update_womanresearchers_bent = woman.womanresearchers_bent;

            console.log("Received resource.");
        
        }else{

			console.log("ERROR!" +  res.status + ": " + res.statusText);
		}

    }

    async function updateWomanresearcher(){
        console.log("Updating women researchers ...");

        const res = await fetch("/api/v2/womanresearchers-stats/" + params.country + "/" + params.year, {
            method: "PUT",
            body: JSON.stringify({
                country : params.country,
                year : parseInt(params.year),
                womanresearchers_he : update_womanresearchers_he,
                womanresearchers_gov : update_womanresearchers_gov,
                womanresearchers_bent : update_womanresearchers_bent
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (res) {
            if(res.status == 200){

                alert_active = true; 
	            alert_title = "Exito."; 
	            let alert_description = "El dato "+params.country+ " "+ params.year+" ha sido modificado correctamente." ; 
                let alert_color = "success";

                console.log(res.status + ": " + res.statusText);
            }else if (res.status == 400){
                alert_active = true; 
	            alert_title = "Error."; 
	            let alert_description = "Debe rellenar todos los campos." ; 
                let alert_color = "danger";
                console.log(res.status + ": " + res.statusText);
            }
            else{
                alert_active = true; 
	            alert_title = "Error."; 
	            let alert_description = "El dato no se ha podido actualizar." ; 
                let alert_color = "danger";

               
            }
        });


    }

</script>

<main>

    <h3>Editar : <strong>  {params.country}/{params.year}</strong></h3>

	{#await  womanresearchers}
		Loading data...
    {:then womanresearchers}
    
    <Alert id="alerta" color={alert_color} isOpen={alert_active} toggle={() => (alert_active = false)}>
		<h4>{alert_title}</h4>
		<p>{alert_description}</p>
	</Alert>

	<Table bordered>
		<thead>
			<tr>
				<th>País</th>
                <th>Año</th>
                <th>Investigadoras en Educación Superior</th>
                <th>Investigadoras en Administración</th>
                <th>Investigadoras en Negocios</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>{updateCountry}</td>
				<td>{updateYear}</td>
                <td><input type="number" bind:value="{update_womanresearchers_he}"></td>
                <td><input type="number" bind:value="{update_womanresearchers_gov}"></td>
                <td><input type="number" bind:value="{update_womanresearchers_bent}"></td>
				<td><Button color="success"  on:click="{updateWomanresearcher}">Actualizar</Button></td>
			</tr>
		</tbody>
	</Table>
    {/await}
    
    <Button outline color = "secondary" on:click="{pop}">Volver</Button>

</main>