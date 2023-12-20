class Faq extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <style>
        .accordion-button {
            padding: 0px;
            font-weight: bold;
            border: 0;
            font-size: 18px;
            color: #273272;
            text-align: left;
          }
          .accordion-button:focus {
            box-shadow: none;
            border: none;
          }
          .accordion-button:not(.collapsed) {
            background: none;
            color: #ff5700;
          }
          .accordion-button{
            padding: 15px;
          }
          .accordion-button::after {
            display: none;
          }
          .accordion-button:not(.collapsed)::after {
            display: none;
          }
          .main-container{
            background-color:#273272;
          }
          .faq-container{
            padding-top: 48px;
            padding-bottom: 48px;
          }
          .accordion {
            --bs-accordion-active-bg: #ffffff;
            --bs-accordion-active-color: #000000;
            --bs-accordion-btn-focus-box-shadow: none;
          }
          
          .accordion .accordion-item:has(.accordion-button:not(.collapsed)) {
            border: 2px solid #ff5700;
            box-shadow: 5px 5px #ff5700;
          }
          
          .accordion-collapse {
            transition: all 0.3s;
          }
          .accordion .fa {
            margin-right: 0.5rem;
          }
        </style>
        <div class="main-container">
        <div class="container faq-container">
          <h2 class="text-center text-decoration-underline text-white mb-5">
            FAQs
          </h2>
          <p class="text-justify text-white">Online courses basically mean that you are learning separate from others, success doesn’t 
          come to you , you go to it. Take the first step of asking your queries. And it’s important to 
          clear all your doubts before choosing the perfect career match. Here are some of the Questions 
          our visitors asked frequently.</p>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item rounded-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <i class="fa fa-plus"></i> What is Online Education?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <hr class="my-0 mx-3" />
                <div class="accordion-body">
                  <b>Online Degrees</b><br /><br />
                  Universities/Institutes only with NAAC A+ (CGPA between 3.26 –
                  3.50) or under top 100 NIRF ranked Grading are allowed to
                  offer Online courses.<br /><br />

                  In Online leaning, there is no state jurisdiction which means
                  student can take classes & appear for examination with the
                  help of broadband and a laptop irrespective of his or her
                  location.<br /><br />

                  Online education courses give students the freedom to work
                  according to their comfort and convenience.<br /><br />

                  In Online program student will benefit from internship &
                  placement opportunities.<br /><br />

                  An online course is a better bet as its quality, status and
                  popularity are rising continuously.<br /><br />

                  <b>Distance Degrees</b><br /><br />
                  Universities having NAAC A (CGPA between 3.01 – 3.25) Grade
                  &top 100 NIRF ranked can offer Distance courses.<br /><br />

                  In Distance learning there is state jurisdiction (student have
                  to appear for the examination at that state only).<br /><br />

                  Distance courses didn’t give any such kind of comfort &
                  convenience.<br /><br />

                  There is no placement assistance in distance courses.<br /><br />

                  A Distance course is a good way of getting higher education
                  without much flexibility.
                </div>
              </div>
            </div>
            <div class="accordion-item my-4 rounded-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <i class="fa fa-plus"></i> Which university is allowed to
                  Offer Online Degree & Which one is for Distance?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <hr class="my-0 mx-3" />
                <div class="accordion-body">
                  Universities/Institutes only with NAAC A+ (rating above 3.26)
                  or top 100 NIRF ranked grading are allowed to offer online
                  education courses.<br /><br />

                  Universities having NAAC A Grade (rating above 3.01 upto 3.25)
                  & top 100 NIRF ranked can offer distance courses.
                </div>
              </div>
            </div>
            <div class="accordion-item my-4 rounded-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <i class="fa fa-plus"></i> Which platform of education is best
                  online or distance?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <hr class="my-0 mx-3" />
                <div class="accordion-body">
                  An online course is a better bet as its quality, status and
                  popularity are rising continuously. Online teaching requires
                  active student participation and accountability. Online
                  learning goes beyond the theoretical concepts and bookish
                  knowledge which will enhance the practical abilities and
                  proficiencies in the students.<br /><br />

                  A distance course is also a good way of getting higher
                  education without much flexibility & expense but it doesn’t
                  require active student participation that will somehow make
                  the student less focused towards the course.
                </div>
              </div>
            </div>
            <div class="accordion-item my-4 rounded-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  <i class="fa fa-plus"></i> Is Online Degree has the same value
                  as of regular degree?
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <hr class="my-0 mx-3" />
                <div class="accordion-body">
                  As per UGC guideline, any degree obtained from an open or
                  distance learning institution should be treated as equivalent
                  to the traditional university/institutions in the country.<br /><br />

                  India’s Prime Minister Narendra Modi, gives a big push to
                  online learning with higher education institutions being
                  allowed to run full-fledged online courses.
                </div>
              </div>
            </div>
            <div class="accordion-item my-4 rounded-3">
              <h2 class="accordion-header">
                <button
                  class="accordion-button rounded-3 collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  <i class="fa fa-plus"></i> Which Course Can be Studied in
                  online Education ?
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <hr class="my-0 mx-3" />
                <div class="accordion-body">
                  Only IT, management & journalism courses are allowed to offer
                  through online distance education. Courses related to
                  technical fields like engineering, medical & law are not
                  allowed to offer through distance mode as these courses is
                  more of a practical knowledge.<br /><br />

                  The list of online education courses one can opt through this
                  mode is mentioned below:<br /><br />

                  Distance/Online MBA<br /><br />

                  Distance/Online BBA<br /><br />

                  Distance/Online MCA<br /><br />

                  Distance/Online BCA<br /><br />

                  Distance/Online M.Com<br /><br />

                  Distance/ Online B.Com<br /><br />

                  Distance/ Online MA<br /><br />

                  Distance/Online Masters in Journalism and Mass
                  Communication<br /><br />

                  UG PROGRAM<br /><br />

                  Online BBA<br /><br />

                  Distance BBA<br /><br />

                  Online BCA<br /><br />

                  Distance BCA<br /><br />

                  Online B.Com<br /><br />

                  Distance B.com<br /><br />

                  Online BA<br /><br />

                  Distance BA<br /><br />

                  PG PROGRAMS<br /><br />

                  Online MBA<br /><br />

                  Distance MBA<br /><br />

                  Online MCA<br /><br />

                  Distance MCA<br /><br />

                  Online M.Com<br /><br />

                  Distance M.com<br /><br />

                  Online MA<br /><br />

                  Distance MA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
        `;
  }
}

customElements.define("f-a-q", Faq);
