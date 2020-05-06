<script>
    import {
        onMount
    } from "svelte";
    import {
        pop
    } from "svelte-spa-router";
    import Table from "sveltestrap/src/Table.svelte";
	import Button from "sveltestrap/src/Button.svelte";
	
    import Input from "sveltestrap/src/Input.svelte";
	import FormGroup from "sveltestrap/src/FormGroup.svelte";

	import { Pagination, PaginationItem, PaginationLink } from 'sveltestrap';
	
	let womanresearchersData = [];
	const BASE_API_URL="/api/v2";

    let newWomanresearchersData = {
        country: "",
		year: "",
		womanresearchers_he: "",
		womanresearchers_gov: "",
		womanresearchers_bent:""
	};
	let alert_active = false; 
	let alert_title = ""; 
	let alert_description = ""; 
	let alert_color = "";
	
	let offset = 0;
    let numberMaxObject = 10;//numero de objetos maximo por pagina
    
	let actualPage = 1; 
	let loadmoreData = true; 

    let search = "";
	let values = "";
	let object = "";
	
     
	
	onMount(getWomanresearchers);
	

    async function getWomanresearchers() {

        const res = await fetch(BASE_API_URL+"/womanresearchers-stats?offset=" + numberMaxObject * offset + "&limit=" + numberMaxObject);
        const resNextPage = await fetch(BASE_API_URL+"/womanresearchers-stats?offset="  + numberMaxObject * (offset + 1) + "&limit=" + numberMaxObject);
		console.log("Fetching Woman researchers data...");
		
        if (res.ok && resNextPage.ok) {

            const json = await res.json();
			const jsonNext = await resNextPage.json();
			
			womanResearchers = json;
			
            if (jsonNextPage.length == 0) {
                loadmoreData = false;
            } else {
                loadmoreData = true;
            }
            console.log("Received " + womanResearchers.length + "Woman researchers data.")
        } else {
			console.log("ERROR!");
			alert_active = true; 
			alert_title = "Error"; 
			alert_description = "error al cargar los datos"; 
			alert_color = "danger";
        }
    }
    async function insertWomanresearchers() {
		console.log("Inserting Woman researchers data...");
		let new_data = {
			country: newWomanresearchersData.country,
			year: parseInt(newWomanresearchersData.year),
			womanresearchers_he: parseInt(newWomanresearchersData.womanresearchers_he),
			womanresearchers_gov: parseInt(newWomanresearchersData.womanresearchers_gov),
			womanresearchers_bent: parseInt(newWomanresearchersData.womanresearchers_bent)
            
		}
		console.log(new_data);

        const res = await fetch(BASE_API_URL+"/womanresearchers-stats", {
            method: "POST",
            body: JSON.stringify(new_data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(function (res) {
            getWomanresearchers();
            object = new_data.country;
            if (res.ok) {
				alert_active = true; 
				alert_title = "Exito."; 
				alert_description = "El dato"+ JSON.stringify(new_data) +"se ha insertado con exito"; 
				alert_color = "success";
				console.log(res.status + ": " + res.statusText);
                
            } else if (res.status == 409) {
				alert_active = true; 
				alert_title = "Error."; 
				alert_description = "Error! el dato "+new_data.country +" "+new_data.year +" ya existe "; 
				alert_color = "danger";
				console.log(res.status + ": " + res.statusText);

            }else if (res.status == 400){
				alert_active = true; 
				alert_title = "Error."; 
				alert_description = "Error! debe rellenar todos los campos"; 
				alert_color = "danger";
				console.log(res.status + ": " + res.statusText);
                
            };
        });
    }
	async function findWomanresearcher(){
		let search_woman_data = {
            country: newWomanresearchersData.country,
			year: parseInt(newWomanresearchersData.year),
			womanresearchers_he: parseInt(newWomanresearchersData.womanresearchers_he),
			womanresearchers_gov: parseInt(newWomanresearchersData.womanresearchers_gov),
			womanresearchers_bent: parseInt(newWomanresearchersData.womanresearchers_bent)
            
		}
		let search = {};
		if(search_woman_data.country.localeCompare("") != 0){search["country"] = search_woman_data.country;}
		if(!isNaN(search_woman_data.year)){search["year"] = search_woman_data.year;}
		if(!isNaN(search_woman_data.womanresearchers_he)){search["womanresearchers_he"] = search_woman_data.womanresearchers_he;}
		if(!isNaN(search_woman_data.womanresearchers_gov)){search["womanresearchers_gov"] = search_woman_data.womanresearchers_gov;}
		if(!isNaN(search_woman_data.womanresearchers_bent)){search["womanresearchers_bent"] = search_woman_data.womanresearchers_bent;}

		let url_filter = "";
		
		for(var key in search){
			url_filter += (key+"="+search[key]+"&");
		}
		const res = await fetch(BASE_API_URL+"/womanresearchers-stats"+url_filter);
		
		if(res.status == 200){
			const json = res.json();
			data = json;

			alert_active = true; 
			alert_title = "Exito."; 
			alert_description = "Dato con los parámetros "+ JSON.stringify(search_woman_data)+" encontrado."; 
			alert_color = "success";
			console.log(res.status + ": " + res.statusText);
		}
		else{
			
			alert_title = "Error."; 
			alert_description = "Dato no encontrado."; 

			if(search_woman_data.country.localeCompare("") != 0){alert_description += " País: "+search_woman_data.country;}
			if(!isNaN(search_woman_data.year)){alert_description +=  " Año: "+search_woman_data.year;}
			if(!isNaN(search_woman_data.womanresearchers_he)){alert_description += " : Educación superior "+search_woman_data.womanresearchers_he;}
			if(!isNaN(search_woman_data.womanresearchers_gov)){alert_description += " Administración: "+search_woman_data.womanresearchers_gov;}
			if(!isNaN(search_woman_data.womanresearchers_bent)){alert_description += " Negocios: "+search_woman_data.womanresearchers_bent;}
			alert_color = "danger";
			alert_active = true; 
			console.log(res.status + ": " + res.statusText);		
		}
	

	}
	

    async function deleteWoman(country, year) {
        console.log("Deleting Woman Researcher data...");
		const res = await fetch(BASE_API_URL+"/womanresearchers-stats/"+country+"/"+year, {
			method: "DELETE"
		}).then(function (res) {
            getWomanresearchers();
            if (res.ok) {
				alert_active = true; 
				alert_title = "Exito."; 
				alert_description = "Dato "+country +" "+ year+ "ha sido borrado correctamente."; 
				alert_color = "success";
				console.log(res.status + ": " + res.statusText);

            } else if (res.status == 404) {
				alert_active = true; 
				alert_title = "Error."; 
				alert_description = "Dato "+country +" "+ year+ "no se ha podido borrar el dato."; 
				alert_color = "success";
				console.log(res.status + ": " + res.statusText);
            };
		});
    }
    
    async function deleteAllWomans() {
	    console.log("Deleting All Woman Researcher data...");
		const res = await fetch(BASE_API_URL+"/womanresearchers-stats", {
			method: "DELETE"
		}).then(function (res) {
            getWomanresearchers();
            if (res.ok) {
				alert_active = true; 
				alert_title = "Exito."; 
				alert_description = "Los datos han sido borrados correctamente."; 
				alert_color = "success";
				console.log(res.status + ": " + res.statusText);

            };
		});
    }
    
    async function loadInitialData() {
		
        const res = await fetch(BASE_API_URL+"/womanresearchers-stats/loadInitialData", {
            method: "GET"
        }).then(function (res) {
            getWomanresearchers();
            if (res.ok) {
				alert_active = true; 
				alert_title = "Exito."; 
				alert_description = "Los datos iniciales se han cargado correctamente."; 
				alert_color = "success";
				console.log(res.status + ": " + res.statusText);

            };
        });
    }
    
    async function upOffset (numPag) {
		offset += numPag;
		currentPage += numPag;
		getWomanresearchers();
	}
</script>

<main>
	
    <h2 style="text-align: center;">Mujeres Investigadoras</h2>

	<Alert id="alerta" color={alert_color} isOpen={alert_active} toggle={() => (alert_active = false)}>
		<h4>{alert_title}</h4>
		<p>{alert_description}</p>
	</Alert>

   

    {#await womanresearchersData}
        Loading Women Researchers...
    {:then womanresearchersData}

	<Button outline color="primary" on:click={loadInitialData} style="float: left;">Cargar datos iniciales</Button>
	<Button outline color="danger" on:click={deleteAllWomans} style="float: right;"><i class="fa fa-trash" aria-hidden="true"></i> Borrar todo</Button>


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
                    <td><input type="text" bind:value="{newWomanresearchersData.country}"></td>
                    <td><input type="number" bind:value="{newWomanresearchersData.year}"></td>
                    <td><input type="number" bind:value="{newWomanresearchersData.womanresearchers_he}"></td>
                    <td><input type="number" bind:value="{newWomanresearchersData.womanresearchers_gov}"></td>
                    <td><input type="number" bind:value="{newWomanresearchersData.womanresearchers_bent}"></td>
					<td><Button outline color="primary" on:click={insertWomanresearchers}>Insertar</Button>
						<Button outline color="primary" on:click={findWomanresearcher}>Buscar</Button>
					</td>
                </tr>
                {#each womanresearchersData as woman}
                    <tr>
                        <td><a href="#/womanresearchers-stats/{woman.country}/{woman.year}">{woman.country}</a></td>
                        <td><a href="#/womanresearchers-stats/{woman.country}/{woman.year}">{woman.year}</a></td>
                        <td>{woman.womanresearchers_he}</td>
                        <td>{woman.womanresearchers_gov}</td>
                        <td>{woman.womanresearchers_bent}</td>
                        <td><Button outline color="danger" on:click="{deleteWoman(woman.country, woman.year)}"><i class="fa fa-trash" aria-hidden="true"></i> Borrar</Button></td>
                    </tr>
                {/each}
            </tbody>
        </Table>
    {/await}
    <Button outline color="secondary" on:click="{pop}">Volver</Button>

    <Pagination ariaLabel="Cambiar de página" style="padding-left: 45%;">

        <PaginationItem class="{currentPage === 1 ? 'disabled' : ''}">
            <PaginationLink previous href="#/womanresearchers-stats" on:click="{() => upOffset(-1)}" />
        </PaginationItem>
        
        {#if currentPage != 1}
            <PaginationItem>
                <PaginationLink href="#/womanresearchers-stats" on:click="{() => upOffset(-1)}" >{currentPage - 1}</PaginationLink>
            </PaginationItem>
        {/if}
        <PaginationItem active>
            <PaginationLink href="#/womanresearchers-stats" >{currentPage}</PaginationLink>
        </PaginationItem>
        
        {#if moreData}
            <PaginationItem >
                <PaginationLink href="#/womanresearchers-stats" on:click="{() => upOffset(1)}">{currentPage + 1}</PaginationLink>
            </PaginationItem>
        {/if}
        <PaginationItem class="{moreData ? '' : 'disabled'}">
            <PaginationLink next href="#/womanresearchers-stats" on:click="{() => upOffset(1)}"/>
        </PaginationItem>  
    </Pagination>

</main>