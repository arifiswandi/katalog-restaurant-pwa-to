class HeaderComponent extends HTMLElement {

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
		<header class="header-bar">
			<a class="non-decoration" href="#/">
				<div class="header-bar-brand">
					<div class="brand">
						<img class="lazyload" data-src="../favicon.png" height="50px" width: "50px"; alt="brand">
					</div>
					<h1 class="text-shadow font-italic ">Restaurant App</h1>
				</div>
			</a>
			<div class="header-bar-menu">
				<button aria-label="menu hamburger" id="hamburger-btn">☰</button>
			</div>
			<nav id="navigation-drawer" class="header-bar-nav">
				<ul>
					<li><a class="text-shadow " href="#/">Home</a></li>
					<li><a class="text-shadow " href="#/liked">Favorite</a></li>
					<li>
						<a class="text-shadow " href="https://www.linkedin.com/in/arif-iswandi-529520269/" rel="noreferrer noopener" target="_blank">
							About Us
						</a>
					</li>
				</ul>
			</nav>
		</header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);