<script>
import { contatos, generateId, operadoras } from './contatosStore.js';

</script>

<h1 class="text-center"> Lista Telefônica </h1>
<div class="
position-absolute top-50 start-50 translate-middle
shadow rounded bg-light bg-gradient text-dark 
p-3 mb-2 w-50 h-75 "
>
	<div class="d-inline">
		<input class="form-control" type="text" placeholder="Pesquisar">
	</div>
	<table class="table">
		<thead>
			<tr>
				<th></th>
				<th>Código Cliente</th>
				<th>Nome</th>
				<th>Telefone</th>
				<th>Operadora</th>
				<th>Data</th>
			</tr>
		</thead>
		<tbody>
			{#each $contatos as contato(contato.id)}
			<tr>
				<td>
				<td>{contato.id}</td>
				<td>{contato.nome}</td>				
				<td>{contato.telefone}</td>				
				<td>{contato.operadora.nome}</td>				
				<td>{contato.data}</td>				
			</tr>
			{/each}
		</tbody>
	</table>
	<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button">Adicionar Contato</button>
	</div>
</div>

