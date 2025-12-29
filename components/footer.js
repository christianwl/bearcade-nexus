class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div>
            <a href="/index.html">
                <img class="rodape__logo" src="/img/logo/logo2.png" alt="Logo do Site">
            </a>
        </div>
        <div class="rodape__contato">
            <a href="https://www.instagram.com/bearly_rui/">
                <img src="/img/icones/instagramR.png" alt="Icone do Instagram">
            </a>
            <a href="https://www.linkedin.com/in/christianwilliam-dev/">
                <img src="/img/icones/linkedinR.png" alt="Icone do LinkedIn">
            </a>
            <a href="https://github.com/christianwl">
                <img src="/img/icones/githubR.png" alt="Icone do GitHub">
            </a>
        </div>
        <div class="rodape__sub">
            <p class="rodape__c">
                <span>&copy; 2024 Christian Rui</span>
                <br>
                Projeto para fins educacionais. Todas as marcas, logotipos e imagens são de propriedade de seus respectivos donos.
            </p>
        </div>
    </footer>
    `;
  }
}

customElements.define('app-footer', AppFooter);
