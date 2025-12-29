class AppHeader extends HTMLElement {
  connectedCallback() {
    const isSubfolder = window.location.pathname.includes('/pages/');
    const root = isSubfolder ? '../../' : './';

    this.innerHTML = `
    <header class="cabecalho">
        <div class="cabecalho__menu">
            <div class="cabecalho__menu__botao">
                <img class="cabecalho__menu__botao__img" src="${root}img/nav/Menu.png" alt="">
                <p>Menu</p>
            </div>

            <a href="${root}index.html">
                <img class="cabecalho__menu__img" src="${root}img/logo/logo2.png" alt="Logo do Site">
            </a>
            <button class="buttomTema" onclick="mudaTema()">
                <img src="${root}img/nav/Dark Mode.png" alt="">
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
  }
}
customElements.define('app-header', AppHeader);