class AppFooter extends HTMLElement {
  connectedCallback() {
    const isSubfolder = window.location.pathname.includes('/pages/');
    const root = isSubfolder ? '../../' : './';

    this.innerHTML = `
    <footer>
        <div>
            <a href="${root}index.html">
                <img class="rodape__logo" src="${root}src/assets/img/logo/logo.png" alt="Logo do Site">
            </a>
        </div>
        <div class="rodape__contato">
            <a href="https://www.instagram.com/bearly_rui/">
                <img src="${root}src/assets/img/icons/instagram.png" alt="Icone do Instagram">
            </a>
            <a href="https://www.linkedin.com/in/christianwilliam-dev/">
                <img src="${root}src/assets/img/icons/linkedin.png" alt="Icone do LinkedIn">
            </a>
            <a href="https://github.com/christianwl">
                <img src="${root}src/assets/img/icons/github.png" alt="Icone do GitHub">
            </a>
        </div>
        <div class="rodape__sub">
            <p class="rodape__c">
                <span>&copy; 2024 christianwl</span>
                <br>
                Projeto para fins educacionais. Todas as marcas, logotipos e imagens são de propriedade de seus respectivos donos.
            </p>
        </div>
    </footer>
    `;
  }
}
customElements.define('app-footer', AppFooter);
