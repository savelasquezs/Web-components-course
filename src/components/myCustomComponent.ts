export class MyCustomComponent extends HTMLElement {
	constructor() {
		super();
		console.log('Hola desde el constructor, memoria');
	}
	connectedCallback() {
		console.log('Hola desde el dom');
	}
	disconnectedCallback() {
		console.log('Adios del Dom');
	}
}
