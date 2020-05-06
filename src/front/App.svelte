<script>
	import Router from 'svelte-spa-router';
	import Home from './Home.svelte';
	import NotFound from './NotFound.svelte';
	
    import EmpTable from './GUI_Enrique/EmpTable.svelte';
	import EditEmp from './GUI_Enrique/EditEmp.svelte';

	import EdqTable from './GUI_Jairo/EdqTable.svelte';
	import Edit_edq_stat from './GUI_Jairo/Edit_edq_stat.svelte';

	import WomanresearchersTable from './GUI_Lizeth/WomanresearchersTable.svelte';
	import Edit_womanresearchers_stat from './GUI_Lizeth/Edit_womanresearchers_stat.svelte';

	const routes = {
        "/" : Home,
        "/emp-stats" : EmpTable,
		"/emp-stats/:country/:year" : EditEmp,
		"/edq-stats": EdqTable,
		"/edq-stats/:country/:year": Edit_edq_stat,

		"/womanresearchers-stats": WomanresearchersTable,
		"/womanresearchers-stats/:country/:year": Edit_womanresearchers_stat,

		"*" : NotFound
	}
</script>


<main>
	<!-- <h1>Applications</h1>-->
	<Router {routes}></Router>
</main>