class BSnackbar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <style>
        .container {
          flex-direction: row;
          justify-content: space-evenly;
        }
        @media only screen and (max-width: 768px) {
          .head-wrapper {
            flex-direction: column !important;
          }
        }
        .head-wrapper {
          background-color: #273272;
          color: #fff;
          font-size: 13px;
          justify-content: space-between;
        }
        .head-wrapper .btn {
          font-size: 11px;
          background-color: #ff5700;
          font-weight: bold;
          margin-top: 5px;
          margin-bottom: 5px;
        }
        .top-social-icons {
          font-size: large;
        }
        .social-links {
          color: #fff;
        }
        .social-links:hover {
          color: #ff5700;
        }
        </style>
        <header>
        <div class="d-flex flex-wrap-wrap align-items-center head-wrapper">
          <ul class="d-flex justify-content-space-between p-0">
            <li class="p-2">
              <i class="fa-solid fa-phone"></i> <span class="d-none d-md-inline">+91-888-2837-500</span>
            </li>
            <li class="p-2">
              <i class="fa-regular fa-envelope"></i
              ><span class="d-none d-md-inline"> onlinedistancecolleges@gmail.com</span>
            </li>
          </ul>
          <button type="button" class="btn btn-danger rounded-pill">
            Request A Call Back
          </button>
          <ul class="d-flex justify-content-space-between top-social-icons p-0">
            <li><a class="social-links" target="_blank" href="https://www.facebook.com/distanceeducationcourses.in"><i class="fa-brands fa-facebook p-2"></i></a></li>
            <li><a class="social-links" target="_blank" href="https://twitter.com/i/flow/login?redirect_after_login=%2Fdistancemba12"><i class="fa-brands fa-twitter p-2"></i></a></li>
            <li><a class="social-links" target="_blank" href="https://www.linkedin.com/in/distanceeducationcoursesin/"><i class="fa-brands fa-linkedin p-2"></i></a></li>
            <li><a class="social-links" target="_blank" href="https://in.pinterest.com/distanceeducation602/"><i class="fa-brands fa-pinterest p-2"></i></a></li>
            <li><a class="social-links" target="_blank" href="https://www.instagram.com/distanceeducationcourses/"><i class="fa-brands fa-instagram p-2"></i></a></li>
          </ul>
        </div>
      </header>
        `;
    }
  }
  
  customElements.define("bsnack-bar", BSnackbar);
  