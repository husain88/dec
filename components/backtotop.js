class BackToTop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
        .phone {
          position: fixed;
          visibility: visible;
          opacity: 1;
          bottom: 200px;
          right: 3px;
          z-index: 99999;
          color: #ff5700;
          border: 1px solid #ff5700;
          width: 44px;
          height: 44px;
          transition: all 0.4s;
          background-color: #fff;
        }
        .phone i {
          font-size: 24px;
          color: #ff5700;
          line-height: 0;
        }
        .whatsapp{
          position: fixed;
          visibility: visible;
          opacity: 1;
          bottom: 150px;
          right: 3px;
          z-index: 99999;
          color: #ff5700;
          border: 1px solid #ff5700;
          width: 44px;
          height: 44px;
          transition: all 0.4s;
          background-color: #fff;
        }
        .whatsapp i {
          font-size: 24px;
          color: #ff5700;
          line-height: 0;
        }  
        .scroll-top {
            position: fixed;
            visibility: hidden;
            opacity: 0;
            right: 3px;
            bottom: -15px;
            z-index: 99999;
            color: #ff5700;
            border: 1px solid #ff5700;
            width: 44px;
            height: 44px;
            transition: all 0.4s;
            background-color: #fff;
          }         
          .scroll-top i {
            font-size: 24px;
            color: #ff5700;
            line-height: 0;
          }     
          .scroll-top.active {
            visibility: visible;
            opacity: 1;
            bottom: 100px;
          }
        </style>
        <a href="tel:+918882837500" class="phone d-flex align-items-center justify-content-center"><i class="fa fa-phone" aria-hidden="true"></i></a>
        <a href="https://wa.me/918882837500" class="whatsapp d-flex align-items-center justify-content-center"><i class="fa-brands fa-whatsapp" aria-hidden="true"></i></a>
        <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="fa fa-arrow-up" aria-hidden="true"></i></a>
        `;
  }
}

customElements.define("back-to-top", BackToTop);
