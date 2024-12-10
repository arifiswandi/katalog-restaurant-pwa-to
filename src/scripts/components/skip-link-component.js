class SkipComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#skip-link" id="skip-link" class="skip-link">Skip to Content</a>  
    `;
  }
}
customElements.define('skip-link', SkipComponent);