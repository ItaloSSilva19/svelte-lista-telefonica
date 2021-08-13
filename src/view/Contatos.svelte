<script>
	import { contatos, generateId, operadoras } from '../contatosStore.js';
	let novoContato = {"id": generateId()};
	let selected;
	
	function addContato() {
		novoContato.operadora = selected;
		$contatos = [novoContato, ...$contatos];
		novoContato = {"id": generateId()};
		selected;
	};
</script>

<div class="
position-absolute top-50 start-50 translate-middle
shadow rounded bg-light bg-gradient text-dark 
p-3 mb-2 w-50 h-auto "
>
	<input class="form-control" type="text" placeholder="Pesquisar">
	<div class="table-responsive">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>#</th>
					<th>Código Cliente</th>
					<th>Nome</th>
					<th>Telefone</th>
					<th>Operadora</th>
					<th>Data</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td></td>
					<td>{novoContato.id}</td>
					<td><input bind:value={novoContato.nome} class="form-control" type="text" placeholder="Nome"></td>
					<td><input bind:value={novoContato.telefone} class="form-control" type="text" placeholder="Telefone"></td>
					<td>
						<select class="form-control" bind:value={selected}>
						{#each $operadoras as operadora}
							<option value={operadora}>{operadora.nome}</option>
						{/each}
						</select>
					</td>
					<td><input bind:value={novoContato.data} class="form-control" type="text" placeholder="Data"></td>
				</tr>
				{#each $contatos as contato(contato.id)}
				<tr>
					<td></td>
					<td>{contato.id}</td>
					<td>{contato.nome}</td>				
					<td>{contato.telefone}</td>				
					<td>{contato.operadora.nome}</td>				
					<td>{contato.data}</td>				
				</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="d-grid gap-2">
  <button class="btn btn-primary" type="button" on:click="{()=> {addContato()}}" >Criar Contato</button>
	</div>
</div>

