class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {}
        a,
        a:hover,
        a:focus,
        a:active {
            text-decoration: none;
            outline: none;
        }
        
        a,
        a:active,
        a:focus {
            color: #6f6f6f;
            text-decoration: none;
            transition-timing-function: ease-in-out;
            -ms-transition-timing-function: ease-in-out;
            -moz-transition-timing-function: ease-in-out;
            -webkit-transition-timing-function: ease-in-out;
            -o-transition-timing-function: ease-in-out;
            transition-duration: .2s;
            -ms-transition-duration: .2s;
            -moz-transition-duration: .2s;
            -webkit-transition-duration: .2s;
            -o-transition-duration: .2s;
        }
        
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
        img {
    max-width: 100%;
    height: auto;
}.footer-section {
  background-color: #233243;
  position: relative;
  overflow: hidden;
  z-index: 9;
}
.footer-section:before {
  content: '';
  position: absolute;
  top: -146%;
  left: -18%;
  width: 44%;
  height: 257%;
  transform: rotate(54deg);
  background-color: rgb(31, 47, 64);
  -webkit-transform: rotate(54deg);
  -moz-transform: rotate(54deg);
  -ms-transform: rotate(54deg);
  -o-transform: rotate(54deg);
  z-index: -10;
}
.footer-section:after {
  position: absolute;
  content: '';
  background-color: rgb(31, 47, 64);
  top: -24%;
  right: 4%;
  width: 26%;
  height: 264%;
  transform: rotate(44deg);
  -webkit-transform: rotate(44deg);
  -moz-transform: rotate(44deg);
  -ms-transform: rotate(44deg);
  -o-transform: rotate(44deg);
  z-index: -10;
}
.footer-top {
  padding: 24px 0;
}
.footer-top p,
.company-footer-contact-list li {
  color: #ffffff;
}
.company-footer-contact-list {
  margin-top: 10px;
}
.company-footer-contact-list li {
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.company-footer-contact-list li+li {
  margin-top: 5px;
}
.company-footer-contact-list li i {
  margin-right: 10px;
  font-size: 20px;
  display: inline-block;
}

.footer-top .footer-logo {
    max-width: 170px;
}

@media screen and (max-width: 991px) {
  .footer-logo-wrapper {
    text-align:center;
  }
  .course-links-widget {

  }
}

.course-links-widget ul li {
  font-size: 16px;
}

.widget-title {
  text-transform: capitalize;
  font-size: 20px;
}
.footer-top .widget-title {
  color: #ffffff;
  margin-bottom: 16px;
}
.courses-link-list li+li {
  margin-top: 10px;
}
.courses-link-list li a {
  color: #ffffff;
  text-transform: capitalize;
  font-weight: 400;
}
.courses-link-list li a:hover {
  color: #ffb606;
}
.courses-link-list li i {
  margin-right: 5px;
}
.footer-top .small-post-title a {
  color: #ffffff;
  font-weight: 400;
}
.small-post-item .post-date {
  color: #ffb606;
  margin-bottom: 3px;
  font-family: var(--para-font);
  font-weight: 400;
}
.small-post-list li+li {
  margin-top: 30px;
}
.news-letter-form {
  margin-top: 15px;
}
.news-letter-form input {
  width: 100%;
  padding: 12px 25px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border: none;
}
.news-letter-form input[type="submit"] {
  width: auto;
  border: none;
  background-color: #ffb606;
  padding: 9px 30px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  color: #ffffff;
  margin-top: 10px;
}
.footer-bottom {
  padding: 13px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.149);
}
.copy-right-text {
  color: #ffffff;
}
.copy-right-text a {
  color: #ffb606;
}
.terms-privacy li+li {
  margin-left: 30px;
}
.terms-privacy li a {
  color: #ffffff;
  position: relative;
}
.terms-privacy li a:after {
  position: absolute;
  content: '-';
  color: #ffffff;
  display: inline-block;
  top: 0;
  right: -18px;
}
.terms-privacy li+li a:after {
  display: none;
}
        </style>
        
        <footer class="footer-section shadow">
        <div class="footer-top">
          <div class="container">
            <div class="row align-items-start">
              <div class="col-12 col-lg-3 footer-logo-wrapper">
                <div class="">
                  <div class="mb-2">
                      <img src="./assets/images/brand-logo-white.png"  alt="" class="footer-logo" />
                  </div>
                  <address class="text-white d-none d-lg-block">
                    38 E,<br> Near Spark Mall,<br> Kamla Nagar,<br> New Delhi 110007.
                  </address>
                  <address class="text-white d-block d-lg-none">
                    38 E, Near Spark Mall, Kamla Nagar, New Delhi 110007.
                  </address>
                </div>
              </div>
              <hr class="d-block d-lg-none">
              <div class="col-12 col-lg-9">
                <div class="row">
                  <div class="col-6 col-lg-3 mb-3">
                    <div class="widget company-intro-widget">
                      <div class="widget course-links-widget">
                        <h5 class="widget-title">Distance Courses</h5>
                        <ul class="courses-link-list">
                          <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Distance MBA</a></li>
                          <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Distance BBA</a></li>
                          <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Distance BCA</a></li>
                          <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Distance MCA</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-lg-3 mb-3">
                    <div class="widget course-links-widget">
                      <h5 class="widget-title">UG Courses</h5>
                      <ul class="courses-link-list">
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online BCA</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online BBA</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online BSC</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online BCOM</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online BA</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6 col-lg-3 mb-3">
                    <div class="widget course-links-widget">
                      <h5 class="widget-title">PG Courses</h5>
                      <ul class="courses-link-list">
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online MBA</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online MCA</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online MSC</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online MCOM</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Online MA</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6 col-lg-3 mb-3">
                    <div class="widget course-links-widget">
                      <h5 class="widget-title">Quick Links</h5>
                      <ul class="courses-link-list">
                        <li><a href="our-trust.html"><i class="fas fa-long-arrow-alt-right"></i>Our Trust</a></li>
                        <li><a href="t&c.html"><i class="fas fa-long-arrow-alt-right"></i>Terms and Conditions</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Privacy Policy</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- widget end -->
              <!-- widget end -->
              <!-- widget end -->
              <!-- widget end -->
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 text-center">
                <span class="copy-right-text">© 2024 <a href="">CDEC</a> All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </div><!-- footer-bottom end -->
      </footer>
              `;
  }
}

customElements.define("footer-comp", Footer);
