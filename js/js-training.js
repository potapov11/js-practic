const objName = {
	names: [
		'Женя',
		"Коля",
		"Слава",
		"Марина",
		"Виталий",
	]
};

const namesList = document.querySelector('.names__list');
namesList.innerHTML = '';
// const log = console.log;

objName.names.sort();
// log(objName.names.sort());

objName.names.forEach(function(name){
	namesList.innerHTML += `
	<li class="name__item">${name}</li>
	`;
});

// log(namesList);
