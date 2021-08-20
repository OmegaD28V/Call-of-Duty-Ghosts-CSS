/**
 * Author: Dev Omega
 * Date: 20-08-2021
 */
let arrayItems = [
	'Juega en línea en el modo multijugador de Call of Duty: Ghosts.', 
	'Multijugador local para un máximo de dos jugadores.', 
	'Partidas privadas en una red local.', 
	'Ir a la PlayStation Store.', 
	'Fija las opciones del juego.', 
	'Juega a pelotones.', 
	'Juega al modo exinción.', 
];
let items = document.getElementsByClassName('items');
let info = document.getElementById('info');
let itemActive; //Item con la clase active.
let idItemActive; //Id del item con la clase active.

// Remover la clase active de todos los items.
function refreshItems() {
	for (const k of items) {
		k.classList.remove('active');
	}
}

// Agregar texto al elemento info del item correspondiente.
function textActive(element) {
	info.innerText = arrayItems[element.getAttribute('id')];
}

// Recorrer todos los items y llamar a una funcion callback.
function eachItems(callback) {
	for (const i of items) {
		callback(i);
	}
}

// Agregar evento keydown a todo el documento.
function keyDown() {
	document.addEventListener('keydown', (e) => {
		if (e.keyCode == 38) { //Verificar que se presione la tecla flecha arriba.
			//Recorrer los items y almacenar el item activo en itemActive.
			eachItems((i) => {
				if (i.classList.contains('active')) {
					itemActive = i;
				}
			});
			refreshItems(); //Refrescar los items
			if (itemActive != undefined) { //Validar que itemActive tenga un valor asignado.
				idItemActive = parseInt(itemActive.getAttribute('id')); //Castear a entero y guardar el id del item activo.
				//Si el item es el id 0 activar el 6, si no, activar el anterior.
				if (idItemActive == 0) {
					items[6].classList.add('active');
					textActive(items[6]);
				} else {
					items[idItemActive - 1].classList.add('active');
					textActive(items[idItemActive - 1]);
				}
			}
		} else if (e.keyCode == 40) { //Verificar que se presione la tecla flecha abajo.
			//Recorrer los items y almacenar el item activo en itemActive.
			eachItems((i) => {
				if (i.classList.contains('active')) {
					itemActive = i;
				}
			});
			refreshItems(); //Refrescar los items.
			if (itemActive != undefined) { //Validar que itemActive tenga un valor asignado.
				idItemActive = parseInt(itemActive.getAttribute('id')); //Castear a entero y guardar el id del item activo.
				//Si el item es el id 6 activar el 0, si no, activar el siguiente.
				if (idItemActive == 6) {
					items[0].classList.add('active');
					textActive(items[0]);
				} else {
					items[idItemActive + 1].classList.add('active');
					textActive(items[idItemActive + 1]);
				}
			}
		}
	});	
}

// Activar elementos al hacer clic.
eachItems((i) => {
	if (i && info) {
		i.addEventListener('click', () => {
			refreshItems();
			i.classList.add('active');
			textActive(i);
		});
	}
});

// Cargar la function keyDown cuando carga el DOM.
document.addEventListener('DOMContentLoaded', keyDown());