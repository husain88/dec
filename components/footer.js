class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
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

.footer-header {
  font-size: 16px;
  text-align: center
}
.footer-top address {
  font-size: 14px;
}
.footer-para {
  font-size: 12px;
}
.footer-heading {
  font-size: 12px;
  font-weight: bold;
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
  font-size: 14px;
}

.widget-title {
  text-transform: capitalize;
  font-size: 16px;
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
  background-color: #eee;
  color: #212121;
}
.footer-top a:hover {
  color: #ffb606;
}
.footer-top a {
  color: #fff;
}
.copy-right-text {
}
.copy-right-text a {
  color: #;
  font-weight: bold;
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
                  <div class="mb-3">
                      <img src="./assets/images/brand-logo-white.png"  alt="" class="footer-logo" />
                  </div>
                  <div class="text-white">
                    <address>
                      <a href = "mailto:onlinedistancecolleges@gmail.com" target="_blank">
                      <i class="fa-solid fa-envelope me-2 text-white"></i> onlinedistancecolleges@gmail.com </a> <br>
                      <i class="fa-solid fa-phone me-2"></i> <a href="tel:+91-888-2837-500">+91-888-2837-500</a>
                    </address>
                  </div>
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
                          <li><a href="distance-mba.html"><i class="fas fa-long-arrow-alt-right"></i>Distance MBA</a></li>
                          <li><a href="distance-bba.html"><i class="fas fa-long-arrow-alt-right"></i>Distance BBA</a></li>
                          <li><a href="distance-bca.html"><i class="fas fa-long-arrow-alt-right"></i>Distance BCA</a></li>
                          <li><a href="distance-mca.html"><i class="fas fa-long-arrow-alt-right"></i>Distance MCA</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="col-6 col-lg-3 mb-3">
                    <div class="widget course-links-widget">
                      <h5 class="widget-title">UG Courses</h5>
                      <ul class="courses-link-list">
                        <li><a href="online-bba.html"><i class="fas fa-long-arrow-alt-right"></i>Online BBA</a></li>
                        <li><a href="online-bca.html"><i class="fas fa-long-arrow-alt-right"></i>Online BCA</a></li>
                        <li><a href="online-bsc.html"><i class="fas fa-long-arrow-alt-right"></i>Online BSC</a></li>
                        <li><a href="bcom.html"><i class="fas fa-long-arrow-alt-right"></i>Online BCOM</a></li>
                        <li><a href="online-ba.html"><i class="fas fa-long-arrow-alt-right"></i>Online BA</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6 col-lg-3 mb-3">
                    <div class="widget course-links-widget">
                      <h5 class="widget-title">PG Courses</h5>
                      <ul class="courses-link-list">
                        <li><a href="online-mba-courses.html"><i class="fas fa-long-arrow-alt-right"></i>Online MBA</a></li>
                        <li><a href="online-mca-courses.html"><i class="fas fa-long-arrow-alt-right"></i>Online MCA</a></li>
                        <li><a href="online-msc.html"><i class="fas fa-long-arrow-alt-right"></i>Online MSC</a></li>
                        <li><a href="mcom.html"><i class="fas fa-long-arrow-alt-right"></i>Online MCOM</a></li>
                        <li><a href="online-ma.html"><i class="fas fa-long-arrow-alt-right"></i>Online MA</a></li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-6 col-lg-3 mb-3">
                    <div class="widget course-links-widget">
                      <h5 class="widget-title">Quick Links</h5>
                      <ul class="courses-link-list">
                        <li><a href="contact-us.html"><i class="fas fa-long-arrow-alt-right"></i>Contact Us</a></li>
                        <li><a href="#"><i class="fas fa-long-arrow-alt-right"></i>Our Blogs</a></li>
                        <li><a href="our-trust.html"><i class="fas fa-long-arrow-alt-right"></i>Our Trust</a></li>
                        <li><a href="t&c.html"><i class="fas fa-long-arrow-alt-right"></i>Terms and Conditions</a></li>
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
            <div>
            <p class="footer-heading text-center mt-5 mb-2">Terms and conditions/Privacy Policy</p>
          <p class="footer-para text-center">
          The goal of C-DEC (Center for Distance Education Courses) is to give applicants unbiased, detailed information and 
          comparative advice about universities and their programmes of study. The items on the C-DEC (Center for Distance Education 
            Courses) Site, including the texts, graphics, images, blogs, videos, university logos, and other content (collectively, 
              “Content”), are only provided for informational purposes. The content is not meant to take the place of its Academia Partner’s 
              offerings in any way. It is not intended or intentional to infringe on intellectual property rights or related rights. Only 
              general informational purposes are served by the information provided by C-DEC (Center for Distance Education Courses) on 
              https://www.distanceeducationcourses.in/ or any of its mobile or other applications. <br>
          However, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
          reliability, or completeness of any information on the Site or our mobile application. All information on the site and our 
          mobile application is provided in good faith and to the best of our knowledge. C-DEC (Center for Distance Education Courses) 
          and its affiliates are not responsible for any mistakes or omissions; losses or damages that may arise from the use of the 
          material they provide.
          </p>
        </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="container">
            <div class="row">
              <div class="col-md-12 col-sm-12 text-center">
                <span class="copy-right-text">© 2024 <a href="">C-DEC (Center for Distance Education Courses)</a> All Rights Reserved.</span>
              </div>
            </div>
          </div>
        </div><!-- footer-bottom end -->
      </footer>
              `;
  }
}

customElements.define("footer-comp", Footer);
