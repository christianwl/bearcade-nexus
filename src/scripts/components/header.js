import { mudaTema } from "../utils/dark-mode.js";

class AppHeader extends HTMLElement {
  connectedCallback() {
    const isSubfolder = window.location.pathname.includes('/pages/');
    const root = isSubfolder ? '../../' : './';

    this.innerHTML = `
    <header class="cabecalho">
        <div class="cabecalho__menu">
            <div class="cabecalho__menu__botao">
                <img class="cabecalho__menu__botao__img" src="${root}src/assets/img/nav/menu.png" alt="">
                <p>Menu</p>
            </div>

            <a href="${root}index.html">
                <img class="cabecalho__menu__img" src="${root}src/assets/img/logo/logo.png" alt="Logo do Site">
            </a>
            <button class="buttomTema" >
                <img src="${root}src/assets/img/nav/dark-mode.png" alt="">
            </button>
        </div>
        <nav class="cabecalho__navegacao">
            <a class="cabecalho__navegacao__links link__games" href="${root}pages/principal/games.html">
                <p>Games</p>
            </a>
            <a class="cabecalho__navegacao__links link__filmes" href="${root}pages/principal/filmes.html">
                <p>Filmes</p>
            </a>
            <a class="cabecalho__navegacao__links link__musicas" href="${root}pages/principal/musicas.html">
                <p>Musicas</p>
            </a>
        </nav>
    </header>
    `;

    // Seleciona o botão e adiciona o evento
    this.querySelector('.buttomTema').addEventListener('click', () => {
        mudaTema(); // Agora ele consegue chamar a função importada
    });
  }
}
customElements.define('app-header', AppHeader);