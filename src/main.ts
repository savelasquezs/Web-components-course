import './style.css';
import { Card } from './components/Card';
import { CardContainer } from './containers/cardContainer';
import { MyCustomComponent } from './components/myCustomComponent';

customElements.define('my-card', Card);
customElements.define('my-card-container', CardContainer);
customElements.define('my-custom', MyCustomComponent);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <my-custom></my-custom>
  <my-card-container>
    <my-card>
    </my-card>

    <my-card 
    caca="https://avatars3.githubusercontent.com/u/1905708?s=280&v=4/"
    titulo="no se que pasa con el"
    description="la description del coso ese"
    >

    </my-card>
    <my-card titulo="no se que pasa con el coco" description="raro que me pase esto a mi" imageUrl="https://avatars3.githubusercontent.com/u/1905708?s=280&v=4/">
    </my-card>
    <my-card></my-card>
    <my-card></my-card>

  </my-card-container>
`;

document.querySelector('my-custom')?.remove();
