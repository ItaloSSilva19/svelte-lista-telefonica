export function nameValidate (name) {
	let nameArray = name.split(" ")
	nameArray = nameArray.filter(n => n.length > 0);
	let nameArrayFormated = nameArray.map(function (name) {
			if (/\bd[aeiou]\b/i.test(name)) return name.toLowerCase();
			return name[0].toUpperCase() + name.substring(1).toLowerCase();
		});
	let validatedName = nameArrayFormated.join(" ");
	return validatedName;
};

export function phoneValidate (phone) {
	let phoneInt = "";
	for (let number of phone) {
		if (/[0-9]/.test(number)) {
			phoneInt += number;
		};
	}
	return phoneInt;
};
