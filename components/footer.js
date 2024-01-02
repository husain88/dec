class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <style>
        </style>
        
          <footer>
            hi
          </footer>  
        `;
    }
  }
  
  customElements.define("footer", Footer);
  