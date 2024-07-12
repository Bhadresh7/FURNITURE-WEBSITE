class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      `;
  }
}

customElements.define("app-nav", Navbar);
