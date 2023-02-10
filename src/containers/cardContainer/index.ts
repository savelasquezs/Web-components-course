import './style.css';

export class CardContainer extends HTMLElement {
	constructor(public div: HTMLElement = document.createElement('div')) {
		super();
	}
	connectedCallback() {
		this.classList.add('cardContainer');
	}
	getStyles() {
		return `<style>
        :host {
            margin-top: 50px;
            display: grid;
            place-items: center;
            justify-content: center;
            gap: 5%;
            grid-template-columns: repeat(auto-fill, minmax(320px, 350px));
            width: 100%;
        }
        
        
        </style>`;
	}
}
