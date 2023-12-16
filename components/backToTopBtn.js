class BackToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
        .scroll-top {
            position: fixed;
            visibility: hidden;
            opacity: 0;
            right: 15px;
            bottom: -15px;
            z-index: 99999;
            background: #ff5700;
            width: 44px;
            height: 44px;
            border-radius: 50px;
            transition: all 0.4s;
          }
          
          .scroll-top i {
            font-size: 24px;
            color: #fff;
            line-height: 0;
          }
          
          .scroll-top:hover {
            background: #ff5700;
            color: #fff;
          }
          
          .scroll-top.active {
            visibility: visible;
            opacity: 1;
            bottom: 15px;
          }
        </style>
        <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
        `;
  }
}

customElements.define("backtotop-comp", BackToTop);
