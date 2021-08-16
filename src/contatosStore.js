import { writable } from 'svelte/store';

export function generateId() {
	let id = "";
	while (id.length < 10) {
		id += String.fromCharCode(Math.floor(Math.random() * 64) + 32);		
	}
	return id;
};

function getDate() {
	let date = new Date();
	const month = date.getMonth();
	const day = date.getDate();
	const year = date.getFullYear();
	return year + "-" + month + "-" + day;
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
		"nome": "João Joanilto da                      Joanildis",
		"telefone": "1111-1111",
		"operadora": {"id": "15", "nome":"claro", "preco":"1", "tipo":"Fixo"},
		"data": getDate()	
	},
	{
		"id": generateId(),
		"nome": "MARIA Mariana Marinilde",
		"telefone": "2222-1111",
		"operadora": {"id": "37",	"nome":"GVT	", "preco":"3", "tipo":"fixo"},
		"data": getDate()	
	},
	{
		"id": generateId(),
		"nome": "Tereza Terezinha terezópolis",
		"telefone": "2333-1111",
		"operadora": {"id": "41",	"nome":"Tim",	"preco":"2", "tipo":"móvel"},
		"data": getDate()	
	}
]);


