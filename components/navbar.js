class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <style>
      .main-logo {
        height: 50px;
      }
      .navbar {
        background-color: #fff;
      }
      .nav-link {
        color: #273272;
        font-size: 14px;
        font-weight: bold;
        text-wrap: balance;
      }
      .active {
        color: #ff5700 !important;
      }
      /* Complete styles for main navbar toggler and hamburger menu */
      .navbar-toggler {
        border: none;
        padding: 0;
        outline: none;
      }
      .navbar-toggler:focus {
        box-shadow: none;
      }
      .navbar-toggler .hamburger-toggle {
        position: relative;
        display: inline-block;
        width: 50px;
        height: 50px;
        z-index: 11;
        float: right;
      }
      .navbar-toggler .hamburger-toggle .hamburger {
        position: absolute;
        transform: translate(-50%, -50%) rotate(0deg);
        left: 50%;
        top: 50%;
        width: 50%;
        height: 50%;
        pointer-events: none;
      }
      .navbar-toggler .hamburger-toggle .hamburger span {
        width: 100%;
        height: 4px;
        position: absolute;
        background: #273272;
        border-radius: 2px;
        z-index: 1;
        transition: transform 0.2s cubic-bezier(0.77, 0.2, 0.05, 1),
          background 0.2s cubic-bezier(0.77, 0.2, 0.05, 1), all 0.2s ease-in-out;
        left: 0px;
      }
      .navbar-toggler .hamburger-toggle .hamburger span:first-child {
        top: 10%;
        transform-origin: 50% 50%;
        transform: translate(0% -50%) !important;
      }
      .navbar-toggler .hamburger-toggle .hamburger span:nth-child(2) {
        top: 50%;
        transform: translate(0, -50%);
      }
      .navbar-toggler .hamburger-toggle .hamburger span:last-child {
        left: 0px;
        top: auto;
        bottom: 10%;
        transform-origin: 50% 50%;
      }
      .navbar-toggler .hamburger-toggle .hamburger.active span {
        position: absolute;
        margin: 0;
      }
      .navbar-toggler .hamburger-toggle .hamburger.active span:first-child {
        top: 45%;
        transform: rotate(45deg);
      }
      .navbar-toggler .hamburger-toggle .hamburger.active span:nth-child(2) {
        left: 50%;
        width: 0px;
      }
      .navbar-toggler .hamburger-toggle .hamburger.active span:last-child {
        top: 45%;
        transform: rotate(-45deg);
      }
      .icons {
        display: inline-flex;
        margin-left: auto;
      }
      .icons a {
        transition: all 0.2s ease-in-out;
        padding: 0.2rem 0.4rem;
        color: #ccc !important;
        text-decoration: none;
      }
      .icons a:hover {
        color: white;
        text-shadow: 0 0 30px white;
      }
      .navbar-collapse {
        justify-content: end;
      }
      .dropdown-menu .dropdown-item{
        font-size: 12px;
        color: #273272;
      }
      .dropdown-menu .dropdown-item:hover{
        background-color: #ff5700;
        color: white;
      }
      @media all and (min-width: 992px) {
        .navbar .nav-item .dropdown-menu{  display:block; opacity: 0;  visibility: hidden; transition:.3s; margin-top:0;  }
        .navbar .dropdown-menu.fade-down{ top:80%; transform: rotateX(-75deg); transform-origin: 0% 0%; }
        .navbar .dropdown-menu.fade-up{ top:180%;  }
        .navbar .nav-item:hover .dropdown-menu{ transition: .3s; opacity:1; visibility:visible; top:100%; transform: rotateX(0deg); }
        .dropdown:hover .dropdown-menu {
          display: block;
          margin-top: 0;
          left:8px;
        }
      }
      </style>
      <nav class="navbar navbar-expand-lg p-0">
      <div class="container-fluid center">
        <a class="navbar-brand" href="#"x><img class="main-logo" src="./assets/images/logo.webp" alt=""/></a>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-content"
        >
          <div class="hamburger-toggle">
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </button>
        <div class="collapse navbar-collapse" id="navbar-content">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                >Post Graduate Program</a
              >
              <ul class="dropdown-menu fade-down">
                <li><a class="dropdown-item" href="blog.html">Online MBA Courses</a></li>
                <li><a class="dropdown-item" href="blog.html">Online MCA Courses</a></li>
                <li><a class="dropdown-item" href="blog.html">Online MSC Courses</a></li>
                <li><a class="dropdown-item" href="mcom.html">Online MCOM Courses</a></li>
                <li><a class="dropdown-item" href="#">Online MA Courses</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                >Under Graduate Program</a
              >
              <ul class="dropdown-menu fade-down">
                <li><a class="dropdown-item" href="blog.html">Online BCA Courses</a></li>
                <li><a class="dropdown-item" href="blog.html">Online BBA Courses</a></li>
                <li><a class="dropdown-item" href="blog.html">Online BSC Courses</a></li>
                <li><a class="dropdown-item" href="blog.html">Online BCOM Courses</a></li>
                <li><a class="dropdown-item" href="blog.html">Online BA Courses</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                >Distance Courses</a
              >
              <ul class="dropdown-menu fade-down">
              <li><a class="dropdown-item" href="distance-mba.html">Distance MBA Courses</a></li>
              <li><a class="dropdown-item" href="distance-bba.html">Distance BBA Courses</a></li>
              <li><a class="dropdown-item" href="distance-bca.html">Distance BCA Courses</a></li>
              <li><a class="dropdown-item" href="blog.html">Distance MCA Courses</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Top Universities</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>   
      `;
  }
}

customElements.define("nav-bar", Navbar);
