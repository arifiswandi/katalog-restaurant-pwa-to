class FooterComponents extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
        <p class="label">Restaurant App</p>
    </footer>
    `;
  }
}
customElements.define('footer-component', FooterComponents);