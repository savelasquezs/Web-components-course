export class Card extends HTMLElement {
	constructor(
		public image: string,
		public title: string,
		public description: string
	) {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['titulo', 'description', 'caca'];
	}
	attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
		if (oldVal !== newVal) {
			switch (attr) {
				case 'titulo':
					this.title = newVal;
					break;
				case 'caca':
					this.image = newVal;
					break;
				case 'description':
					this.description = newVal;
					break;
				default:
					break;
			}
		}
	}

	connectedCallback() {
		const template = `
<div class="card">
	<img src=${this.image} alt="${this.title}">
	<h3>${this.title}</h3>
	<p>${this.description}</p>
	<button>More info</button>
</div>
${this.getStyles()}

`;
		if (this.shadowRoot) this.shadowRoot.innerHTML = template;
	}
	getStyles() {
		return `
		<style>
			.card {
				background-color: #4d5555;
				border-radius: 5px;
				display: grid;
				place-items: center;
				padding-bottom: 20px;
				box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.3);
			}
			.card img {
				width: 100%;
				border-top-left-radius: 5px;
				border-top-right-radius: 5px;
			}
			
			.card h3 {
				height: 30px;
			}
			.card p {
				height: 50px;
			}
			.card button {
				background-color: rgb(0, 255, 76);
			}
		
		</style>
		`;
	}
}
