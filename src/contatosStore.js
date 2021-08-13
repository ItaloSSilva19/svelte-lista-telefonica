import { writable } from 'svelte/store';

export function generateId() {
	let id = "";
	while (id.length < 10) {
		id += String.fromCharCode(Math.floor(Math.random() * 64) + 32);		
	}
	return id;
};


export let operadoras = writable([
	{
		"id": "41",
		"nome":"Tim",
		"preco":"2", 
		"tipo":"móvel"
	},
	{
		"id": "14", 
		"nome":"Oi", 
		"preco":"1", 
		"tipo":"móvel"
	},	
	{
		"id": "37",
		"nome":"GVT	",
		"preco":"3", 
		"tipo":"fixo"
	},
	{
		"id": "15", 
		"nome":"claro", 
		"preco":"1", 
		"tipo":"Fixo"
	},
]);

export let contatos = writable([
	{
		"id": generateId(),
		"nome": "João Joanilto Joanildis",
		"telefone": "1111-1111",
		"operadora": {"id": "15", "nome":"claro", "preco":"1", "tipo":"Fixo"},
		"data": new Date()	
	},
	{
		"id": generateId(),
		"nome": "Maria Mariana Marinilde",
		"telefone": "2222-1111",
		"operadora": {"id": "37",	"nome":"GVT	", "preco":"3", "tipo":"fixo"},
		"data": new Date()	
	},
	{
		"id": generateId(),
		"nome": "Tereza Terezinha Terezópolis",
		"telefone": "333-1111",
		"operadora": {"id": "41",	"nome":"Tim",	"preco":"2", "tipo":"móvel"},
		"data": new Date()	
	}
]);
