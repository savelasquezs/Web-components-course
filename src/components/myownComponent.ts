export class MyOwnComponent extends HTMLElement {
	constructor(
		public img_url: string,
		public title: string,
		public description: string
	) {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['img_url', 'description', 'title'];
	}

	attributeChangedCallback(attr: string, oldval: string, newval: string) {
		if (oldval !== newval) {
			switch (attr) {
				case 'img_url':
					this.img_url = newval;
					break;
				case 'description':
					this.description = newval;
					break;
				case 'title':
					this.title = newval;
					break;
				default:
					break;
			}
		}
	}
	getTemplate() {
		const template = document.createElement('template');
		template.innerHTML = `
        <section class="card">
            <img class="card--img" src="${this.img_url}" alt="${this.title}">
            <div class="card--info">
                <h3 class="card--info__title">${this.title}</h3>
                <p class="card--info__description">${this.description}</p>
                <p><slot name="add"></p>
                <p><slot name="otro"></p>

            </div>
        </section>
        ${this.getStyles()}
        `;
		return template;
	}

	getStyles() {
		return `
            <style>
                :host{
                    display:grid;
                    width:100%;
                    min-width: 300px;
                    max-width:450px;
                    background-color:#1c1c1c;
                    place-items:center;
                    justify-content:center;
                    color:white
                }
                :host .card{
                    width: 100%;
                    padding-bottom: 20px;
                    border-radius: 3%;
                    display: grid;
                    place-content: center;
                }
                :host .card--img{
                    width: 100%;
                    border-top-left-radius: 3%;
                    border-top-right-radius: 3%;
                }
                :host .card--info__title, :host .card--info__description{
                    height: 30px;
                    text-align: center;
                    
                }
            </style>
        `;
	}
	render() {
		this.shadowRoot?.append(this.getTemplate().content.cloneNode(true));
	}

	connectedCallback() {
		this.render();
	}
}
